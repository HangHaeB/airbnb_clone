import instance from "./instance";



//////////////로 그 인 ///////
const loginUser = async (userId) => {
  return await instance.post(`/api/user/login`, userId);
};

const signUpUser = async (newbie) => {
  return await instance.post(`/api/users/signup`, newbie)
}

///////////////////

const getRoom = async (newForm) => {
  await instance.get(`/date/`);
};

const addRoom = async (newForm) => {
  await instance.post(`/date/`, newForm);
};

// ---------------곽세령이 짠 거------------------
const getCard = async (cardData) => {
  await instance.get(`/api/houses`);
};

// ---------------곽세령이 짠 거 ------------------

export { addRoom,getRoom,loginUser,signUpUser,getCard }

