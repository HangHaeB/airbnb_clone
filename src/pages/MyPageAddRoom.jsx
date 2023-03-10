import React, { useState, useRef } from "react";
import styled from "styled-components";
import Footer from "../components/footer/Footer";
import Navbar from "./../components/mypage/navbar/Navbar";
import plus from "../components/util/img/plus.png";
import { useMutation, useQueryClient } from "react-query";
import { addRoom } from "../api/api";

const MyPageAddRoom = () => {
  const [imgUrl, setImgUrl] = useState("");
  const [title, setTitle] = useState("");
  const [explaination, setExplaination] = useState("");
  const [price, setPrice] = useState("");
  const [location, setLocation] = useState("");
  const [maxPeople, setMaxPeople] = useState("");
  const [houseCase, setHouseCase] = useState("");
  const [bedRoom, setBedRoom] = useState("");
  const [bathRoom, setBathRoom] = useState("");
  const [selectData, setSelectData] = useState([]);
  const [category, setCategory] = useState();
  const [facilities, setFacilities] = useState([]);

  //
  const imgRef = useRef();
  const saveImgFile = () => {
    const file = imgRef.current.files[0];
    const reader = new FileReader();
    reader.readAsDataURL(file);
    reader.onloadend = () => {
      setImgUrl(reader.result);
    };
  };

  const bookingCategories = [
    "한옥",
    "양옥",
    "료칸",
    "수영장",
    "캠핑장",
    "디자인",
    "서핑",
    "개인실",
    "국립공원",
    "농장",
  ];
  const facilityList = ["주방", "무선", "인터넷", "반려동물 입실가능", "세탁기", "헤어드라이어", "에어컨", "난방"];
  const houseCaseList = ["아파트", "주택", "게스트용 별채", "호텔"];
  const options = houseCaseList.map((item) => {
    return <option value={item}>{item}</option>;
  });

  // const formData = new FormData();
  // formData.set("title", newtitle);
  // formData.set("content", newcontent);
  // formData.set("file", file);

  // const modifyFormData ={
  //   title : formData.get("title"),
  //   content :formData.get("content");
  // }
  // addEventListener.mutation(payload)

  const queryClient = useQueryClient();
  const mutation = useMutation(addRoom, {
    onSuccess: (response) => {
      // queryClient.invalidateQueries("schedule");
      // console.log("성공하였습니다.");
    },
    onError: () => {
      // queryClient.invalidateQueries("schedule");
      // console.log("실패하셧습니다.");
    },
  });
  const titleHandler = (e) => {
    setTitle(e.target.value);
    console.log(title);
  };
  const detailHandler = (e) => {
    setExplaination(e.target.value);
  };
  const priceHandler = (e) => {
    setPrice(e.target.value);
  };
  const locationHandler = (e) => {
    setLocation(e.target.value);
  };
  const houseHandler = (e) => {
    setHouseCase(e.target.value);
    console.log(houseCase);
  };
  const maxPeopleHandler = (e) => {
    setMaxPeople(e.target.value);
  };
  const bedRoomHandler = (e) => {
    setBedRoom(e.target.value);
  };
  const radioHandler = (e) => {
    const { value } = e.target;
    setCategory(value);
    console.log(category);
  };

  const bathRoomHandler = (e) => {
    setBathRoom(e.target.value);
  };
  const facilitiesHandler = (e) => {
    facilities.push(e.target.value);
    console.log(facilities);
  };
  const formHandler = (e) => {
    e.preventDefault();
    const formData = new FormData();
    formData.append("title", title);
    formData.append("explaination", explaination);
    formData.append("price", price);
    formData.append("location", location);
    formData.append("houseCase", houseCase);
    formData.append("category", category);
    formData.append("imgUrl", imgUrl);
    formData.append(" maxPeople", maxPeople);
    formData.append(" bedRoom", bedRoom);
    formData.append(" bathRoom", bathRoom);
    formData.append("facilities", facilities);
    mutation.mutate(formData);

    setImgUrl("");
    setTitle("");
    setExplaination("");
    setPrice("");
    setLocation("");
    setMaxPeople("");
    setBedRoom("");
    setBathRoom("");
    setCategory("");
    setHouseCase("");
  };
  return (
    <div>
      <Navbar />
      <ContentContainer>
        <Card>
          <Img src={imgUrl ? imgUrl : plus} alt="이미지 미리보기" />
          <FileLabel htmlFor="profileImg"></FileLabel>
          <FileInput type="file" accept="image/*" id="profileImg" onChange={saveImgFile} ref={imgRef} />
        </Card>
        <form onSubmit={formHandler}>
          <div>
            <label>숙소이름 </label>
            <input type="text" name="title" onChange={titleHandler} value={title} />
          </div>
          <div>
            <label>숙소설명 </label>
            <input type="text" name="explaination" onChange={detailHandler} value={explaination} />
          </div>
          <div>
            <label>숙소가격 </label>
            <input type="number" onChange={priceHandler} name="price" value={price} />
          </div>
          <div>
            <label>숙소지역 </label>
            <input type="text" onChange={locationHandler} name="location" value={location} />
          </div>
          <div>
            <label>숙소카테고리 </label>
            {bookingCategories.map((type) => {
              return (
                <label>
                  <input
                    type="radio"
                    checked={category === type}
                    onChange={radioHandler}
                    name="category"
                    value={type}
                  />
                  {type}
                </label>
              );
            })}
          </div>
          <div>
            <label>최대인원 </label>
            <input type="number" onChange={maxPeopleHandler} name=" maxPeople" value={maxPeople} />
          </div>
          <div>
            <label>거주형태 </label>
            <select name="houseCase" onChange={houseHandler} value={houseCase}>
              {options}
            </select>
          </div>
          <div>
            <label>침실 수 </label>
            <input type="number" onChange={bedRoomHandler} name="bedRoom" value={bedRoom} />
          </div>
          <div>
            <label>화장실 수 </label>
            <input type="number" onChange={bathRoomHandler} name="bathRoom" value={bathRoom} />
          </div>
          <div>
            <label>편의시설 </label>
            {facilityList.map((item) => {
              return (
                <label>
                  <input
                    type="checkbox"
                    onChange={facilitiesHandler}
                    name={"facilities"}
                    checked={selectData.check}
                    value={item}
                  />
                  {item}
                </label>
              );
            })}
          </div>
          <button>등록하기</button>
        </form>
      </ContentContainer>
      <Footer />
    </div>
  );
};

export default MyPageAddRoom;

const ContentContainer = styled.div`
  background-color: #fbb2b5;
  margin: 0px 150px;
  height: 70vh;
  display: flex;
`;
const Img = styled.img`
  position: absolute;
  /* width: 800px;
  height: 800px; */
`;
const FileLabel = styled.label`
  width: 800px;
  height: 800px;
  cursor: pointer;
`;
const FileInput = styled.input`
  display: none;
`;
const Card = styled.div`
  padding: 50px;
  width: 800px;
  height: 800px;
  display: flex;
  justify-content: center;
  align-items: center;
`;
