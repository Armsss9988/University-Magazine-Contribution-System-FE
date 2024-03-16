// Home.js
import React, { useState, useEffect  } from 'react';
import { Link } from "react-router-dom"
import Menu from './Menu';


const tabsData = [
  { id: 1, title: 'Trang chủ', path: '/' },
  { id: 2, title: 'Giới thiệ', path: '/about' },
  { id: 3, title: 'ABC', path: '/abc' },
  { id: 4, title: 'XYZ', path: '/zxy' },
];
const HomePage = () => {
  const [activeTab, setActiveTab] = useState(tabsData[0].id);

  const handleTabChange = (id) => {
    setActiveTab(id);
  };
  return (
    <div className="content">
      <Menu tabsData={tabsData} activeTab={activeTab} onTabChange={handleTabChange} />
      <h1>Trang chủ</h1>
      <p>Nội dung trang chủ...</p>
      <p>
        <Link to="/abc">Your desired link.</Link>
      </p>
    </div>
  );
};

export default HomePage;

// About.js (similar structure)
// Contact.js (similar structure)
