import React from "react";
import Header from "./../components/header/Header";
import Footer from "./../components/footer/Footer";
import Index from "./../components/home/Index";
import { useQuery } from "react-query";
import { getCard } from "../api/api";
import styled from "styled-components";
import Card from "../components/card/Card";

const Home = () => {
  // const { data } = useQuery("card", getCard, {
  //   onSuccess: (response) => {},
  // });

  return (
    <>
      <Header />
      <Index />
      <Wrap>
        {/* {data?.map((item, i) => {
          return <Card key={i} item={item} />;
        })} */}
      </Wrap>
      <Footer />
    </>
  );
};

export default Home;

const Wrap = styled.div`
  width: 1000px;
  margin: 0 auto;
  height: 300px;
  display: flex;
  gap: 30px;
`;
