import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom'; // Import useHistory
import HeaderAdmin from '../../../components/HeaderAdmin';
import Footer from '../../../components/Footer';
import DeleteConfirmationDialog from '../../../components/DeleteConfirmationDialog';
import { semesterAPI } from '../../../api/api';

const SemesterList = () => {
    const [semesters, setSemesters] = useState([]);
    const [isLoading, setIsLoading] = useState(false);
    const [error, setError] = useState(null);
    const [isDeleteDialogOpen, setIsDeleteDialogOpen] = useState(false);
    const navigate = useNavigate(); // Initialize useHistory

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
        return dateTime.toLocaleString(); // Format the date and time as desired
    };

    return (
        <div className='container'>
            <HeaderAdmin />
            <div style={{ flex: '1 1 auto', display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
                <h1>List of Semesters</h1>
                {isLoading && <p>Loading semesters...</p>}
                {error && <p>Error: {error.message}</p>}
                {semesters.length > 0 && (
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

                            {semesters.map((semester) => (
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
                                            <a href="/editfaculty">
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
                {semesters.length === 0 && !isLoading && <p>No semesters found.</p>}
            </div>
            <div style={{ width: '100%', textAlign: 'center', margin: '10px' }}>
                <a href="/createsemester">
                    <button style={{ textAlign: 'center' }}>
                        New Semester
                    </button>
                </a>
            </div>
            <Footer />
        </div>

    );
};

export default SemesterList;
