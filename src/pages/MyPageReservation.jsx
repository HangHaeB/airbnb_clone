import React from "react";
import Navbar from "../components/mypage/navbar/Navbar";
import styled from "styled-components";
import Footer from "./../components/footer/Footer";

const MyPageReservation = () => {
  return (
    <div>
      <Navbar />
      <ContentContainer>ㅎㅇ</ContentContainer>
      <Footer />
    </div>
  );
};

export default MyPageReservation;
const ContentContainer = styled.div`
  background-color: #ff5b61;
  margin: 0px 150px;
  height: 70vh;
`;
