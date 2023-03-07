import React from "react";
import Header from "./../components/header/Header";
import Footer from "./../components/footer/Footer";
import Index from "./../components/home/Index";
import { useQuery } from "react-query";
import { getCard } from "../api/api";
import styled from "styled-components";
import Card from "../components/card/Card";

const Home = () => {
  const { data } = useQuery("card", getCard, {
    onSuccess: (response) => {},
  });

  console.log(data);

  return (
    <>
      <TopBox>
        <Header />
        <Index />
      </TopBox>

      <Wrap>
        {data?.map((item) => {
          return <Card item={item} />;
        })}
      </Wrap>

      <BottomBox>
        <Footer />
      </BottomBox>
    </>
  );
};

export default Home;

const TopBox = styled.div`
  position: sticky;
  top: 0%;
  z-index: 1;
  background-color: white;
  border-bottom: 1px solid #a8a8a86e;
`;

const Wrap = styled.div`
  display: flex;
  gap: 25px;
  flex-wrap: wrap;
  justify-content: center;
  padding-top: 50px;
  overflow: hidden;
`;

const BottomBox = styled.div`
  position: sticky;
  bottom: 0%;
  z-index: 1;
  background-color: white;
  border-top: 1px solid #a8a8a86e;
  margin-top: 100px;
`;
