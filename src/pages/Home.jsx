import React, { useState, useEffect, useCallback } from "react";
import Header from "./../components/header/Header";
import Footer from "./../components/footer/Footer";
import { getCard } from "../api/api";
import { useInView } from "react-intersection-observer";
import axios from "axios";
import { useQuery } from "react-query";
import Card from "./../components/card/Card";
import styled from "styled-components";

const Home = () => {
  const [items, setItems] = useState([]);
  const [page, setPage] = useState(1);
  const [loading, setLoading] = useState(false);
  const [ref, inView] = useInView();

  const { data } = useQuery("card", getCard, {
    onSuccess: (response) => {},
  });

  const getItems = useCallback(async () => {
    setLoading(true);
    await axios.get(`${process.env.REACT_APP_SERVER_URL}/api/houses?page={idx}`).then((res) => {
      setItems((prevState) => [...prevState, res]);
    });
    setLoading(false);
  }, [page]);

  // `getItems` 가 바뀔 때 마다 함수 실행
  useEffect(() => {
    getItems();
  }, [getItems]);

  useEffect(() => {
    // 사용자가 마지막 요소를 보고 있고, 로딩 중이 아니라면
    if (inView && !loading) {
      setPage((prevState) => prevState + 1);
    }
  }, [inView, loading]);

  /// filter 기능 ///
  const [categoryList, setCategoryList] = useState("All");
  // const [data, setData] = useState();

  // useEffect(() => {
  //   activeCat === "All" ? setData(items) : setData(items.filter((vga) => vga.company === activeCat));
  // }, [activeCat]);

  return (
    <>
      <Header />

      {/* <div className="list">
        {items.map((item, idx) => (
          <React.Fragment key={idx}>
            {items.length - 1 == idx ? (
              <div className="list-item" ref={ref}>
                {item.content}
              </div>
            ) : (
              <div className="list-item">{item.content}</div>
            )}
          </React.Fragment>
        ))}
      </div> */}

      <Wrap>
        {data?.map((item) => {
          return <Card item={item} key={item.id} />;
        })}
      </Wrap>

      <Footer />
    </>
  );
};

export default Home;

const Wrap = styled.div`
  width: 90%;
  height: 80vh;
  overflow-y: scroll;
  margin: 100px auto;
  display: flex;
  flex-wrap: wrap;
  box-sizing: border-box;
  gap: 30px;
  ::-webkit-scrollbar {
    display: none;
  }
`;
