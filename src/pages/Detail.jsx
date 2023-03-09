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
      <StMiddleBox>
        <Detailpage />
      </StMiddleBox>
      <Footer />
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

const StMiddleBox = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  width: 50%;
  margin: 40px auto;
  box-sizing: border-box;
  ::-webkit-scrollbar {
    display: none;
  }
  overflow-x: hidden;
`;
