import React, { useState } from "react";
import logo from "../util/img/Airbnb_Logo.png";
import styled from "styled-components";
import Login from "../modal/Login";

const Header = () => {
  const [loginModal, setLoginModal] = useState(false);
  const [modal, setModal] = useState(false);

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
        <div>{localStorage.getItem("name")}님</div>
        <button
          onClick={() => {
            setLoginModal(!loginModal);
          }}
        >
          로그인
        </button>
      </Profile>
      <Modal>{loginModal === true ? <Login /> : null}</Modal>
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

const Modal = styled.div`
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
`;
