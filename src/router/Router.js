import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Main from "../page/Main";
import Detail from "../page/Detail";
import MyPage from "../page/MyPage";

const Router = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Main/>} />
        <Route path="detail" element={<Detail/>} />
        <Route path="mypage" element={<MyPage/>} />
      </Routes>
    </BrowserRouter>
  );
};

export default Router;