import React from "react";
import Header2 from "./../../header/Header2";
import styled from "styled-components";
import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <div>
      <Header2 />
      <NavContainer>
        <h2>마이 페이지</h2>
        <NavUl>
          <Link to="/mypage">
            <NavLi1>나의 예약</NavLi1>
          </Link>
          <Link to="/mypage/wishlist">
            <NavLi2>위시리스트</NavLi2>
          </Link>
          <Link to="/mypage/addroom">
            <NavLi3>숙소등록하기</NavLi3>
          </Link>
        </NavUl>
      </NavContainer>
    </div>
  );
};

export default Navbar;

const NavContainer = styled.div`
  display: flex;
  flex-direction: column;
  margin: 50px 0px 0px 150px;
  gap: 50px;
`;

const NavUl = styled.ul`
  list-style: none;
  display: flex;
  padding: 0;
  gap: 36px;
  margin: 0;
`;

const NavLi1 = styled.li`
  font-size: 24px;
  font-weight: 900;
  padding: 10px;
  width: 200px;
  height: 40px;
  position: relative;
  background-color: #ff5b61;
  cursor: pointer;
  ::before {
    content: "";
    display: block;
    width: 72px;
    height: 38px;
    position: absolute;
    right: -37px;
    bottom: 0px;
    background-color: #ff5b61;
    transform: rotate(60deg);
    z-index: -1;
  }
`;
const NavLi2 = styled.li`
  font-size: 24px;
  font-weight: 900;
  padding: 10px;
  width: 200px;
  height: 40px;
  position: relative;
  background-color: #ff878b;
  cursor: pointer;
  ::before {
    background-color: #ff878b;
    content: "";
    display: block;
    width: 72px;
    height: 38px;
    position: absolute;
    right: -37px;
    bottom: 0px;
    transform: rotate(60deg);
    z-index: -1;
  }
`;
const NavLi3 = styled.li`
  font-size: 24px;
  font-weight: 900;
  padding: 10px;
  width: 200px;
  height: 40px;
  position: relative;
  cursor: pointer;
  background-color: #fbb2b5;
  ::before {
    background-color: #fbb2b5;
    content: "";
    display: block;
    width: 72px;
    height: 38px;
    position: absolute;
    right: -37px;
    bottom: 0px;
    transform: rotate(60deg);
    z-index: -1;
  }
`;
