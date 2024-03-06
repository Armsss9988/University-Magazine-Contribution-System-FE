import React, { useState, useEffect } from "react";
import "./App.css";
import HomeScreen from "./screens/HomeScreen";
import LoginScreen from "./screens/LoginScreen";
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import MagazineComp from "./screens/MagazineComp";
import MagazineBus from "./screens/MagazineBus";
import MagazineGd from "./screens/MagazineGd";
import StudentHome from "./screens/StudentHome";
import DetailSubmission from "./screens/DetailSubmission";
import ListSubmission from "./screens/ListSubmission";
import EditSubmission from "./screens/EditSubmission";
import NewSubmisson from "./screens/NewSubmission";
import ProfileStudent from "./screens/ProfileStudent";
import EditProfileStudent from "./screens/EditProfileStudent";


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
      </Routes>
    </BrowserRouter>
    );
}

export default App