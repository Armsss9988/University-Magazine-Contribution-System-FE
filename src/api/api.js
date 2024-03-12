import axios from "axios";

const baseURL = "http://localhost:8000/api";

const axiosClient = axios.create({
  baseURL,
  withCredentials: true,
});
const semesterAPI = {
  createSemester: (semesterData) => {
    return axiosClient.post("/semester", semesterData);
  },

  
};
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

  profileUser: () => {
    return axiosClient.get("/user/profile");
  },

  createUser: (createData) => {
    return axiosClient.post("/user/signup", createData);
  },
  allUser: (allData) => {
    return axiosClient.get("/user/list/all", allData);
  },
  facultyUser: (facultyData) => {
    return axiosClient.get("/user/list/faculty", facultyData);
  },
  deleteUser: (id) => {
    return axiosClient.delete(`/user/delete/${id}`);
  },
};

export { userAPI, semesterAPI };
