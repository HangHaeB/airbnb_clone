import React, { useState } from "react";
import logo from "../util/img/Airbnb_Logo.png";
import styled from "styled-components";
import Login from "../modal/Login";
import "./header.css";
import { getCookie } from "../../api/cookies";
import { useNavigate } from "react-router-dom";
import { Link } from "react-router-dom";
const Header2 = () => {
  const [loginModal, setLoginModal] = useState(false);
  const [modal, setModal] = useState(false);
  const [showNavUser, setShowNavUser] = useState(false);
  const showNavUserBtn = () => setShowNavUser((showNavUser) => !showNavUser);
  const showLoginModal = () => setLoginModal((loginModal) => !loginModal);

  const navigate = useNavigate();
  const goToDetail = () => {
    navigate(`/detail`);
  };
  const goToMypage = () => {
    navigate(`/mypage`);
  };
  return (
    <HeaderContainer>
      <Link to="/">
        <Img src={logo} alt="logo" />
      </Link>
      <NavBar>
        <Nav>
          <Profile>
            <div>{localStorage.getItem("name")}님</div>
            {loginModal ? (
              <NavBarBtn onClick={showLoginModal}>로그아웃</NavBarBtn>
            ) : (
              <NavBarBtn onClick={showLoginModal}>로그인</NavBarBtn>
            )}
          </Profile>
          <NavBarBtn>
            <i className="fas fa-globe"></i>
          </NavBarBtn>
          <NavUserBtn onClick={showNavUserBtn}>
            <div>
              <div className="fas fa-bars"></div>
            </div>
            <div>
              <div className="fas fa-user"></div>
            </div>
          </NavUserBtn>
          {showNavUser && (
            <NavUser>
              <UserBar>
                <strong>회원 가입</strong>
              </UserBar>

              <UserBar onClick={() => setModal(!modal)}>로그인</UserBar>
              <Line />
              <UserBar>숙소 호스트 되기</UserBar>
              <UserBar onClick={goToMypage}>마이페이지</UserBar>
              <UserBar>도움말</UserBar>
            </NavUser>
          )}
        </Nav>
      </NavBar>
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

const Nav = styled.nav`
  display: flex;
  align-items: center;
`;
const NavBar = styled.div`
  display: flex;
  justify-content: flex-end;
  align-self: baseline;
`;
const NavBarBtn = styled.div`
  width: 70px;
  margin: 0 auto;
  cursor: pointer;
  background-color: transparent;
  display: flex;
  justify-content: center;
`;
const NavUserBtn = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  width: 80px;
  height: 45px;
  font-size: 1.1rem;
  padding-left: 15px;
  padding-right: 15px;
  background-color: white;
  border-radius: 22px;
  cursor: pointer;
  border: 1px solid gray;
`;
const NavUser = styled.div`
  border: 1px solid red;
  position: absolute;
  top: 90px;
  right: 150px;
  z-index: 100;
  background-color: white;
  color: black;
  border-radius: 10px;
  width: 230px;
  height: 230px;
  padding-top: 10px;
  padding-bottom: 30px;
  /* margin-top: 10px; */
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: space-between;
`;
const Line = styled.div`
  width: 100%;
  margin-top: 5px;
  margin-bottom: 5px;
  border-top: 1px solid rgba(0, 0, 0, 0.3);
`;
const UserBar = styled.div`
  width: 100%;
  padding: 10px 20px 10px 20px;
`;
