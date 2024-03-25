import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import SidebarAdmin from "../../../components/SidebarAdmin";
import Footer from '../../../components/Footer';
import DeleteConfirmationDialog from '../../../components/DeleteConfirmationDialog';
import { semesterAPI } from '../../../api/api';
import { Link } from "react-router-dom";


const SemesterList = () => {
    const [semesters, setSemesters] = useState([]);
    const [isLoading, setIsLoading] = useState(false);
    const [error, setError] = useState(null);
    const [isDeleteDialogOpen, setIsDeleteDialogOpen] = useState(false);
    const [currentPage, setCurrentPage] = useState(1);
    const [semestersPerPage] = useState(10);
    const navigate = useNavigate();

    useEffect(() => {
        fetchData();
    }, []);

    const fetchData = async () => {
        try {
            const { data } = await semesterAPI.listSemester();
            setSemesters(data);
        } catch (error) {
            console.error('Error fetching semester data:', error);
            setError(error);
        }
    };

    const handleDelete = async (id) => {
        await semesterAPI.deleteSemester(id);
        console.log('Item deleted!');
        fetchData();
        setIsDeleteDialogOpen(false);
    };

    const handleDeleteClick = () => {
        setIsDeleteDialogOpen(true);
    };

    const formatDateTime = (dateTimeString) => {
        const dateTime = new Date(dateTimeString);
        return dateTime.toLocaleString();
    };

    const indexOfLastSemester = currentPage * semestersPerPage;
    const indexOfFirstSemester = indexOfLastSemester - semestersPerPage;
    const currentSemesters = semesters.slice(indexOfFirstSemester, indexOfLastSemester);

    const paginate = (pageNumber) => setCurrentPage(pageNumber);

    return (
        <div className='container'>
            <SidebarAdmin />
            <div className="content">
                <header>
                    <text></text>
                    <div style={{ textAlign: 'right', float: 'right' }}>
                        <Link to="/createsemester">
                            <button className='newaccount'>New Semester</button>
                        </Link>
                    </div>
                </header>
                <div className='table-container'>
                    <h1>List of Semesters</h1>
                    {isLoading && <p>Loading semesters...</p>}
                    {error && <p>Error: {error.message}</p>}
                    {currentSemesters.length > 0 && (
                        <table className="table">
                            <thead>
                                <tr>
                                    <th>Start date and time</th>
                                    <th>End date and time</th>
                                    <th>Status</th>
                                    <th>Name</th>
                                    <th>Action</th>
                                </tr>
                            </thead>
                            <tbody>
                                {currentSemesters.map((semester) => (
                                    <tr key={semester._id}>
                                        <td>{formatDateTime(semester.start_date)}</td>
                                        <td>{formatDateTime(semester.final_closure_date)}</td>
                                        <td>{semester.closed ? 'Closed' : 'Opening'}</td>
                                        <td>{semester.academic_year}</td>
                                        <td>
                                            <div style={{
                                                width: '100%', textAlign: 'center', display: 'flex', flexDirection: 'row',
                                                alignItems: 'center', justifyContent: 'center'
                                            }}>
                                                <a href="/editsemester">
                                                    <button style={{ textAlign: 'center' }}>
                                                        Edit
                                                    </button>
                                                </a>
                                                <div>
                                                    <button onClick={handleDeleteClick}>Delete</button>
                                                    <DeleteConfirmationDialog
                                                        isOpen={isDeleteDialogOpen}
                                                        onClose={() => setIsDeleteDialogOpen(false)}
                                                        onDelete={() => handleDelete(semester._id)}
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
                    {currentSemesters.length === 0 && !isLoading && <p>No semesters found.</p>}
                    {/* Pagination */}
                    {semesters.length > semestersPerPage && (
                        <Pagination
                            semestersPerPage={semestersPerPage}
                            totalSemesters={semesters.length}
                            paginate={paginate}
                            currentPage={currentPage}
                        />
                    )}
                </div>

            </div>
        </div>
    );
};

const Pagination = ({ semestersPerPage, totalSemesters, paginate, currentPage }) => {
    const pageNumbers = [];

    for (let i = 1; i <= Math.ceil(totalSemesters / semestersPerPage); i++) {
        pageNumbers.push(i);
    }

    return (
        <nav>
            <ul className="pagination">
                {pageNumbers.map(number => (
                    <li key={number} className={number === currentPage ? 'page-item active' : 'page-item'}>
                        <a href="!#" className="page-link" onClick={(e) => {
                            e.preventDefault();
                            paginate(number);
                        }}>
                            {number}
                        </a>
                    </li>
                ))}
            </ul>
        </nav>
    );
};

export default SemesterList;
