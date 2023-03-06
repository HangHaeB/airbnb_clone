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

export { addRoom,getRoom,loginUser,signUpUser }


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
// ---------------곽세령이 짠 거 ------------------
