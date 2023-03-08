import React from "react";
import styled from "styled-components";
import {
  TbTent,
  TbBuildingCastle,
  TbSeeding,
  TbBuildingCottage,
  TbBuildingCommunity,
} from "react-icons/tb";
import {
  MdOutlineCastle,
  MdOutlineHotel,
  MdOutlineHouse,
} from "react-icons/md";
import { BiSwim } from "react-icons/bi";
import { HiOutlineSparkles } from "react-icons/hi";
import {
  RiShipLine,
  RiAncientGateLine,
  RiAncientPavilionLine,
} from "react-icons/ri";
import { CgTrees } from "react-icons/cg";

const Index = () => {
  return (
    <CategoryBox>
      <Case1>
        <RiAncientGateLine className="RiAncientGateLine" />
        <Desc1>한옥</Desc1>
      </Case1>
      <Case2>
        <TbBuildingCastle className="TbBuildingCastle" />
        <Desc2>양옥</Desc2>
      </Case2>
      <Case3>
        <RiAncientPavilionLine className="RiAncientPavilionLine" />
        <Desc3>료칸</Desc3>
      </Case3>

      <Case4>
        <BiSwim className="BiSwim" />
        <Desc4>수영장</Desc4>
      </Case4>

      <Case5>
        <TbTent className="TbTent" />
        <Desc5>캠핑장</Desc5>
      </Case5>

      <Case6>
        <HiOutlineSparkles className="HiOutlineSparkles" />
        <Desc6>디자인</Desc6>
      </Case6>

      <Case7>
        <RiShipLine className="RiShipLine" />
        <Desc7>서핑</Desc7>
      </Case7>

      <Case8>
        <TbBuildingCottage className="TbBuildingCottage" />
        <Desc8>개인실</Desc8>
      </Case8>
      <Case9>
        <CgTrees className="CgTrees" />
        <Desc9>국립공원</Desc9>
      </Case9>

      <Case10>
        <TbSeeding className="TbSeeding" />
        <Desc10>농장</Desc10>
      </Case10>

      <Case11>
        <TbBuildingCommunity className="TbBuildingCommunity" />
        <Desc11>아파트</Desc11>
      </Case11>

      <Case12>
        <MdOutlineHouse className="MdOutlineHouse" />
        <Desc12>주택</Desc12>
      </Case12>

      <Case13>
        <MdOutlineCastle className="MdOutlineCastle" />
        <Desc13>별채</Desc13>
      </Case13>

      <Case14>
        <MdOutlineHotel className="MdOutlineHotel" />
        <Desc14>호텔</Desc14>
      </Case14>
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
  width: 60px;
  display: flex;
  flex-direction: column;
  align-items: center;
  margin-top: 10px;
  cursor: pointer;
  .RiAncientGateLine {
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
  width: 60px;
  display: flex;
  flex-direction: column;
  align-items: center;
  margin-top: 10px;
  cursor: pointer;

  border-bottom: 2px solid white;
  .TbBuildingCastle {
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
  width: 60px;
  display: flex;
  flex-direction: column;
  align-items: center;
  margin-top: 10px;
  cursor: pointer;
  .RiAncientPavilionLine {
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

const Case4 = styled.div`
  width: 60px;
  display: flex;
  flex-direction: column;
  align-items: center;
  margin-top: 10px;
  cursor: pointer;
  .BiSwim {
    font-size: 25px;
    color: black;
  }
  &:hover {
    border-bottom: 2px solid gray;
  }
`;
const Desc4 = styled.div`
  margin-top: 8px;
  padding-bottom: 10px;
  font-size: small;
  color: black;
`;

const Case5 = styled.div`
  width: 60px;
  display: flex;
  flex-direction: column;
  align-items: center;
  margin-top: 10px;
  cursor: pointer;
  .TbTent {
    font-size: 25px;
    color: black;
  }
  &:hover {
    border-bottom: 2px solid gray;
  }
`;
const Desc5 = styled.div`
  margin-top: 8px;
  padding-bottom: 10px;
  font-size: small;
  color: black;
`;

const Case6 = styled.div`
  width: 60px;
  display: flex;
  flex-direction: column;
  align-items: center;
  margin-top: 10px;
  cursor: pointer;
  .HiOutlineSparkles {
    font-size: 25px;
    color: black;
  }
  &:hover {
    border-bottom: 2px solid gray;
  }
`;
const Desc6 = styled.div`
  margin-top: 8px;
  padding-bottom: 10px;
  font-size: small;
  color: black;
`;

const Case7 = styled.div`
  width: 60px;
  display: flex;
  flex-direction: column;
  align-items: center;
  margin-top: 10px;
  cursor: pointer;
  .RiShipLine {
    font-size: 25px;
    color: black;
  }
  &:hover {
    border-bottom: 2px solid gray;
  }
`;
const Desc7 = styled.div`
  margin-top: 8px;
  padding-bottom: 10px;
  font-size: small;
  color: black;
`;

const Case8 = styled.div`
  width: 60px;
  display: flex;
  flex-direction: column;
  align-items: center;
  margin-top: 10px;
  cursor: pointer;
  .TbBuildingCottage {
    font-size: 25px;
    color: black;
  }
  &:hover {
    border-bottom: 2px solid gray;
  }
`;
const Desc8 = styled.div`
  margin-top: 8px;
  padding-bottom: 10px;
  font-size: small;
  color: black;
`;

const Case9 = styled.div`
  width: 60px;
  display: flex;
  flex-direction: column;
  align-items: center;
  margin-top: 10px;
  cursor: pointer;
  .CgTrees {
    font-size: 25px;
    color: black;
  }
  &:hover {
    border-bottom: 2px solid gray;
  }
`;
const Desc9 = styled.div`
  margin-top: 8px;
  padding-bottom: 10px;
  font-size: small;
  color: black;
`;

const Case10 = styled.div`
  width: 60px;
  display: flex;
  flex-direction: column;
  align-items: center;
  margin-top: 10px;
  cursor: pointer;
  .TbSeeding {
    font-size: 25px;
    color: black;
  }
  &:hover {
    border-bottom: 2px solid gray;
  }
`;
const Desc10 = styled.div`
  margin-top: 8px;
  padding-bottom: 10px;
  font-size: small;
  color: black;
`;

const Case11 = styled.div`
  width: 60px;
  display: flex;
  flex-direction: column;
  align-items: center;
  margin-top: 10px;
  cursor: pointer;
  .TbBuildingCommunity {
    font-size: 25px;
    color: black;
  }
  &:hover {
    border-bottom: 2px solid gray;
  }
`;
const Desc11 = styled.div`
  margin-top: 8px;
  padding-bottom: 10px;
  font-size: small;
  color: black;
`;

const Case12 = styled.div`
  width: 60px;
  display: flex;
  flex-direction: column;
  align-items: center;
  margin-top: 10px;
  cursor: pointer;
  .MdOutlineHouse {
    font-size: 25px;
    color: black;
  }
  &:hover {
    border-bottom: 2px solid gray;
  }
`;
const Desc12 = styled.div`
  margin-top: 8px;
  padding-bottom: 10px;
  font-size: small;
  color: black;
`;

const Case13 = styled.div`
  width: 60px;
  display: flex;
  flex-direction: column;
  align-items: center;
  margin-top: 10px;
  cursor: pointer;
  .MdOutlineCastle {
    font-size: 25px;
    color: black;
  }
  &:hover {
    border-bottom: 2px solid gray;
  }
`;
const Desc13 = styled.div`
  margin-top: 8px;
  padding-bottom: 10px;
  font-size: small;
  color: black;
`;

const Case14 = styled.div`
  width: 60px;
  display: flex;
  flex-direction: column;
  align-items: center;
  margin-top: 10px;
  cursor: pointer;
  .MdOutlineHotel {
    font-size: 25px;
    color: black;
  }
  &:hover {
    border-bottom: 2px solid gray;
  }
`;
const Desc14 = styled.div`
  margin-top: 8px;
  padding-bottom: 10px;
  font-size: small;
  color: black;
`;
