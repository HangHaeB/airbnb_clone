import React from "react";
import { TbUfo } from "react-icons/tb";
import { MdOutlineHouseboat } from "react-icons/md";
import { GiLighthouse } from "react-icons/gi";

import styled from "styled-components";

const Index = () => {

  return (
    <CategoryBox>
      <Case1>
        <TbUfo className="TbUfo" />
        <Desc1>기상천외한 숙소</Desc1>
      </Case1>
      <Case2>
        <MdOutlineHouseboat className="MdOutlineHouseboat" />
        <Desc2>한옥</Desc2>
      </Case2>
      <Case3>
        <GiLighthouse className="GiLighthouse" />
        <Desc3>인기 급상승</Desc3>
      </Case3>
    </CategoryBox>
  );

};

export default Index;

const CategoryBox = styled.div`
  gap: 30px;
  display: flex;
  flex-direction: row;
  justify-content: center;
  border-top: 1px solid #a8a8a86e;
  padding-top: 10px;
`;

const Case1 = styled.div`
  width: 110px;
  display: flex;
  flex-direction: column;
  align-items: center;
  margin-top: 10px;
  cursor: pointer;
  .TbUfo {
    font-size: 25px;
    color: black;
  }
  &:hover {
    border-bottom: 2px solid gray;
  }
`;
const Desc1 = styled.div`
  margin-top: 8px;
  padding-bottom: 10px;
  font-size: small;
  color: black;
`;

const Case2 = styled.div`
  width: 40px;
  display: flex;
  flex-direction: column;
  align-items: center;
  margin-top: 10px;
  cursor: pointer;

  border-bottom: 2px solid white;
  .MdOutlineHouseboat {
    font-size: 25px;
    color: black;
  }
  &:hover {
    border-bottom: 2px solid gray;
  }
`;
const Desc2 = styled.div`
  margin-top: 8px;
  padding-bottom: 10px;
  font-size: small;
  color: black;
`;

const Case3 = styled.div`
  width: 80px;
  display: flex;
  flex-direction: column;
  align-items: center;
  margin-top: 10px;
  cursor: pointer;
  .GiLighthouse {
    font-size: 25px;
    color: black;
  }
  &:hover {
    border-bottom: 2px solid gray;
  }
`;
const Desc3 = styled.div`
  margin-top: 8px;
  padding-bottom: 10px;
  font-size: small;
  color: black;
`;
