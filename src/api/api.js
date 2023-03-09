import instance from "./instance";

//////////////로 그 인 ///////
const loginUser = async (userId) => {
  return await instance.post(`/api/users/login`, userId);
};

const signUpUser = async (newbie) => {
  return await instance.post(`/api/users/signup`, newbie);
};
///////////////////

const addRoom = async (formData) => {
  await instance.post(`/api/houses`, formData);
};

// const filterCategory2 = async (keyword, idx) => {
//   await instance.get(`/api/house?keyword=${keyword}?page=${idx}&size=30`);
// };
const filterCategory = async () => {
  const response = await instance.get(`/api/house?keyword=한옥?page=1&size=24`);
  return response.data;
};

export { addRoom, loginUser, signUpUser, filterCategory };

// ---------------곽세령이 짠 거------------------

const getCard = async () => {
  const response = await instance.get(`/api/test`);
  return response.data;
};

export { getCard };

const getDetail = async (houseId) => {
  const response = await instance.get(`/api/houses/${houseId}`);
  return response.data;
};

export { getDetail };

const addReview = async (houseid) => {
  return await instance.post(`/api/houses/${houseid}/reviews`, houseid);
};

export { addReview };

// ---------------곽세령이 짠 거 ------------------
