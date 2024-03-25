import React, { useState, useEffect } from 'react';
import { useLocation } from 'react-router-dom';
import SidebarAdmin from "../../../components/SidebarAdmin";
import Footer from '../../../components/Footer';
import { facultyAPI } from '../../../api/api';

const EditFaculty = () => {
  const [faculty, setFaculty] = useState({ name: "" });
  const location = useLocation();
  const { id } = location.state;
  
  useEffect(() => {
    fetchData();
  }, []);

  const fetchData = async () => {
    try {
      const response = await facultyAPI.getFacultyById(id);
      const { data } = response;
      setFaculty(data);
    } catch (error) {
      console.error('Error fetching faculty data:', error);
    }
  };

  const handleChange = (event) => {
    const { name, value } = event.target;
    setFaculty({ ...faculty, [name]: value });
  };

  const handleSubmit = async (event) => {
    event.preventDefault();
    try {
      const response = await facultyAPI.editFaculty(id, faculty);
      window.alert(response.data.message);
    } catch (error) {
      console.error('Error updating faculty:', error);
    }
  };

  return (
    <div className="container">
      <SidebarAdmin />
      <div className="content-newacc">
        <div className="form-container">
          <h1>Edit Faculty</h1>
          <form onSubmit={handleSubmit}>
            <label htmlFor="name">Name:</label>
            <input type="text" id="name" name="name" value={faculty.name} onChange={handleChange} />
            <div className="button-container">
              <button type="submit">Save</button>
            </div>
          </form>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default EditFaculty;
