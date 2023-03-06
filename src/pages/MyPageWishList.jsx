import React from "react";
import Navbar from "./../components/mypage/navbar/Navbar";
import styled from "styled-components";
import Footer from "./../components/footer/Footer";

const MyPageWishList = () => {
  return (
    <div>
      <Navbar />
      <ContentContainer>
        <Card>이미지 미리보기</Card>
      </ContentContainer>
      <Footer />
    </div>
  );
};

export default MyPageWishList;
const ContentContainer = styled.div`
  background-color: #ff878b;
  margin: 0px 150px;
  height: 70vh;
`;

const Card = styled.div`
  width: 200px;
  height: 400px;
`;
