import React from "react";
import styled from "styled-components";

const Footer = () => {
  return (
    <FooterContainer>
      © 2023 항해bnb, 재용Co. 개인정보 처리방침 이용약관 사이트맵 한국의 변경된
      환불 정책회사 세부정보
    </FooterContainer>
  );
};

export default Footer;

const FooterContainer = styled.div`
  /* position: absolute;
  z-index: 99;
  bottom: 0;
  width: 90vw;
  padding: 20px; */
  display: flex;
  justify-content: center;
  margin-top: 10px;
  padding-bottom: 10px;
`;
