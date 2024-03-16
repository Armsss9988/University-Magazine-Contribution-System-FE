import React, { useState } from 'react';
import './App.css';
import { Link } from "react-router-dom"


const Sidebar = ({ items, activeItem, onItemSelect }) => {

    const handleHover = (e) => {
        e.target.style.backgroundColor = "#ccc";
      };
      
      const handleLeave = (e) => {
        e.target.style.backgroundColor = "#fff";
      };
  return (
    <div className="sidebar">
      <ul>
        <li><Link to="/" activeClassName="active" className='link'>Trang chủ</Link></li>
        <li><Link to="/about" activeClassName="active" className='link'>Giới thiệu</Link></li>
      </ul>
    </div>
  );
};

export default Sidebar;
