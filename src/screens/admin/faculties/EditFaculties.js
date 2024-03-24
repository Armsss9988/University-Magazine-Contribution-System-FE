import React, { useState, useEffect } from 'react';
import { useLocation  } from 'react-router-dom'; // Import useParams
import HeaderAdmin from '../../../components/HeaderAdmin';
import Footer from '../../../components/Footer';
import { facultyAPI } from '../../../api/api';

const EditFaculty = () => {
  const [faculty, setFaculty] = useState({ name: ""});
  const location = useLocation(); // Get id from URL
  const {id} = location.state;
  useEffect(() => {
    fetchData();
  }, []);

  const fetchData = async () => {
    try {
      const response = await facultyAPI.getFacultyById(id); // Assuming you have an API function to get faculty by id
      const { data } = response;
      setFaculty(data);
      console.log("data: " +  faculty);
    } catch (error) {
      console.error('Error fetching faculty data:', error);
    }
  };

  const handleChange = (event) => {
    const { name, value } = event.target;
    setFaculty({ ...faculty, [name]: value });
  };

  const handleSubmit = async (event)  => {
    event.preventDefault();
    try {
      const response = await facultyAPI.editFaculty(id, faculty);
      window.alert(response.data.message);
      // Handle successful update, redirect, or other actions
    } catch (error) {
      console.error('Error updating faculty:', error);
    }
  };

  return (
    <div className="container">
      <HeaderAdmin/>
      <div style={{flex:'1 1 auto', display:'flex', justifyContent:'center'}}>
        <div style={{ width:'500px', display:'flex', flexDirection:'column',  padding:'20px'}}>
          <h1>Edit Faculty</h1>
          <form onSubmit={handleSubmit  }>
            <label htmlFor="name">Name:</label>
            <input type="text" id="name" name="name" value={faculty.name} onChange={handleChange} />
            <div style={{justifyContent:'center', display:'flex'}}> 
              <button type="submit">Save</button>
            </div>
          </form>
        </div>
      </div>
      <Footer/>
    </div>
  );
};

export default EditFaculty;
