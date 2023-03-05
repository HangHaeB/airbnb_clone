import React, { useState, useRef } from "react";
import styled from "styled-components";
import Footer from "../components/footer/Footer";
import Navbar from "./../components/mypage/navbar/Navbar";
import plus from "../components/util/img/plus.png";
import { useMutation, useQueryClient } from "react-query";
import {addRoom} from "../api/api"



const MyPageAddRoom = () => {
  const [imgFile, setImgFile] = useState("");
  const [title, setTitle] = useState("");
  const [detail, setDetail] = useState("");
  const [price, setPrice] = useState("");
  const [location, setLocation] = useState("");
  const [maxPeople, setMaxPeople] = useState("");
  const [bedroom, setBedroom] = useState("");
  const [bathroom, setBathroom] = useState("");

  const imgRef = useRef();
  const saveImgFile = () => {
    const file = imgRef.current.files[0];
    const reader = new FileReader();
    reader.readAsDataURL(file);
    reader.onloadend = () => {
      setImgFile(reader.result);
    };
  };

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
  };
  const detailHandler = (e) =>{
    setDetail(e.target.value)
  }
  const formHandler = (e) => {
    e.preventDefault();
    const formData = new FormData();
      
    formData.append("title", title);
    formData.append("detail", detail);
    formData.append("imgUrl", imgFile);
    
    mutation.mutate(formData)
    setImgFile("");
    setTitle("");
    setDetail("");
    setPrice("");
    setLocation("");
    setMaxPeople("");
    setBedroom("");
    setBathroom("");
  };
  return (
    <div>
      <Navbar />
      <ContentContainer>
        <Card>
          <Img src={imgFile ? imgFile : plus} alt="이미지 미리보기" />
          <FileLabel htmlFor="profileImg"></FileLabel>
          <FileInput
            type="file"
            accept="image/*"
            id="profileImg"
            onChange={saveImgFile}
            ref={imgRef}
          />
        </Card>
        <form onSubmit={formHandler}>
          <div>
            <label>숙소이름 </label>
            <input type="text" onChange={titleHandler} value={title} />
          </div>
          <div>
            <label>숙소설명 </label>
            <input type="text" onChange={detailHandler} value={detail} />
          </div>
          <div>
            <label>숙소가격 </label>
            <input type="text" />
          </div>
          <div>
            <label>숙소지역 </label>
            <input type="text" />
          </div>
          <div>
            <label>숙소카테고리 </label>
            <label>
              <input type="radio" name="category" value="한옥" />
              한옥
            </label>
            <label>
              <input type="radio" name="category" value="양옥" />
              양옥
            </label>
            <label>
              <input type="radio" name="category" value="료칸" />
              료칸
            </label>
            <label>
              <input type="radio" name="category" value="수영장" />
              수영장
            </label>
            <label>
              <input type="radio" name="category" value="캠핑장" />
              캠핑장
            </label>
            <label>
              <input type="radio" name="category" value="디자인" />
              디자인
            </label>
            <label>
              <input type="radio" name="category" value="디자인" />
              디자인
            </label>
            <label>
              <input type="radio" name="category" value="디자인" />
              디자인
            </label>
            <label>
              <input type="radio" name="category" value="디자인" />
              디자인
            </label>
            <label>
              <input type="radio" name="category" value="디자인" />
              디자인
            </label>
          </div>
          <div>
            <label>최대인원 </label>
            <input type="text" />
          </div>
          <div>
            <label>거주형태 </label>
            <input type="text" />
          </div>
          <div>
            <label>침실 수 </label>
            <input type="text" />
          </div>
          <div>
            <label>화장실 수 </label>
            <input type="text" />
          </div>
          <div>
            <label>편의시설 </label>
            <label>
              <input type="checkbox" name="facility" value="주방" />
              주방
            </label>
            <label>
              <input type="checkbox" name="facility" value="무선 인터넷" />
              무선 인터넷
            </label>
            <label>
              <input
                type="checkbox"
                name="facility"
                value="반려동물 입실 가능"
              />
              반려동물 입실 가능
            </label>
            <label>
              <input type="checkbox" name="facility" value="세탁기" />
              세탁기
            </label>
            <label>
              <input type="checkbox" name="facility" value="헤어드라이어" />
              헤어드라이어
            </label>
            <label>
              <input type="checkbox" name="facility" value="에어컨" />
              에어컨
            </label>
            <label>
              <input type="checkbox" name="facility" value="난방" />
              난방
            </label>
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
