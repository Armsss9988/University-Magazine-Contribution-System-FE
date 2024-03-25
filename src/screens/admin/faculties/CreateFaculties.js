import React, { useState } from 'react';
import SidebarAdmin from "../../../components/SidebarAdmin";
import Footer from '../../../components/Footer';
import { facultyAPI } from '../../../api/api';

const CreateFaculty = () => {
  const [facultyName, setFacultyName] = useState('');

  // const handleChange = (e) => {
  //   const { name, value } = e.target;
  //   setFacultyDetails((prevDetails) => ({
  //     ...prevDetails,
  //     [name]: value,
  //   }));
  // };

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
      <div style={{ flex: '1 1 auto', display: 'flex', justifyContent: 'center' }}>
        <div style={{ width: '500px', display: 'flex', flexDirection: 'column', padding: '20px' }}>
          <h2 style={{ textAlign: 'center' }}>Create Faculty</h2>
          <form onSubmit={handleSubmit}>

            <div FacultyName="form-group">
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
            <div style={{ justifyContent: 'center', display: 'flex' }}>
              <button type="submit" FacultyName="btn btn-primary" >Create Faculty</button>
            </div>

          </form>
        </div>

      </div>

      <Footer />
    </div>

  );
};

export default CreateFaculty;
