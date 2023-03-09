import React from "react";

import { useParams } from "react-router";
import { useQuery } from "react-query";
import { getDetail } from "../api/api";
import styled from "styled-components";
import { RiHeart3Line, RiSuitcaseLine } from "react-icons/ri";
import { BsStarFill } from "react-icons/bs";
import { TbLocation, TbKey } from "react-icons/tb";

const Detailpage = (item) => {
  const postID = useParams();
  // console.log(postID);
  // useParams를 사용해 URL 맨 뒤에 붙을 숫자를 postID라고 이름붙이고 가져온다

  const { data } = useQuery("Detail", () => {
    return getDetail(postID.id);
  });
  // getDetail을 사용, postID와 id가 같은 data를 가져온다.

  // console.log(data);

  return (
    <>
      <DetailBoxTop>
        <TitleBox>{data?.title}</TitleBox>
        {/* data?.title에 물음표 안붙여주면 에러남. 이거때문에 신경엄청쓰임 */}
        <MiddleBox>
          <StarBox>
            <BsStarFill className="StarLogo" />
            <Count>{data?.likesNum}</Count>
            <Dot>·</Dot>
            <ReviewNumBox>후기 {data?.reviewNum}개</ReviewNumBox>
            <Dot>·</Dot>
            <LocationBox>{data?.location}</LocationBox>
          </StarBox>
          <HeartBox>
            <RiHeart3Line className="HeartLogo" />
            <SaveText>저장</SaveText>
          </HeartBox>
        </MiddleBox>

        <ImgBox>
          <ImgView src={data?.imageUrl} alt="img" />
        </ImgBox>
      </DetailBoxTop>

      <RescardAndDetail>
        <DetailBoxBottom>
          <UserinfoBox>
            <UserBox>{data?.userName}님이 호스팅하는 숙소</UserBox>
            <UsersmallInfoBox>
              최대 인원 {data?.maxPeople}명 · 침실 {data?.bedRoom}개 · 침대{" "}
              {data?.bedNum}개 · 욕실 {data?.bathRoom}개
            </UsersmallInfoBox>
          </UserinfoBox>
          <CheckinbigBox>
            <CheckinBox>
              <TbKey className="TbKey" />
              <HCBox>
                <HCTitle>셀프 체크인</HCTitle>
                <HCText>열쇠 보관함을 이용해 체크인하세요</HCText>
              </HCBox>
            </CheckinBox>

            <CheckinBox>
              <RiSuitcaseLine className="RiSuitcaseLine" />
              <HCBox>
                <HCTitle>{data?.userName}님은 슈퍼호스트입니다</HCTitle>
                <HCText>슈퍼호스트는 풍부한 경험과 높은 평점을 자랑하며</HCText>
                <HCText>
                  게스트가 숙소에서 편안히 머무를 수 있도록 최선을 다하는
                  호스트입니다.
                </HCText>
              </HCBox>
            </CheckinBox>

            <CheckinBox>
              <TbLocation className="TbLocation" />
              <HCBox>
                <HCTitle>훌륭한 숙소 위치</HCTitle>
                <HCText>
                  최근 숙박한 게스트 중 95%가 위치에 별점 5점을 준 숙소입니다.
                </HCText>
              </HCBox>
            </CheckinBox>
          </CheckinbigBox>
          <AirCoverBox>
            <Aircovertitle>
              <Aircoverred>에어</Aircoverred>
              <Aircoverblack>커버</Aircoverblack>
            </Aircovertitle>
            <Aircoverinfo>
              모든 예약에는 호스트가 예약을 취소하거나 숙소 정보가 정확하지 않은
              경우 또는 체크인에 문제가 있는 상황에 대비한 무료 보호 프로그램이
              포함됩니다.
            </Aircoverinfo>
          </AirCoverBox>
          <DescriptionBox>{data?.explaination}</DescriptionBox>

          <FacilityBox>
            <FacilTitle>숙소 편의시설 🏠</FacilTitle>
            <FacilBox>
              <Facilities>{data?.facilities[0]?.type}</Facilities>
              <Facilities>{data?.facilities[1]?.type}</Facilities>
              <Facilities>{data?.facilities[2]?.type}</Facilities>
              <Facilities>{data?.facilities[3]?.type}</Facilities>
              <Facilities>{data?.facilities[4]?.type}</Facilities>
              <Facilities>{data?.facilities[5]?.type}</Facilities>
              <Facilities>{data?.facilities[6]?.type}</Facilities>
            </FacilBox>
          </FacilityBox>
        </DetailBoxBottom>
        <ResCard>
          <PriceTag>₩{data?.price}/박</PriceTag>
          <StarBox>
            <BsStarFill className="StarLogo" />
            <Count>{data?.likesNum}</Count>
            <Dot>·</Dot>
            <ReviewNumBox>후기 {data?.reviewNum}개</ReviewNumBox>
          </StarBox>

          <StButton>메인으로 이동</StButton>
          <Restext>항해비엔비에서</Restext>
          <Restext>더 다양한 숙소를</Restext>
          <Restext>만나보세요!</Restext>
          <HHBNBtext>HangHaeBnB</HHBNBtext>
        </ResCard>
      </RescardAndDetail>
    </>
  );
};

