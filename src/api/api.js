import instance from "./instance";



//////////////로 그 인 ///////
const loginUser = async (props) => {
  const login = {
  }

  return await instance.post(`/api/user/login`, login);

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
