import React, { useState } from "react";
import logo from "../util/img/Airbnb_Logo.png";
import styled from "styled-components";
import Login from "../modal/Login";
import "./header.css";
import { getCookie } from "../../api/cookies";
import { useNavigate } from "react-router-dom";
import { Link } from "react-router-dom";
const Header = () => {
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
    <HeaderContainer className="header">
      <Link to="/">
        <Img src={logo} alt="logo" />
      </Link>
      <div className="header__column">
        <form class="search-form">
          <div>
            <ul class="search-form__tab">
              <li tabindex="-1">숙소</li>
              <li tabindex="-1">체험</li>
              <li tabindex="-1">
                <div>온라인 체험</div>
              </li>
            </ul>
          </div>
          <div class="search-form__query form__stay">
            <div class="query__column query__location">
              <div class="query__column-title">위치</div>
              <div>
                <input
                  type="text"
                  name="search-query-location"
                  id="search-query-location"
                  placeholder="어디로 여행가십니까"
                />
              </div>
            </div>
            <div class="divider"></div>
            <div class="query-date-wrapper">
              <div class="query__column query__date">
                <div class="query__column-title">체크인</div>
                <div class="query-date__content">날짜 추가</div>
              </div>
              <div class="divider"></div>
              <div class="query__column query__date">
                <div class="query__column-title">체크아웃</div>
                <div class="query-date__content">날짜 추가</div>
              </div>
              <div class="calendar stay-calendar hidden"></div>
            </div>
            <div class="divider"></div>
            <div class="query__column-submit">
              <div class="query__column query__guest">
                <div class="query__column-title">인원</div>
                <div>게스트 추가</div>
              </div>
              <div>
                <button type="submit">
                  <i class="fas fa-search"></i>
                </button>
              </div>
            </div>
          </div>
          <div class="search-form__query form__experience hidden">
            <div class="query__column query__location">
              <div class="query__column-title">위치</div>
              <input
                type="text"
                name="search-query-location"
                id="search-query-location"
                placeholder="어디로 여행가십니까"
              />
            </div>
            <div class="divider"></div>
            <div class="query__column-submit">
              <div class="query__column query__date">
                <div class="query__column-title">날짜</div>
                <div class="query-date__content">원하는 날짜를 입력하세요</div>
              </div>
              <div class="calendar experience-calendar hidden"></div>
              <div>
                <button type="submit">
                  <i class="fas fa-search"></i>
                </button>
              </div>
            </div>
          </div>
        </form>
      </div>
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
      {modal ? <Login /> : null}
    </HeaderContainer>
  );
};

export default Header;

const HeaderContainer = styled.div`
  width: 90vw;
  display: flex;
  justify-content: space-between;
  padding: 20px 150px;
  height: 40px;
  margin: 20px auto;
  align-items: center;
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
