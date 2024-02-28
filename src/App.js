import React, { useState, useEffect } from "react";
import "./App.css";
import HomeScreen from "./screens/HomeScreen";
import LoginScreen from "./screens/LoginScreen";
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import ChooseRoleLogin from "./screens/ChooseRoleLogin";
import ChooseRoleRegister from "./screens/ChooseRoleRegister";

function App() {
    

    return (
        <BrowserRouter>
      <Routes>
        <Route path="/" element={<HomeScreen />} />
        <Route path="/login" element={<LoginScreen />} />
        <Route path="/chooserolelogin" element={<ChooseRoleLogin />} />
        <Route path="/chooseroleregister" element={<ChooseRoleRegister />} />
      </Routes>
    </BrowserRouter>
    );
}

export default App