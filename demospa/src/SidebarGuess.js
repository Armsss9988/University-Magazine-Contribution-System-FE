import './App.css';
import { BrowserRouter as Router, Routes, Route ,Switch } from 'react-router-dom';
import React, { useState, useEffect  } from 'react';
import HomePage from './HomePage';
import AboutPage from './AboutPage';
import Menu from './Menu';
import ABC from './ABC';
import ZXY from './ZXY';

const tabsData = [
  { id: 1, title: 'Trang chủ', path: '/' },
  { id: 2, title: 'Giới thiệ', path: '/about' },
  { id: 3, title: 'ABC', path: '/abc' },
  { id: 4, title: 'XYZ', path: '/zxy' },
];

function SidebarGuess() {
  const [activeTab, setActiveTab] = useState(tabsData[0].id);

  const handleTabChange = (id) => {
    setActiveTab(id);
  };

  return (
    <Router>
      <div className="App">
        <Menu tabsData={tabsData} activeTab={activeTab} onTabChange={handleTabChange} />
        <Routes>
          <Route exact path="/" element={<HomePage />}>
            
          </Route>
          <Route path="/about" element={<AboutPage />}>
            
          </Route>
    
        </Routes>
        
      </div>
      
    </Router>
  );
}

export default SidebarGuess;
