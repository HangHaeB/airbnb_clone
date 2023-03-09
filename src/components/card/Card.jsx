import React from "react";
import { useNavigate } from "react-router-dom";
import styled from "styled-components";

import { RiHeart3Line, RiHeart3Fill } from "react-icons/ri";
import { BsStarFill } from "react-icons/bs";

const Card = ({ item }) => {
  const navigate = useNavigate();

  return (
    <CardBox>
      <ImgBox
        onClick={() => {
          navigate(`/${item.id}`);
        }}
      >
        <ImgView src={item.imageUrl} alt="img" />
        <RiHeart3Line className="HeartLogo" />
        <RiHeart3Fill className="HeartLogoBottom" />
      </ImgBox>
      <CardHeaderBox>
        <Title
          key={item.id}
          onClick={() => {
            navigate(`/${item.id}`);
          }}
        >
          {item.location}
        </Title>
        <StarBox>
          <BsStarFill className="StarLogo" />
          <Count>{item.likesNum}</Count>
        </StarBox>
      </CardHeaderBox>
      <CardInfoBox>
        <LocationBox>{item.distance}km 거리</LocationBox>
        <PriceBox>₩{item.price}/박</PriceBox>
      </CardInfoBox>
    </CardBox>
  );
};

export default Card;

const CardInfoBox = styled.div``;
const LocationBox = styled.div`
  text-align: left;
  color: #6b6b6b;
`;
const PriceBox = styled.div`
  text-align: left;
  font-size: medium;
  font-weight: bold;
`;

const CardBox = styled.div`
  width: 250px;
  height: 350px;
`;

const Title = styled.div`
  text-align: center;
  margin-top: 15px;
  cursor: pointer;
  font-size: medium;
  font-weight: bold;
`;

const StarBox = styled.div`
  gap: 5px;
  display: flex;
  flex-direction: row;
  margin-top: 2px;
  .StarLogo {
    font-size: 14px;
    color: black;
    margin-top: 10px;
  }
`;

const ImgBox = styled.div`
  width: 250px;
  height: 250px;
  position: relative;
  background-color: gray;
  border-radius: 15px;
  cursor: pointer;
  .HeartLogo {
    position: absolute;
    top: 10%;
    left: 80%;
    font-size: 30px;
    color: white;
  }
  .HeartLogoBottom {
    position: absolute;
    top: 10%;
    left: 80%;
    font-size: 30px;
    color: #00000057;
  }
`;

const ImgView = styled.img`
  width: 250px;
  height: 250px;
  border-radius: 15px;
`;

const Count = styled.div`
  /* position: absolute;
  top: 83%;
  left: 74%; */
  font-size: 18px;
  margin-top: 0px;
`;

const CardHeaderBox = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
`;
