import axios from "axios";
import { getCookie, removeCookie } from "./cookies";
import moment from "moment";

const instance = axios.create({
  baseURL: `${process.env.REACT_APP_SERVER_URL}`,
  timeout: 10000,
  headers: {
    "Content-Type": "application/json",
  },
});

instance.interceptors.request.use(
  //요청을 보내기 전 수행
  function (config) {
    const accessToken = getCookie("ACCESS_TOKEN");

    // const refreshToken = getCookie("RT_TOKEN");
    // // const expireAt = localStorage.getItem("expiresAt");

    // if (moment(expireAt).diff(moment()) < 0 && refreshToken) {
    //   const refreshToken = getCookie("RT_TOKEN");
    // }
    config.headers["Authorization"] = accessToken;
    return config;
  },

  // 오류 요청을 보내기 전 수행
  function (error) {
    removeCookie("ACCESS_TOKEN");
  },
);

instance.interceptors.response.use(
  //서버로부터 정상 응답을 받는 경우
  function (config) {
    const accessToken = getCookie("ACCESS_TOKEN");
    config.headers["Authorization"] = accessToken;

    return config;
  },

  function (error) {
    // if (error.response.statusCode === 400) {
    //   alert("데이터 수신중에 오류가 났어요!!!");
    // }
    return Promise.reject(error);
  },
);
export default instance;
