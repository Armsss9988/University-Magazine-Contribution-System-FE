import React, { useState, useEffect } from "react";
import { useNavigate, Link } from 'react-router-dom'; // Import useNavigate và Link từ react-router-dom
import { submissionAPI } from "../../api/api";
import HeaderStudent from '../../components/HeaderStudent'; // Import HeaderStudent từ đường dẫn chính xác
import Footer from '../../components/Footer'; // Import Footer từ đường dẫn chính xác

function ListSubmission() {
    const [submissions, setSubmissions] = useState([]);
    const navigate = useNavigate();

    useEffect(() => {
        const fetchSubmissions = async () => {
            try {
                const response = await submissionAPI.listSubmission();
                setSubmissions(response.data);
                console.log(response.data);
            } catch (error) {
                console.error('Failed to fetch submissions:', error);
            }
        };

        fetchSubmissions();
    }, []);

    const handleDetailClick = (id) => {
        navigate(`/detailsubmission/`, { state: { id } }); // Navigate to edit page with faculty id
    };

    return (
        <div className="container">
            <HeaderStudent /> {/* Sử dụng HeaderStudent */}
            <div className="line"></div>
            <h1>List Submission</h1>
            <div className='main-content' style={{ padding: '20px' }}>
                {submissions.map(submission => (
                    <div className="box-list" key={submission._id}>
                        <div className="files-column">
                            <h3>Title</h3>
                            <p>{submission.title}</p>
                        </div>
                        <div className="status-column">
                            <h3>Status</h3>
                            <p>{submission.status}</p>
                        </div>
                        <button onClick={() => handleDetailClick(submission._id)}>Detail</button>
                    </div>
                ))}
            </div>
            <div className="centered-button">
                <Link to="/newsubmission">
                    <button>New Submission</button>
                </Link>
            </div>
            <div className="line"></div>
            <Footer /> {/* Sử dụng Footer */}
        </div>
    );
}

export default ListSubmission;
