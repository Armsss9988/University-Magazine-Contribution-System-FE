import React, { useState, useEffect } from 'react';
import { useLocation } from 'react-router-dom'; // Import useParams
//import { useHistory } from 'react-router-dom'; // Để điều hướng sau khi chỉnh sửa
import HeaderAdmin from '../../../components/HeaderAdmin';
import Footer from '../../../components/Footer';
import { semesterAPI } from '../../../api/api';

const EditSemester = ({ match }) => {
    const [name, setName] = useState('');
    const [startDate, setStartDate] = useState('');
    const [endDate, setEndDate] = useState('');
    const [closed, setClosed] = useState(false);
    const [isLoading, setIsLoading] = useState(false);
    const [error, setError] = useState(null);
    const location = useLocation(); // Get id from URL
    const { id } = location.state;

    // useEffect(() => {
    //     fetchData();
    //   }, []);
    
    //   const fetchData = async () => {
    //     try {
    //       const response = await facultyAPI.getFacultyById(id); // Assuming you have an API function to get faculty by id
    //       const { data } = response;
    //       setFaculty(data);
    //       console.log("data: " +  faculty);
    //     } catch (error) {
    //       console.error('Error fetching faculty data:', error);
    //     }
    //   };
    
    //   const handleChange = (event) => {
    //     const { name, value } = event.target;
    //     setFaculty({ ...faculty, [name]: value });
    //   };
    
      const handleSubmit = async (event)  => {
        event.preventDefault();
        // try {
        //   const response = await facultyAPI.editFaculty(id, faculty);
        //   window.alert(response.data.message);
        //   // Handle successful update, redirect, or other actions
        // } catch (error) {
        //   console.error('Error updating faculty:', error);
        // }
      };

    return (
        <div className='container'>
            <HeaderAdmin />
            <div style={{ flex: '1 1 auto', display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
                <h2>Edit Semester</h2>
                {isLoading && <p>Loading semester data...</p>}
                {error && <p>Error: {error.message}</p>}
                {!isLoading && (
                    <form onSubmit={handleSubmit}>
                        <label>
                            Academic Semester:
                            <input type="text" value={name} onChange={(e) => setName(e.target.value)} required />
                        </label>
                        <br />
                        <label>
                            Start Date:
                            <input type="date" value={startDate} onChange={(e) => setStartDate(e.target.value)} required />
                        </label>
                        <br />
                        <label>
                            End Date:
                            <input type="date" value={endDate} onChange={(e) => setEndDate(e.target.value)} required />
                        </label>
                        <br />
                        <label>
                            Closed:
                            <input type="checkbox" checked={closed} onChange={(e) => setClosed(e.target.checked)} />
                        </label>
                        <br />
                        <button type="submit">Update Semester</button>
                    </form>
                )}
            </div>
            <Footer />
        </div>
    );
};

export default EditSemester;
