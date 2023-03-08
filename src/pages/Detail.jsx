import React from "react";
import Header from "./../components/header/Header";
import Footer from "./../components/footer/Footer";
import styled from "styled-components";
import Detailpage from "../page/Detail";

const Detail = () => {
  return (
    <>
      <TopBox>
        <Header />
      </TopBox>

      <Detailpage />

      <BottomBox>
        <Footer />
      </BottomBox>
    </>
  );
};

export default Detail;

const TopBox = styled.div`
  position: sticky;
  top: 0%;
  z-index: 1;
  background-color: white;
  border-bottom: 1px solid #a8a8a86e;
`;

const BottomBox = styled.div`
  /* position: sticky;
  bottom: 0%;
  z-index: 1;
  background-color: white;
  border-top: 1px solid #a8a8a86e;
  margin-top: 100px; */
`;
