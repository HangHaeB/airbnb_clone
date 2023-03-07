import React from "react";
import Header from "./../components/header/Header";
import Footer from "./../components/footer/Footer";
import { useQuery } from "react-query";
import { getDetail } from "../api/api";
import styled from "styled-components";
import { useParams } from "react-router";

const Detail = (item) => {
  const postID = useParams();
  console.log(postID);
  // useParams를 사용해 URL 맨 뒤에 붙을 숫자를 postID라고 이름붙이고 가져온다

  const { data } = useQuery("Detail", () => {
    return getDetail(postID.id);
  });
  // getDetail을 사용, postID와 id가 같은 data를 가져온다.

  console.log(data);

  return (
    <>
      <TopBox>
        <Header />
      </TopBox>
      <TitleBox>{data?.title}</TitleBox>
      {/* data?.title에 물음표 안붙여주면 에러남. 이거때문에 신경엄청쓰임 */}
      <SaveButton>♡</SaveButton>
      <BottomBox>
        <Footer />
      </BottomBox>
    </>
  );
};

export default Detail;

const TitleBox = styled.div`
  color: black;
`;
const SaveButton = styled.button`
  width: 10px;
  height: 10px;
`;

const BottomBox = styled.div`
  position: sticky;
  bottom: 0%;
  z-index: 1;
  background-color: white;
  border-top: 1px solid #a8a8a86e;
  margin-top: 100px;
`;
const TopBox = styled.div`
  position: sticky;
  top: 0%;
  z-index: 1;
  background-color: white;
  border-bottom: 1px solid #a8a8a86e;
`;