export default Detailpage;

const HHBNBtext = styled.div`
  margin-top: 30px;
  border-top: 1px solid gray;
`;

const Restext = styled.div`
  background-color: white;
`;

const StButton = styled.button`
  border-radius: 7px;
  background-color: #ff006a;
  width: 150px;
  height: 35px;
  cursor: pointer;
  font-weight: bold;
  font-size: 1rem;
  color: white;
  margin-left: 8px;
  margin-top: 30px;
  margin-bottom: 30px;
`;

const PriceTag = styled.div`
  font-size: 160%;
  font-weight: bolder;
  color: black;
`;

const ResCard = styled.div`
  width: 170px;
  height: 320px;
  background-color: #ffffff;
  border-radius: 20px;
  position: sticky;
  top: 15%;
  margin-top: 40px;
  box-shadow: 0px 0px 15px 0px #a3a3a3;
  padding: 30px;
`;

const RescardAndDetail = styled.div`
  display: flex;
  flex-direction: row;
`;

const FacilityBox = styled.div`
  padding-bottom: 40px;
  border-bottom: 1px solid #a8a8a86e;
`;

const FacilBox = styled.div`
  padding-bottom: 30px;
  border: 1px solid black;
  width: 200px;
  border-radius: 20px;
  padding: 20px;
`;

const FacilTitle = styled.div`
  color: black;
  margin-top: 30px;
  margin-bottom: 20px;
  font-size: 150%;
  font-weight: bolder;
`;
const Facilities = styled.div`
  font-size: 120%;
`;

const DescriptionBox = styled.div`
  padding-top: 30px;
  padding-bottom: 30px;
  border-bottom: 1px solid #a8a8a86e;
`;

const AirCoverBox = styled.div`
  display: flex;
  flex-direction: column;
  padding-top: 30px;
  width: 640px;
  border-bottom: 1px solid #a8a8a86e;
`;
const Aircovertitle = styled.div`
  display: flex;
  flex-direction: row;
`;
const Aircoverred = styled.div`
  color: #ff3287;
  font-size: 30px;
  font-weight: bold;
`;
const Aircoverblack = styled.div`
  color: black;
  font-size: 30px;
  font-weight: bold;
`;
const Aircoverinfo = styled.div`
  color: black;
  margin-bottom: 30px;
`;

const DetailBoxBottom = styled.div`
  width: 640px;
  display: flex;
  flex-direction: column;
  margin: 0px 30px 0px 30px;
`;
const DetailBoxTop = styled.div`
  display: flex;
  flex-direction: column;
  margin: 0px 30px 0px 30px;
`;

const CheckinbigBox = styled.div`
  margin-top: 30px;
  padding-bottom: 30px;
  border-bottom: 1px solid #a8a8a86e;
`;
const HCTitle = styled.div`
  font-weight: 700;
  font-size: 110%;
  margin-left: 20px;
`;
const HCText = styled.div`
  color: gray;
  margin-left: 20px;
`;
const HCBox = styled.div`
  display: flex;
  flex-direction: column;
`;

const CheckinBox = styled.div`
  display: flex;
  flex-direction: row;
  margin-bottom: 10px;
  .TbKey {
    position: relative;
    left: 0%;
    padding-top: 2px;
    font-size: 30px;
    color: #272727;
  }
  .RiSuitcaseLine {
    position: relative;
    left: 0%;
    padding-top: 5px;
    font-size: 30px;
    color: #272727;
  }
  .TbLocation {
    position: relative;
    left: 0%;
    padding-top: 5px;
    font-size: 30px;
    color: #272727;
  }
`;

const UserinfoBox = styled.div`
  border-bottom: 1px solid #a8a8a86e;
`;
const UsersmallInfoBox = styled.div`
  margin-bottom: 30px;
`;

const TitleBox = styled.div`
  color: black;
  font-size: 200%;
  font-weight: bold;
  margin-top: 20px;
`;

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
const Dot = styled.div`
  font-weight: bold;
`;
const Count = styled.div`
  font-size: 16px;
  font-weight: bolder;
  padding-top: 2px;
`;
const ReviewNumBox = styled.div`
  font-weight: bold;
  text-decoration: underline;
  padding-top: 2px;
`;

const LocationBox = styled.div`
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
`;

const UserBox = styled.div`
  font-size: 150%;
  font-weight: bolder;
  margin-top: 30px;
`;
