import React from "react";
import Header from "./../components/header/Header";
import Footer from "./../components/footer/Footer";

import { useQuery } from "react-query";
import { getDetail } from "../api/api";
import styled from "styled-components";
import { useParams } from "react-router";
import { RiHeart3Line } from "react-icons/ri";
import { BsStarFill } from "react-icons/bs";
import Review from "../components/review/Review";

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
<<<<<<< HEAD
      <>
        <TopBox>
          <Header />
        </TopBox>
        <TitleBox>{data?.title}</TitleBox>
        {/* data?.title에 물음표 안붙여주면 에러남. 이거때문에 신경엄청쓰임 */}
        <MiddleBox>
          <StarBox>
            <BsStarFill className="StarLogo" />
            <Count>{data?.likesNum}</Count>
            <LocationBox>{data?.location}</LocationBox>
          </StarBox>
          <HeartBox>
            <RiHeart3Line className="HeartLogo" />
            <SaveText>저장</SaveText>
          </HeartBox>
        </MiddleBox>
      </>

      <ImgBox>
        <ImgView src={data?.imageUrl} alt="img" />
      </ImgBox>
      <UserBox>{data?.userName} 님이 호스팅하는 숙소</UserBox>
      <DescBox>
        <h3>가격 : {data?.price}원/1박</h3>
        <h3>거리 : {data?.distance}km</h3>
        <h3>위치 : {data?.location}</h3>
      </DescBox>

      <Review />

=======

      <TopBox>
        <Header />
      </TopBox>
      <TitleBox>{data?.title}</TitleBox>
      {/* data?.title에 물음표 안붙여주면 에러남. 이거때문에 신경엄청쓰임 */}
      <SaveButton>♡</SaveButton>
>>>>>>> e3f8892335fac15279c3d4d78a27e3b84f1a2254
      <BottomBox>
        <Footer />
      </BottomBox>

    </>
  );
};

export default Detail;

const TopBox = styled.div`
  position: sticky;
  top: 0%;
  z-index: 1;
  background-color: white;
  border-bottom: 1px solid #a8a8a86e;
`;

const TitleBox = styled.div`
  color: black;
  font-size: 200%;
  font-weight: bold;
  margin-top: 20px;
`;

<<<<<<< HEAD
const MiddleBox = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
`;

const StarBox = styled.div`
  gap: 5px;
  display: flex;
  flex-direction: row;
  width: 300px;
  height: 30px;
  .StarLogo {
    font-size: 18px;
    color: black;
    margin-top: 6px;
  }
`;

const Count = styled.div`
  font-size: 16px;
  font-weight: bold;
  padding-top: 2px;
`;
const LocationBox = styled.div`
  margin-left: 10px;
  font-weight: bold;
  text-decoration: underline;
  padding-top: 2px;
`;

const HeartBox = styled.div`
  gap: 10px;
  display: flex;
  flex-direction: row;
  width: 70px;
  height: 30px;
  .HeartLogo {
    font-size: 20px;
    color: #000000;
    margin-top: 6px;
  }
`;

const SaveText = styled.div`
  font-weight: bold;
  text-decoration: underline;
  padding-top: 2px;
`;

const ImgBox = styled.div`
  width: 400px;
  height: 400px;
  position: relative;
  border-radius: 15px;
  margin-top: 25px;
`;

const ImgView = styled.img`
  width: 400px;
  height: 400px;
  border-radius: 15px;
=======
const SaveButton = styled.button`
  width: 10px;
  height: 10px;
>>>>>>> e3f8892335fac15279c3d4d78a27e3b84f1a2254
`;


const BottomBox = styled.div`
  position: sticky;
  bottom: 0%;
  z-index: 1;
  background-color: white;
  border-top: 1px solid #a8a8a86e;
  margin-top: 100px;
`;

const DescBox = styled.div`
  color: black;
  border-top: 1px solid #a8a8a86e;
  width: 400px;
`;

const UserBox = styled.div`
  font-size: 150%;
  font-weight: bolder;
  margin-top: 30px;
  margin-bottom: 20px;
`;

