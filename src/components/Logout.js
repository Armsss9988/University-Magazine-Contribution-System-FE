import React from 'react';
import axios from 'axios';
import { userAPI } from '../api/api';

const LogoutButton = () => {
  const handleLogout = async () => {
    try {
      await userAPI.logoutUser(); // Send logout request to server
      // Optionally clear local storage or display a message
      window.location.href = '/login'; // Redirect to login page
    } catch (error) {
      console.error('Logout error:', error);
      // Handle logout errors here (optional)
    }
  };

  return (
    <button className='logout' onClick={handleLogout}>Logout</button>
  );
};

export default LogoutButton;