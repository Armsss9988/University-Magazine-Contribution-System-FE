import React, { useState, useEffect } from "react";
import "./App.css";
import HomeScreen from "./screens/guessRole/HomeScreen";
import LoginScreen from "./screens/guessRole/LoginScreen";
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import MagazineComp from "./screens/guessRole/MagazineComp";
import MagazineBus from "./screens/guessRole/MagazineBus";
import MagazineGd from "./screens/guessRole/MagazineGd";
import ContactUS from "./screens/guessRole/ContactUS";
import ManagerHome from "./screens/managerRole/ManagerHome";
import ManagerMgzBus from "./screens/managerRole/ManagerMgzBus";
import ManagerMgzGd from "./screens/managerRole/ManagerMgzGd";
import ManagerMgzCom from "./screens/managerRole/ManagerMgzCom";
import NewMagazine from "./screens/managerRole/NewMagazine";
import DownloadFileZip from "./components/DownloadFileZip";
import Dashboard from "./screens/managerRole/Dashboard";
import { BarChart } from '@mui/x-charts/BarChart';



function App() {
    

    return (
        <BrowserRouter>
      <Routes>
        <Route path="/" element={<HomeScreen />} />
        <Route path="/login" element={<LoginScreen />} />
        <Route path="/magazinecomp" element={<MagazineComp />} />
        <Route path="/magazinebus" element={<MagazineBus />} />
        <Route path="/magazinegd" element={<MagazineGd />} />
        <Route path="/contact" element={<ContactUS/>} />
        <Route path="/managerhome" element={<ManagerHome/>} />
        <Route path="/managermgzbus" element={<ManagerMgzBus/>} />
        <Route path="/managermgzcomp" element={<ManagerMgzCom/>} />
        <Route path="/managermgzgd" element={<ManagerMgzGd/>} />
        <Route path="/newmagazine" element={<NewMagazine/>} />
        <Route path="/download" element={<DownloadFileZip/>} />
        <Route path="/dashboard" element={<Dashboard/>} />
      </Routes>
    </BrowserRouter>
    );
}

export default App