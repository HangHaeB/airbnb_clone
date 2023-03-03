import instance from "./instance";

const login = async (userId) => {
  await instance.post(`/api/user/login`, userId);
};

export { login };
