import instance from "./instance";
import axios from "axios";
import SignUp from "../components/modal/SignUp";

//로그인 요청
const postLogin = async () => {
 const data = {
    email: "iamuser@naver.com",
    password: "1234",
  }
  await axios.post(`${process.env.REACT_APP_SERVER_URL}/api/users/login`, data)
    .then((res) => {
      alert("로그인 완료.")
      
    })
    .catch((err)=>{
      alert("로그인 실패")
    })
};

//회원가입
const postSignUp = async () => {
  const data = {
    email: "email@naver.com",
    username: "username",

    password: "12341234",
    birth: "00000000",
  }
  await axios.post(`${process.env.REACT_APP_SERVER_URL}/api/users/signup`, data)
    .then((res) => {
      alert(res.response.data.msg)
      
    })
    .catch((err)=>{
      console.log(err)
    })
};

export { postLogin, postSignUp };