import React, { useState, useEffect } from 'react';
import axios from 'axios'; // Import Axios for HTTP requests
import HeaderAdmin from '../../../components/HeaderAdmin';
import Footer from '../../../components/Footer';
import DeleteConfirmationDialog from '../../../components/DeleteConfirmationDialog';
import { userAPI } from "../../../api/api";



const ListAccount = () => {
  const [accounts, setAccounts] = useState([
  
  ]);

    useEffect(() => {
      
      fetchData();
    }, []);

    const fetchData = async () => {
      const { data } = await userAPI.allUser();
      setAccounts(data.users);
      console.log(accounts);
    };
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState(null);
  const [isDeleteDialogOpen, setIsDeleteDialogOpen] = useState(false);

  // ... your component logic

  const handleDelete = async (id) => {
    await userAPI.deleteUser(id);
    // Perform your actual deletion logic here
    console.log('Item deleted!');
    fetchData();
    setIsDeleteDialogOpen(false); // Close the dialog after deletion
  };

  const handleDeleteClick = () => {
    setIsDeleteDialogOpen(true);
  };

  return (
    <div className="container">
      <HeaderAdmin />

      <div style={{ flex: '1 1 auto' }}>
        <h1>Manage Accounts</h1>
        {error && <p>Error: {error.message}</p>}
        {accounts.length > 0 && (
          <table className="table">

            <thead>
              <tr>
              <th>ID</th>
                <th>Email</th>
                <th>Action</th>
              </tr>
            </thead>
            <tbody>

              {accounts.map((account) => (

                <tr>
                  <td>{account._id}</td>
                  <td>{account.email}</td>

                  <td>
                    <div style={{
                      width: '100%', textAlign: 'center', display: 'flex', flexDirection: 'row',
                      alignItems: 'center', justifyContent: 'center'
                    }}>
                      <a href="/editfaculty">
                        <button style={{ textAlign: 'center' }}>
                          Edit
                        </button>
                      </a>
                      <div>
                        {/* Your component content */}
                        <button onClick={handleDeleteClick}>Delete</button>
                        <DeleteConfirmationDialog
                          isOpen={isDeleteDialogOpen}
                          onClose={() => setIsDeleteDialogOpen(false)}
                          onDelete={() => handleDelete(account._id)}
                          title="Delete Confirmation" // Optional: Customize title
                          message="This action cannot be undone. Are you sure you want to delete?" // Optional: Customize message
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
                    <button style={{ textAlign: 'center' }}>
                        New Account
                    </button>
                </a>
            </div>


      <Footer />
    </div>

  );
};

export default ListAccount;
