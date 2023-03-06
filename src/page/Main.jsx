import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import Login from "../components/modal/Login";

function Main() {
  const [loginModal, setLoginModal] = useState(false);

  // 클릭 시 해당 주소로 이동하는 함수
  const navigate = useNavigate();
  const goToDetail = () => {
    navigate(`/detail`);
  };
  const goToMypage = () => {
    navigate(`/mypage`);
  };

  return (
    <>
      <h4>메인 페이지</h4>
      <button onClick={goToDetail}>상세 페이지 가기</button>
      <br />
      <br />
      <button onClick={goToMypage}>마이 페이지 가기</button>
      <br />
      <br />
      <div>
        <button
          onClick={() => {
            setLoginModal(!loginModal);
          }}
        >
          로그인 하기
        </button>
      </div>
      <div>{loginModal === true ? <Login /> : null}</div>
    </>
  );
}

export default Main;
