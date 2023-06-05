import axios from "axios";

export const getUserList = async () => {
  const response = await axios.get("https://reqres.in/api/users");

  return response.data.data;
};

export const getUserDetails = async id => {
  const response = await axios.get(`https://reqres.in/api/users/${id}`);

  return response.data.data;
};
