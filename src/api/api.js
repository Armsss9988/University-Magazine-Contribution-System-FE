import axios from "axios";

const baseURL = "http://localhost:8000/api";

const axiosClient = axios.create({
  baseURL,
  withCredentials: true,
});

const userAPI = {
  registerUser: (userData) => {
    return axiosClient.post("/user/register", userData);
  },

  loginUser: (loginData) => {
    return axiosClient.post("/user/login", loginData);
  },

  logoutUser: () => {
    return axiosClient.post("/user/logout");
  },
};

export { userAPI };
