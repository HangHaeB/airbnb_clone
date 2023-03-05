import React from "react";
import logo from "../util/img/Airbnb_Logo.png";
import styled from "styled-components";
const Header = () => {
  return (
    <HeaderContainer>
      <Img src={logo} alt="logo" />
      <InputContainer>
        <SearchInput1 />
        <SearchInput2 type="date" />
        <SearchInput3 type="date" />
      </InputContainer>
      <Profile>
        <div>당신의 공간을 에어비앤비하세요</div>
        <div>{localStorage.getItem("name")}</div>
        <button>로그아웃</button>
      </Profile>
    </HeaderContainer>
  );
};

export default Header;

const HeaderContainer = styled.div`
  width: 90vw;
  display: flex;
  justify-content: space-between;
  padding: 20px;
  height: 40px;
  margin: 0 auto;
`;
const InputContainer = styled.div`
  display: flex;
`;
const SearchInput1 = styled.input`
  width: 200px;
`;
const SearchInput2 = styled.input`
  width: 200px;
`;
const SearchInput3 = styled.input`
  width: 200px;
`;
const Img = styled.img`
  width: 118px;
`;

const Profile = styled.div`
  display: flex;
  gap: 30px;
`;
