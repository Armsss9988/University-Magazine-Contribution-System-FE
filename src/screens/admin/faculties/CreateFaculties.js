import React, { useState } from 'react';
import HeaderAdmin from '../../../components/HeaderAdmin';
import Footer from '../../../components/Footer';

const CreateFaculty = () => {
  const [facultyDetails, setFacultyDetails] = useState({
    code: '',
    name: '',
    credits: '',
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFacultyDetails((prevDetails) => ({
      ...prevDetails,
      [name]: value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('Faculty details submitted:', facultyDetails);
    setFacultyDetails({
      code: '',
      name: '',
      credits: '',
    });
  };

  return (
    <div className="container">
      <HeaderAdmin/>
      <div style={{flex:'1 1 auto', display:'flex', justifyContent:'center'}}>
      <div style={{ width:'500px', display:'flex', flexDirection:'column',  padding:'20px'}}>
      <h2 style={{textAlign:'center'}}>Create Faculty</h2>
      <form onSubmit={handleSubmit}>
        <div FacultyName="form-group">
          <label htmlFor="subjectCode">Subject Code:</label>
          <input
            type="text"
            FacultyName="form-control"
            id="Code"
            name="code"
            value={facultyDetails.code}
            onChange={handleChange}
            required
          />
        </div>
        <div FacultyName="form-group">
          <label htmlFor="facultyName">Faculty Name:</label>
          <input
            type="text"
            className="form-control"
            id="facultyName"
            name="name"
            value={facultyDetails.name}
            onChange={handleChange}
            required
          />
        </div>
        <div style={{justifyContent:'center', display:'flex'}}> 
        <button type="submit" FacultyName="btn btn-primary" >Create Faculty</button>
        </div>
        
      </form>
      </div>
      
      </div>
      
    <Footer/>
    </div>

  );
};

export default CreateFaculty;
