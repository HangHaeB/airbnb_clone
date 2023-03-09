import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from "../pages/Home";
import Detail from "./../pages/Detail";
import MyPageAddRoom from "./../pages/MyPageAddRoom";
import MyPageWishList from "./../pages/MyPageWishList";
import MyPageReservation from "./../pages/MyPageReservation";

const Router = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/:id" element={<Detail />} />
        <Route path="/mypage" element={<MyPageAddRoom />} />
        {/* <Route path="/oauth/callback/kakao" component={kakao}></Route> */}
      </Routes>
    </BrowserRouter>
  );
};

export default Router;
