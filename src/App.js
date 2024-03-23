import React, { useState, useEffect } from "react";
import "./App.css";
import LoginScreen from "./screens/LoginScreen";
import { BrowserRouter, Routes, Route, } from 'react-router-dom';
import MagazineComp from "./screens/guessRole/MagazineComp";
import MagazineBus from "./screens/guessRole/MagazineBus";
import ContactUS from "./screens/guessRole/ContactUS";
import MagazineGd from "./screens/guessRole/MagazineGd";
import StudentHome from "./screens/studentRole/StudentHome";
import DetailSubmission from "./screens/studentRole/DetailSubmission";
import ListSubmission from "./screens/studentRole/ListSubmission";
import EditSubmission from "./screens/studentRole/EditSubmission";
import NewSubmisson from "./screens/studentRole/NewSubmission";
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
import HomeScreen from "./screens/guessRole/HomeScreen";
import { userAPI } from "./api/api";
import ManagerHome from "./screens/managerRole/ManagerHome";
import ManagerMgzBus from "./screens/managerRole/ManagerMgzBus";
import ManagerMgzGd from "./screens/managerRole/ManagerMgzGd";
import ManagerMgzCom from "./screens/managerRole/ManagerMgzCom";
import NewMagazine from "./screens/managerRole/NewMagazine";
import DownloadFileZip from "./components/DownloadFileZip";
import Dashboard from "./screens/managerRole/Dashboard";
import { BarChart } from '@mui/x-charts/BarChart';



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

  const checkManagerRole = () => {
    // Logic to check user role, return true for admin, false otherwise
    return userRoles.includes('manager'); // For demonstration purpose, always return true
  };

  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<HomeScreen />} />
        <Route path="/login" element={<LoginScreen />} />
        <Route path="/magazinecomp" element={<MagazineComp />} />
        <Route path="/magazinebus" element={<MagazineBus />} />
        <Route path="/magazinegd" element={<MagazineGd />} />
        <Route path="/contact" element={<ContactUS />} />
        {/* Student role */}
        <Route path="/detailsubmission" element={checkStudentRole() ? <DetailSubmission /> : <ForbiddenPage />} />
        <Route path="/listsubmission" element={checkStudentRole() ? <ListSubmission /> : <ForbiddenPage />} />
        <Route path="/editsubmission" element={checkStudentRole() ? <EditSubmission /> : <ForbiddenPage />} />
        <Route path="/newsubmission" element={checkStudentRole() ? <NewSubmisson /> : <ForbiddenPage />} />
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
        {/* Manager */}
        <Route path="/managerhome" element={checkManagerRole() ? <ManagerHome /> : <ForbiddenPage />} />
        <Route path="/managermgzbus" element={checkManagerRole() ? <ManagerMgzBus /> : <ForbiddenPage />} />
        <Route path="/managermgzcomp" element={checkManagerRole() ? <ManagerMgzCom /> : <ForbiddenPage />} />
        <Route path="/managermgzgd" element={checkManagerRole() ? <ManagerMgzGd /> : <ForbiddenPage />} />
        <Route path="/newmagazine" element={checkManagerRole() ? <NewMagazine /> : <ForbiddenPage />} />
        <Route path="/download" element={checkManagerRole() ? <DownloadFileZip /> : <ForbiddenPage />} />
        <Route path="/dashboard" element={checkManagerRole() ? <Dashboard /> : <ForbiddenPage />} />
      </Routes>
    </BrowserRouter>

  );
}

export default App