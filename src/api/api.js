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

// ---------------곽세령이 짠 거------------------

const getCard = async () => {
  const response = await instance.get("/api/houses");
  return response.data;
};

export {getCard}

const getDetail = async (houseid) => {
  const response = await instance.get(`/api/houses/${houseid}`);
  return response.data;
};

export {getDetail}

const getReview = async (houseid) => {
  return await instance.get(`/api/houses/${houseid}/reviews`);
};

export{getReview}

const addReview = async (houseid) => {
  return await instance.post(`/api/houses/${houseid}/reviews`, houseid);
};

export {addReview}


// ---------------곽세령이 짠 거 ------------------


