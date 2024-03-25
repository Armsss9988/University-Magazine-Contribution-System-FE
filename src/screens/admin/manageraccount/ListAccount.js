import React, { useState, useEffect } from 'react';
import SidebarAdmin from "../../../components/SidebarAdmin";
import { Link } from "react-router-dom";
import DeleteConfirmationDialog from '../../../components/DeleteConfirmationDialog';
import { facultyAPI, userAPI } from "../../../api/api";

const ListAccount = () => {
  const [accounts, setAccounts] = useState([]);
  const [faculties, setFaculties] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState(null);
  const [isDeleteDialogOpen, setIsDeleteDialogOpen] = useState(false);
  const [currentPage, setCurrentPage] = useState(1);
  const [accountsPerPage] = useState(10);

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

  // Logic for pagination
  const indexOfLastAccount = currentPage * accountsPerPage;
  const indexOfFirstAccount = indexOfLastAccount - accountsPerPage;
  const currentAccounts = accounts.slice(indexOfFirstAccount, indexOfLastAccount);

  // Change page
  const paginate = (pageNumber) => setCurrentPage(pageNumber);

  return (
    <div className="container">
      <SidebarAdmin />
      <header>
        <text>Accounts List</text>
        <div style={{ textAlign: 'right', float: 'right' }}>
          <Link to="/createaccount">
            <button className='newaccount'>New Account</button>
          </Link>
        </div>
      </header>
      <div style={{ flex: '1 1 auto', display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
      <h1>Accounts List</h1>
        {error && <p>Error: {error.message}</p>}
        {currentAccounts.length > 0 && (
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
              {currentAccounts.map((account) => (
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
        {/* Pagination */}
        {accounts.length > accountsPerPage && (
          <Pagination
            accountsPerPage={accountsPerPage}
            totalAccounts={accounts.length}
            paginate={paginate}
            currentPage={currentPage}
          />
        )}
      </div>
    </div>
  );
};

const Pagination = ({ accountsPerPage, totalAccounts, paginate, currentPage }) => {
  const pageNumbers = [];

  for (let i = 1; i <= Math.ceil(totalAccounts / accountsPerPage); i++) {
    pageNumbers.push(i);
  }

  return (
    <nav>
      <ul className="pagination">
        {pageNumbers.map(number => (
          <li key={number} className={number === currentPage ? 'page-item active' : 'page-item'}>
            <a href="!#" className="page-link" onClick={(e) => {
              e.preventDefault(); // Ngăn chặn hành vi mặc định của trình duyệt
              paginate(number); // Gọi hàm paginate với số trang tương ứng
            }}>
              {number}
            </a>
          </li>
        ))}
      </ul>
    </nav>
  );
};


export default ListAccount;
