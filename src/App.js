import React, { useState, useEffect } from "react";
import "./App.css";
import HomeScreen from "./screens/HomeScreen";
import LoginScreen from "./screens/LoginScreen";
import { BrowserRouter, Routes, Route } from 'react-router-dom';
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


function App() {
    

    return (
        <BrowserRouter>
      <Routes>
        <Route path="/" element={<HomeScreen />} />
        <Route path="/login" element={<LoginScreen />} />
        <Route path="/magazinecomp" element={<MagazineComp />} />
        <Route path="/magazinebus" element={<MagazineBus />} />
        <Route path="/magazinegd" element={<MagazineGd />} />
        <Route path="/detailsubmission" element={<DetailSubmission />} />
        <Route path="/listsubmission" element={<ListSubmission />} />
        <Route path="/editsubmission" element={<EditSubmission />} />
        <Route path="/newsubmission" element={<NewSubmisson />} />
        <Route path="/profilestudent" element={<ProfileStudent />} />
        <Route path="/editprofilestudent" element={<EditProfileStudent />} />
        <Route path="/studenthome" element={<StudentHome />} />
        <Route path="/coordiratorhome" element={<CoordiratorHome />} />
        <Route path="/listcoorsub" element={<ListSubmissionCoor />} />
      </Routes>
    </BrowserRouter>
    );
}

export default App