import React, { useState, useEffect } from "react";
import "./App.css";
import HomeScreen from "./screens/HomeScreen";
import LoginScreen from "./screens/LoginScreen";
import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom';
import MagazineComp from "./screens/MagazineComp";
import MagazineBus from "./screens/MagazineBus";
import MagazineGd from "./screens/MagazineGd";
import StudentHome from "./screens/studentRole/StudentHome";
import DetailSubmission from "./screens/studentRole/DetailSubmission";
import ListSubmission from "./screens/studentRole/ListSubmission";
import EditSubmission from "./screens/studentRole/EditSubmission";
import NewSubmisson from "./screens/studentRole/NewSubmission";
import ProfileStudent from "./screens/studentRole/ProfileStudent";
import EditProfileStudent from "./screens/studentRole/EditProfileStudent";
import CoordiratorHome from "./screens/coordiratorRole/CoordiratorHome";
import ListSubmissionCoor from "./screens/coordiratorRole/ListSubmissionCoor";
import DetailSubmissionCoor from "./screens/coordiratorRole/DetailSubmissionCoor";
import HomeAdmin from "./screens/admin/HomeAdmin";
import ViewFaculty from "./screens/admin/faculties/ViewFaculties";
import CreateFaculty from "./screens/admin/faculties/CreateFaculties";
import EditFaculty from "./screens/admin/faculties/EditFaculties";
import SemesterList from "./screens/admin/semesterManager/SemesterList";
import CreateSemester from "./screens/admin/semesterManager/CreateSemester";
import CreateAccount from "./screens/admin/manageraccount/CreateAccount";
import ListAccount from "./screens/admin/manageraccount/ListAccount";
import ForbiddenPage from "./screens/ForbiddenPage";
import { userAPI } from "./api/api";



function App() {


  const [userRoles, setUserRoles] = useState([]);

  useEffect(() => {
    const fetchUserRoles = async () => {
      try {
        const response = await userAPI.profileUser({});
        const roles = response.data.user.role;
        setUserRoles(roles);
        console.log(roles);
      } catch (error) {
        console.error("API Error:", error);
        // Handle error
      }
    };

    fetchUserRoles();
  }, []);


  const checkAdminRole = () => {
    // Logic to check user role, return true for admin, false otherwise
    return userRoles.includes('admin'); // For demonstration purpose, always return true
  };

  const checkStudentRole = () => {
    // Logic to check user role, return true for admin, false otherwise
    return userRoles.includes('student'); // For demonstration purpose, always return true
  };
  const checkCoorRole = () => {
    // Logic to check user role, return true for admin, false otherwise
    return userRoles.includes('coordinator'); // For demonstration purpose, always return true
  };

  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<HomeScreen />} />
        <Route path="/login" element={<LoginScreen />} />
        <Route path="/magazinecomp" element={<MagazineComp />} />
        <Route path="/magazinebus" element={<MagazineBus />} />
        <Route path="/magazinegd" element={<MagazineGd />} />
        {/* Student role */}
        <Route path="/detailsubmission" element={checkStudentRole() ? <DetailSubmission /> : <ForbiddenPage />} />
        <Route path="/listsubmission" element={checkStudentRole() ? <ListSubmission /> : <ForbiddenPage />} />
        <Route path="/editsubmission" element={checkStudentRole() ? <EditSubmission /> : <ForbiddenPage />} />
        <Route path="/newsubmission" element={checkStudentRole() ? <NewSubmisson /> : <ForbiddenPage />} />
        <Route path="/profilestudent" element={checkStudentRole() ? <ProfileStudent /> : <ForbiddenPage />} />
        <Route path="/editprofilestudent" element={checkStudentRole() ? <EditProfileStudent /> : <ForbiddenPage />} />
        <Route path="/studenthome" element={checkStudentRole() ? <StudentHome /> : <ForbiddenPage />} />
        {/* Coordinator */}
        <Route path="/coordiratorhome" element={checkCoorRole() ? <CoordiratorHome /> : <ForbiddenPage />} />
        <Route path="/listcoorsub" element={checkCoorRole() ? <ListSubmissionCoor /> : <ForbiddenPage />} />
        <Route path="/detailcoorsub" element={checkCoorRole() ? <DetailSubmissionCoor /> : <ForbiddenPage />} />
        {/* Admin */}
        <Route path="/adminhome" element={checkAdminRole() ? <HomeAdmin /> : <ForbiddenPage />} />
        <Route path="/viewfaculty" element={checkAdminRole() ? <ViewFaculty /> : <ForbiddenPage />} />
        <Route path="/newfaculty" element={checkAdminRole() ? <CreateFaculty /> : <ForbiddenPage />} />
        <Route path="/editfaculty" element={checkAdminRole() ? <EditFaculty /> : <ForbiddenPage />} />
        <Route path="/listaccount" element={checkAdminRole() ? <ListAccount /> : <ForbiddenPage />} />
        <Route path="/semester" element={checkAdminRole() ? <SemesterList /> : <ForbiddenPage />} />
        <Route path="/createsemester" element={checkAdminRole() ? <CreateSemester /> : <ForbiddenPage />} />
        <Route path="/createaccount" element={checkAdminRole() ? <CreateAccount /> : <ForbiddenPage />} />
      </Routes>
    </BrowserRouter>

  );
}

export default App