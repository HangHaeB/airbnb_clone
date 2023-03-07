import React from "react";
import logo from "../util/img/Airbnb_Logo.png";
import styled from "styled-components";
const Header2 = () => {
  return (
    <HeaderContainer>
      <Img src={logo} alt="logo" />
      <Profile>
        <div>당신의 공간을 에어비앤비하세요</div>
        <div>{localStorage.getItem("name")}</div>
        <button>로그아웃</button>
      </Profile> 
    </HeaderContainer>
  
  );
};

export default Header2;

const HeaderContainer = styled.div`
  width: 90vw;
  display: flex;
  justify-content: space-between;
  padding: 20px;
  height: 40px;
  margin: 0 auto;
`;

const Img = styled.img`
  width: 118px;
`;

const Profile = styled.div`
  display: flex;
  gap: 30px;
`;
