import React, { useState, useEffect } from 'react';
import axios from 'axios'; // Import Axios for HTTP requests
import HeaderAdmin from '../../../components/HeaderAdmin';
import Footer from '../../../components/Footer';
import DeleteConfirmationDialog from '../../../components/DeleteConfirmationDialog';
import { facultyAPI, userAPI } from "../../../api/api";

const ListAccount = () => {
  const [accounts, setAccounts] = useState([]);
  const [faculties, setFaculties] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState(null);
  const [isDeleteDialogOpen, setIsDeleteDialogOpen] = useState(false);

  useEffect(() => {
    fetchData();
    fetchDataFa();
    
  }, []);

  const fetchData = async () => {
    try {
      const { data } = await userAPI.allUser();
      setAccounts(data.users);
    } catch (error) {
      console.error('Error fetching user data:', error);
      setError(error);
    }
  };

  const fetchDataFa = async () => {
    try {
      const { data } = await facultyAPI.listFaculty();
      setFaculties(data);
      console.log(data.name);
    } catch (error) {
      console.error('Error fetching faculty data:', error);
      setError(error);
    }
  };

  const getFacultyNameById = (facultyId) => {
    const faculty = faculties.find(f => f._id === facultyId);
    return faculty ? faculty.name : 'Unknown';
  };

  const handleDelete = async (id) => {
    await userAPI.deleteUser(id);
    console.log('Item deleted!');
    fetchData();
    setIsDeleteDialogOpen(false);
  };

  const handleDeleteClick = () => {
    setIsDeleteDialogOpen(true);
  };

  return (
    <div className="container">
      <HeaderAdmin />

      <div style={{ flex: '1 1 auto', display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
        <h1>List Accounts</h1>
        {error && <p>Error: {error.message}</p>}
        {accounts.length > 0 && (
          <table className="table">
            <thead>
              <tr>
                <th>Email</th>
                <th>Role</th>
                <th>Faculty</th>
                <th>Action</th>
              </tr>
            </thead>
            <tbody>
              {accounts.map((account) => (
                
                <tr key={account._id}>
                  <td>{account.email}</td>
                  <td>{account.role}</td>
                  <td>{getFacultyNameById(account.faculty)}</td>
                  <td>
                    <div style={{ width: '100%', textAlign: 'center', display: 'flex', flexDirection: 'row', alignItems: 'center', justifyContent: 'center' }}>
                      <a href="/editfaculty">
                        <button>Edit</button>
                      </a>
                      <div>
                        <button onClick={handleDeleteClick}>Delete</button>
                        <DeleteConfirmationDialog
                          isOpen={isDeleteDialogOpen}
                          onClose={() => setIsDeleteDialogOpen(false)}
                          onDelete={() => handleDelete(account._id)}
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
        )}
      </div>

      <div style={{ width: '100%', textAlign: 'center', margin: '10px' }}>
        <a href="/createaccount">
          <button>New Account</button>
        </a>
      </div>

      <Footer />
    </div>
  );
};

export default ListAccount;
