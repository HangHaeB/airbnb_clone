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
      <DetailWholeBox>
        <Detailpage />
      </DetailWholeBox>
      <Footer />
    </>
  );
};

export default Detail;

const TopBox = styled.div`
  width: 1200px;
  position: sticky;
  top: 0%;
  z-index: 1;
  background-color: white;
  border-bottom: 1px solid #a8a8a86e;
`;

const DetailWholeBox = styled.div`
  width: 1200px;
  margin: 0 auto;
`;
