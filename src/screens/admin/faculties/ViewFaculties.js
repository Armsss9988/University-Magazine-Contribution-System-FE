import React, { useState, useEffect } from 'react';
import { Link, useNavigate } from 'react-router-dom'; // Import useHistory
import SidebarAdmin from "../../../components/SidebarAdmin";
import Footer from '../../../components/Footer';
import DeleteConfirmationDialog from '../../../components/DeleteConfirmationDialog';
import { facultyAPI } from '../../../api/api';

const ViewFaculty = () => {
  const [faculties, setFaculties] = useState([]);
  const [isDeleteDialogOpen, setIsDeleteDialogOpen] = useState(false);
  const navigate = useNavigate(); // Initialize useHistory

  useEffect(() => {
    fetchData();
  }, []);

  const fetchData = async () => {
    try {
      const { data } = await facultyAPI.listFaculty();
      console.log(data); // Log data received from API
      setFaculties(data);
    } catch (error) {
      console.error('Error fetching data:', error);
    }
  };

  const handleDelete = async (id) => {
    await facultyAPI.deleteFaculty(id);
    console.log('Item deleted!');
    fetchData();
    setIsDeleteDialogOpen(false); // Close the dialog after deletion
  };

  const handleDeleteClick = () => {
    setIsDeleteDialogOpen(true);
  };

  const handleEditClick = (id) => {
    navigate(`/editfaculty/`, { state: { id } }); // Navigate to edit page with faculty id
  };

  return (
    <div className="container">
      <SidebarAdmin />
      <div className="content">
        <header>
          <text></text>
          <div style={{ textAlign: 'right', float: 'right' }}>
            <Link to="/newfaculty">
              <button className='newaccount'>New Faculty</button>
            </Link>
          </div>
        </header>
        <div className='table-container'>
          <h1>Faculty list</h1>
          <table className="table">
            <thead>
              <tr>
                <th>ID</th>
                <th>Name</th>
                <th>Action</th>
              </tr>
            </thead>
            <tbody>
              {faculties.map((faculty) => (
                <tr key={faculty._id}>
                  <td>{faculty._id}</td>
                  <td>{faculty.name}</td>
                  <td>
                    <div style={{ width: '100%', textAlign: 'center', display: 'flex', flexDirection: 'row', alignItems: 'center', justifyContent: 'center' }}>
                      <button style={{ textAlign: 'center' }} onClick={() => handleEditClick(faculty._id)}>
                        Edit
                      </button>
                      <div>
                        <button onClick={handleDeleteClick}>Delete</button>
                        <DeleteConfirmationDialog
                          isOpen={isDeleteDialogOpen}
                          onClose={() => setIsDeleteDialogOpen(false)}
                          onDelete={() => handleDelete(faculty._id)}
                          title="Delete Confirmation"
                          message="This action cannot be undone. Are you sure you want to delete?"
                        />
                      </div>
                    </div>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>

      </div>
    </div>
  );
};

export default ViewFaculty;
