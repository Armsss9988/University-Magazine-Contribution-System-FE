import logo from './logo.svg';
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

function App() {
  const [activeTab, setActiveTab] = useState(tabsData[0].id);

  const handleTabChange = (id) => {
    setActiveTab(id);
  };
  // const [data, setData] = useState([]);

  // useEffect(() => {
  //   fetch('https://example.com/api/data')
  //     .then(response => response.json())
  //     .then(data => setData(data));
  // }, []);
  return (
    <Router>
      <div className="App">
        <Menu tabsData={tabsData} activeTab={activeTab} onTabChange={handleTabChange} />
        <Routes>
          <Route exact path="/" element={<HomePage />}>
            
          </Route>
          <Route path="/about" element={<AboutPage />}>
            
          </Route>
          <Route path="/abc" element={<ABC />}>
            
          </Route>
          <Route path="/zxy" element={<ZXY />}>
            
          </Route>
        </Routes>
        
      </div>
      
    </Router>
  );
}

export default App;
