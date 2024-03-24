import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom'; // Import useHistory
import HeaderAdmin from '../../../components/HeaderAdmin';
import Footer from '../../../components/Footer';
import DeleteConfirmationDialog from '../../../components/DeleteConfirmationDialog';
import { semesterAPI } from '../../../api/api';

const SemesterList = () => {
    const [semesters, setSemesters] = useState([
    ]);
    const [isLoading, setIsLoading] = useState(false);
    const [error, setError] = useState(null);
    const [isDeleteDialogOpen, setIsDeleteDialogOpen] = useState(false);
    const navigate = useNavigate(); // Initialize useHistory

    // ... your component logic

    const handleDelete = async (id) => {
        await semesterAPI.deleteSemester(id);
        // Perform your actual deletion logic here
        console.log('Item deleted!');
        fetchData();
        setIsDeleteDialogOpen(false); // Close the dialog after deletion
    };

    const handleDeleteClick = () => {
        setIsDeleteDialogOpen(true);
    };

    //   useEffect(() => {
    //     const fetchData = async () => {
    //       setIsLoading(true);
    //       setError(null); // Clear any previous errors

    //       try {
    //         const response = await axios.get('/api/semesters'); // Replace with your API endpoint
    //         setSemesters(response.data);
    //       } catch (error) {
    //         console.error('Error fetching semesters:', error);
    //         setError(error); // Store error for display
    //       } finally {
    //         setIsLoading(false);
    //       }
    //     };

    //     fetchData();
    //   }, []);

    useEffect(() => {

        fetchData();
    }, []);

    const fetchData = async () => {
        const { data } = await semesterAPI.listSemester();
        setSemesters(data);
        console.log(semesters);
    };

    const handleEditClick = (id) => {
        navigate(`/editsemester/`, { state: { id } }); // Navigate to edit page with faculty id
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
                                <th>Start day</th>
                                <th>End day</th>
                                <th>Status</th>
                                <th>Name</th>
                                <th>Action</th>
                            </tr>
                        </thead>
                        <tbody>

                            {semesters.map((semester) => (
                                <tr key={semester._id}>
                                    <td>{semester.start_date}</td>
                                    <td>{semester.final_closure_date}</td>
                                    <td>{semester.closed}</td>
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
                                                {/* Your component content */}
                                                <button onClick={handleDeleteClick}>Delete</button>
                                                <DeleteConfirmationDialog
                                                    isOpen={isDeleteDialogOpen}
                                                    onClose={() => setIsDeleteDialogOpen(false)}
                                                    onDelete={() => handleDelete(semester._id)}
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
