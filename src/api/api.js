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

const getRoom = async (newForm) => {
  await instance.get(`/date`);
};

const addRoom = async (formData) => {
  await instance.post(`/api/houses`, formData);
};

export { addRoom, getRoom, loginUser, signUpUser };
