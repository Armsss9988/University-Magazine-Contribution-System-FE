import React, { useState, useEffect } from 'react';
import axios from 'axios';
import HeaderAdmin from '../../../components/HeaderAdmin';
import Footer from '../../../components/Footer';
import DeleteConfirmationDialog from '../../../components/DeleteConfirmationDialog';

const SemesterList = () => {
    const [semesters, setSemesters] = useState([
        { id: 1, startday: '11/03/2024', endday: '11/07/2024', status: 'Opening', name: 'SUMMER 2024' },
    ]);
    const [isLoading, setIsLoading] = useState(false);
    const [error, setError] = useState(null);
    const [isDeleteDialogOpen, setIsDeleteDialogOpen] = useState(false);

    // ... your component logic

    const handleDelete = () => {
        // Perform your actual deletion logic here
        console.log('Item deleted!');
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
                                <th>ID</th>
                                <th>Start day</th>
                                <th>End day</th>
                                <th>Status</th>
                                <th>Name</th>
                                <th>Action</th>
                            </tr>
                        </thead>
                        <tbody>

                            {semesters.map((semester) => (
                                <tr key={semester.id}>
                                    <td>{semester.id}</td>
                                    <td>{semester.startday}</td>
                                    <td>{semester.endday}</td>
                                    <td>{semester.status}</td>
                                    <td>{semester.name}</td>
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
                                                    onDelete={handleDelete}
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
