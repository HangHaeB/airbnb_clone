import React, { useState } from "react";
import styled from "styled-components";
// import { useNavigate } from "react-router-dom";

import { useQuery } from "react-query";

const Card = ({ chanyeol }) => {
  // const navigate = useNavigate();

  return (
    <div>
      {chanyeol.name}
      {chanyeol.color}
      {chanyeol.price}
    </div>
  );
};

export default Card;

const CardBox = styled.div`
  width: 200px;
  text-align: center;
`;

const ImgBox = styled.div`
  width: 200px;
  height: 200px;
  position: relative;
  background-color: lightgray;
`;

const ImgView = styled.img`
  width: 200px;
  height: 200px;
  border-radius: 10px;
`;

const Heart = styled.div`
  width: 20px;
  height: 20px;
  font-size: 25px;
  position: absolute;
  top: 10%;
  left: 80%;
  color: #00000057;
  cursor: pointer;
  &:hover {
    color: #ff4400;
  }
`;

const Description = styled.div`
  text-align: center;
  margin-top: 5px;
  width: 200px;
  height: 50px;
  background-color: #e1e1ff;
`;
