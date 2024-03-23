import React, { useState } from 'react';
import HeaderAdmin from '../../../components/HeaderAdmin';
import Footer from '../../../components/Footer';

const EditFaculty = () => {
  const [faculty, setFaculty] = useState({
    code: '',
    name: '',
  });

  // useEffect(() => {
  //   const fetchData = async () => {
  //     const { data } = await axios.get(`/api/faculties/${match.params.id}`);
  //     setFaculty(data);
  //   };
  //   fetchData();
  // }, [match.params.id]);

  const handleChange = (event) => {
    const { name, value } = event.target;
    setFaculty({ ...faculty, [name]: value });
  };

  const handleSubmit = async (event) => {
    event.preventDefault();
    // await axios.put(`/api/faculties/${match.params.id}`, faculty);
    // Redirect to faculty list page after successful update
    window.location.href = '/faculties';
  };

  return (
    <div className="container">
      <HeaderAdmin/>
      <div style={{flex:'1 1 auto', display:'flex', justifyContent:'center'}}>
      <div style={{ width:'500px', display:'flex', flexDirection:'column',  padding:'20px'}}>
      <h1>Edit Faculty</h1>
      <form onSubmit={handleSubmit}>
        <label htmlFor="code">Code:</label>
        <input type="text" id="code" name="code" value={faculty.code} onChange={handleChange} />
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
