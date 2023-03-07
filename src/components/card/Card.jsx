import React from "react";
import { useNavigate } from "react-router-dom";
import styled from "styled-components";


const Card = ({ item }) => {
  const navigate = useNavigate();
  return (
    <CardBox>
      <ImgBox>
        <ImgView src={item.imageUrl} alt="img" />
        <Heart>♡</Heart>
      </ImgBox>
      <CardHeaderBox>
        <Title
          key={item.id}
          onClick={() => {
            navigate(`/:${item.id}`);
          }}
        >
          {item.title}
        </Title>
        <StarBox>
          <Star>★</Star>
          <Count>{item.likesNum}</Count>
        </StarBox>
      </CardHeaderBox>
      <CardInfoBox>
        <LocationBox>{item.location}</LocationBox>
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
  width: 300px;
  height: 400px;
  text-align: center;
`;

const Title = styled.div`
  text-align: center;
  margin-top: 15px;
  cursor: pointer;
  font-size: medium;
  font-weight: bold;
`;

const ImgBox = styled.div`
  width: 300px;
  height: 300px;

  position: relative;
  background-color: gray;
  border-radius: 15px;
  cursor: pointer;
`;

const ImgView = styled.img`
  width: 300px;
  height: 300px;
  border-radius: 15px;
`;

const Count = styled.div`
  /* position: absolute;
  top: 83%;
  left: 74%; */
  font-size: 18px;
  margin-top: 0px;
`;

const Star = styled.div`
  /* width: 20px;
  height: 20px; */
  font-size: 20px;
  /* position: absolute;
  top: 80%;
  left: 80%; */
  color: black;
`;

const Heart = styled.div`
  font-size: 25px;
  position: absolute;
  top: 0%;
  left: 80%;
  color: rgba(231, 231, 231, 0.829);
`;

const CardHeaderBox = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
`;

const StarBox = styled.div`
  gap: 3px;
  display: flex;
  flex-direction: row;
  margin-top: 2px;
`;
