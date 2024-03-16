import React from 'react';
import { Link } from 'react-router-dom';
import './App.css'; // Import your CSS for styling

const Menu = ({ tabsData, activeTab, onTabChange }) => {
  return (
    <div className="tabs">
      {tabsData.map((tab) => (
        <Link
          key={tab.id}
          to={tab.path}
          className={activeTab === tab.id ? 'active' : ''}
          onClick={() => onTabChange(tab.id)}
        >
          {tab.title}
        </Link>
      ))}
    </div>
    
  );
};

export default Menu;
