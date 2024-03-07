import React from 'react';
import { Redirect } from 'react-router-dom';

const StudentDashboard = () => {
  const userRole = 'student'; // Replace this with your actual role checking logic

  if (userRole !== 'student') {
    return <Redirect to="/login" />;
  }

  return (
    <div>
      <h2>Student Dashboard</h2>
      {/* Add your student-specific content here */}
    </div>
  );
};

export default StudentDashboard;
