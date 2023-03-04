import React from "react";
import Header from "./../components/header/Header";
import Footer from "./../components/footer/Footer";
import Index from "./../components/home/Index";
import Card from "./../components/card/Card";
import { useQuery } from "react-query";
import { getCard } from "../api/api";

const Home = () => {
  // const {isLoading, isError, data} = useQuery("card", getCard)
  // if (isLoading) {
  //   return (<h1>로딩중입니돵</h1>);
  // }
  // if (isError) {
  //   return (<h1>오류낫슴</h1>);
  // }.
  // console.log(data)

  const seryoung = [
    { name: "apple", color: "red", price: "2000" },
    { name: "banana", color: "yellow", price: "4000" },
    { name: "strawberry", color: "red", price: "6000" },
  ];

  return (
    <>
      <Header />
      <Index />
      <div>
        {seryoung.map((kibeom) => {
          return <Card chanyeol={kibeom} />;
        })}
      </div>
      <Footer />
    </>
  );
};

export default Home;
