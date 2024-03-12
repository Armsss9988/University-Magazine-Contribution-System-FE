import React, { useState } from 'react';
import HeaderAdmin from '../../../components/HeaderAdmin';
import Footer from '../../../components/Footer';
import DeleteConfirmationDialog from '../../../components/DeleteConfirmationDialog';

const ViewFaculty = () => {
  const [faculties, setFaculties] = useState([
    { id: 1, code: 'COMP1787', name: 'Information Technology' },
    { id: 2, code: 'COMP1786', name: 'Graphic Design' },
    { id: 3, code: 'COMP1786', name: 'BUSINESS' },
  ]);

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

  return (
    <div className="container">
      <HeaderAdmin />

      <div style={{ flex: '1 1 auto', display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
        <h2>View Faculty</h2>
        <table className="table">
          <thead>
            <tr>
              <th>ID</th>
              <th>Code</th>
              <th>Name</th>
              <th>Action</th>
            </tr>
          </thead>
          <tbody>
            {faculties.map((faculty) => (
              <tr key={faculty.id}>
                <td>{faculty.id}</td>
                <td>{faculty.code}</td>
                <td>{faculty.name}</td>
                <td>
                  <div style={{ width: '100%', textAlign: 'center', display:'flex', flexDirection:'row', alignItems:'center', justifyContent:'center', backgroundColor:'yellow' }}>
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
      </div>

      <div style={{ width: '100%', textAlign: 'center', margin: '10px' }}>
        <a href="/newfaculty">
          <button style={{ textAlign: 'center' }}>
            New Faculty
          </button>
        </a>
      </div>


      <Footer />
    </div>
  );
};

export default ViewFaculty;
