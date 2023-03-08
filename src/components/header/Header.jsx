import React, { useState } from "react";
import logo from "../util/img/Airbnb_Logo.png";
import styled from "styled-components";
import Login from "../modal/Login";
import SignUp from "../modal/SignUp";

const Header = () => {
  const [loginModal, setLoginModal] = useState(false);
  const [signUpModal, setSignUpModal] = useState(false);
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
        <button
          onClick={() => {
            setSignUpModal(!signUpModal);
          }}
        >
          회원가입
        </button>
      </Profile>

      {loginModal === true ? (
        // <Blackbackground>
        <Modal>
          <Login />
        </Modal>
      ) : // </Blackbackground>
      null}

      {signUpModal === true ? (
        <Modal>
          <SignUp />
        </Modal>
      ) : null}
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
  box-shadow: 0 2px 7px rgba(0, 0, 0, 0.3);
  border-radius: 10px;
  height: 500px;
`;

const Blackbackground = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100vh;
  background-color: rgba(0, 0, 0, 0.3);
  z-index: 1000;
`;
