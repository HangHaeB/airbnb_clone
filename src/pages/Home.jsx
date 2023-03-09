import React, { useState, useEffect, useCallback } from "react";
import Header from "./../components/header/Header";
import Footer from "./../components/footer/Footer";
import { getCard, filterCategory } from "../api/api";
import { useInView } from "react-intersection-observer";
import axios from "axios";
import { useQuery } from "react-query";
import Card from "./../components/card/Card";
import styled from "styled-components";
import Index from "./../components/home/Index";

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
    await axios.get(`${process.env.REACT_APP_SERVER_URL}/api/houses?page=1&size=24`).then((res) => {
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

      <TopBox>
        <Header />
        <Index />
      </TopBox>

      <Wrap>
        {data?.map((item, i) => {
          return <Card key={i} item={item} />;
        })}
      </Wrap>

      <BottomBox>
        <Footer />
      </BottomBox>
    </>
  );
};

export default Home;

const TopBox = styled.div`
  position: sticky;
  top: 0%;
  z-index: 1;
  background-color: white;
  border-bottom: 1px solid #a8a8a86e;
`;

const Wrap = styled.div`
  display: flex;
  gap: 25px;
  flex-wrap: wrap;
  justify-content: center;
  padding-top: 50px;
  overflow: hidden;
`;

const BottomBox = styled.div`
  position: sticky;
  bottom: 0%;
  z-index: 1;
  background-color: white;
  border-top: 1px solid #a8a8a86e;
  margin-top: 100px;
`;
