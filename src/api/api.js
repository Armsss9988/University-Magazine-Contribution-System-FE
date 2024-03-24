import axios from "axios";

const baseURL = "http://localhost:8000/api";

const axiosClient = axios.create({
  baseURL,
  withCredentials: true,
});

const facultyAPI = {
  createFaculty: (facultyData) => {
    return axiosClient.post("/faculty", facultyData);
  },

  getFacultyById: (id) => {
    return axiosClient.get(`/faculty/${id}`);
  },

  listFaculty: () => {
    return axiosClient.get("/faculty");
  },
  
  deleteFaculty: (id) => {
    return axiosClient.delete(`/faculty/${id}`);
  },

  editFaculty: (id, facultyData) => {
    return axiosClient.put(`/faculty/${id}`, facultyData);
  },
};


const semesterAPI = {
  createSemester: (semesterData) => {
    return axiosClient.post("/semester", semesterData);
  },

  listSemester: () => {
    return axiosClient.get("/semester", );
  },
  
  deleteSemester: (id) => {
    return axiosClient.delete(`/semester/${id}`);
  },
  
};

const submissionAPI = {
  createSubmission: (submissionData) => {
    return axiosClient.post("/submission", submissionData);
  },

  listSubmission: () => {
    return axiosClient.get("submission/list/data");
  },
  getSubmissionById: (id) => {
    return axiosClient.get(`/submission/${id}`);
  },

};

const userAPI = {
  

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
  allUser: () => {
    return axiosClient.get("/user/list/all");
  },
  facultyUser: (facultyData) => {
    return axiosClient.get("/user/list/faculty", facultyData);
  },
  deleteUser: (id) => {
    return axiosClient.delete(`/user/delete/${id}`);
  },

};
const dashboardAPI = {
  contributors: (submissionData) => {
    return axiosClient.get("/dashboard/contributors", submissionData);
  },

  contributions: () => {
    return axiosClient.get("/dashboard/submissions");
  },
  percentage: (id) => {
    return axiosClient.get(`/dashboard/percentage/${id}`);
  },

  
};

export { userAPI, semesterAPI, submissionAPI, facultyAPI,dashboardAPI };
