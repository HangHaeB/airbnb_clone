import React, { useState, useEffect, useCallback } from "react";
import Header from "./../components/header/Header";
import Footer from "./../components/footer/Footer";
import Index from "./../components/home/Index";
import { useInView } from "react-intersection-observer";
import axios from "axios";

const Home = () => {
  const [items, setItems] = useState([]);
  const [page, setPage] = useState(1);
  const [loading, setLoading] = useState(false);
  const [ref, inView] = useInView();

  const getItems = useCallback(async () => {
    setLoading(true);
    //page화 가져오기
    await axios.get(`${process.env.REACT_APP_SERVER_URL}/api/houses=${page}`).then((res) => {
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

  return (
    <>
      <Header />
      <Index />
      <div className="list">
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
      </div>
      <Footer />
    </>
  );
};

export default Home;
