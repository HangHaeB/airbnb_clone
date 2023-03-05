import React from "react";
import Header from "./../components/header/Header";
import Footer from "./../components/footer/Footer";
import Index from "./../components/home/Index";
import {useQuery} from "react-query"
import { getRoom } from '../api/api';

const Home = () => {
  const { isLoading, isError, data } = useQuery("room", getRoom
);
  return (
    <>
      <Header />
      <Index />
      <Footer />
    </>
  );
};

export default Home;
