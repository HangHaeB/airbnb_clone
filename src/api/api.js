import instance from "./instance";
import axios from "axios";

//////////////로 그 인 ///////
const loginUser = async (userId) => {
  return await instance.post(`/api/users/login`, userId);
};

const signUpUser = async (newbie) => {
  return await instance.post(`/api/users/signup`, newbie);
};
///////////////////

const getRoom = async (dateId) => {
  await instance.get(`/date/${dateId}`);
};

const addRoom = async (formData) => {
  await instance.post(`/api/houses`, formData);
};

export { addRoom, getRoom, loginUser, signUpUser };

const getCard = async () => {
  const response = await instance.get("/api/houses");
  return response.data;
};

export { getCard };

const getDetail = async (houseId) => {
  const response = await instance.get(`/api/houses/${houseId}`);
  return response.data;
};

export { getDetail };
