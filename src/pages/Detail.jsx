import React from "react";
import Header from "./../components/header/Header";
import Footer from "./../components/footer/Footer";
import { useQuery } from "react-query";
import { getDetail } from "../api/api";
import styled from "styled-components";

const Detail = (item) => {
  const { data } = useQuery("Detail", getDetail, {
    onSuccess: (response) => {},
  });

  console.log(data);

  return (
    <>
      <Header />

      <TitleBox>{item.title}</TitleBox>
      <LocationBox>{item.location}</LocationBox>
      <SaveButton>♡</SaveButton>
      <img src={item.imageUrl} alt="img" />
      <Footer />
    </>
  );
};

export default Detail;

const TitleBox = styled.div`
  width: 300px;
  height: 50px;
  background-color: yellow;
  color: black;
`;
const LocationBox = styled.div``;
const SaveButton = styled.button`
  width: 10px;
  height: 10px;
`;
