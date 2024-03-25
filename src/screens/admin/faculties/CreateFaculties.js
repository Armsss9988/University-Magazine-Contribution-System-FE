import React, { useState } from 'react';
import SidebarAdmin from "../../../components/SidebarAdmin";
import Footer from '../../../components/Footer';
import { facultyAPI } from '../../../api/api';

const CreateFaculty = () => {
  const [facultyName, setFacultyName] = useState('');

  const handleSubmit = async (event) => {
    event.preventDefault();

    try {
      const response = await facultyAPI.createFaculty({
        name: facultyName,
      });

      console.log('Faculty created:', response.data);
      setFacultyName(response.data);
      window.alert('Successfully created a new faculty!')
      // Xóa form data or chuyển hướng sang trang khác (tùy chọn)
      setFacultyName('');

    } catch (error) {
      console.error('Error creating semester:', error);
    }
  };

  return (
    <div className="container">
      <SidebarAdmin />
      <div className="content-newacc">
        <div className="form-container">
          <h1>New Faculty</h1>
          <form onSubmit={handleSubmit}>
            <div className="form-group">
              <label htmlFor="facultyName">Faculty Name:</label>
              <input
                type="text"
                className="form-control"
                id="facultyName"
                name="name"
                value={facultyName}
                onChange={(e) => setFacultyName(e.target.value)}
                required
              />
            </div>
            <div className="button-container">
              <button type="submit" className="btn btn-primary">Create Faculty</button>
            </div>
          </form>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default CreateFaculty;
