import React, { useState, useEffect } from "react";
import { useNavigate, Link } from 'react-router-dom';
import { submissionAPI } from "../../api/api";
import HeaderStudent from '../../components/HeaderStudent';
import Footer from '../../components/Footer';

function ListSubmission() {
    const [submissions, setSubmissions] = useState([]);
    const [currentPage, setCurrentPage] = useState(1);
    const itemsPerPage = 5;
    const navigate = useNavigate();

    useEffect(() => {
        const fetchSubmissions = async () => {
            try {
                const response = await submissionAPI.listSubmission();
                setSubmissions(response.data);
            } catch (error) {
                console.error('Failed to fetch submissions:', error);
            }
        };

        fetchSubmissions();
    }, []);

    const handleDetailClick = (id) => {
        navigate(`/detailsubmission/`, { state: { id } });
    };

    // Tính toán số trang
    const totalPages = Math.ceil(submissions.length / itemsPerPage);

    // Hàm để lấy các mục trên trang hiện tại
    const getCurrentItems = () => {
        const startIndex = (currentPage - 1) * itemsPerPage;
        const endIndex = startIndex + itemsPerPage;
        return submissions.slice(startIndex, endIndex);
    };

    return (
        <div className="container">
            <HeaderStudent />
            <h1 className="list-sub-title">List Submission</h1>
            <div className='content-list-sub' style={{ padding: '20px' }}>
                {getCurrentItems().map(submission => (
                    <div className="box-list-sub" key={submission._id}>
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
            <div className="pagination-list-sub">
                <button onClick={() => setCurrentPage(prevPage => Math.max(prevPage - 1, 1))} disabled={currentPage === 1}>Previous</button>
                <span>Page {currentPage} of {totalPages}</span>
                <button onClick={() => setCurrentPage(prevPage => Math.min(prevPage + 1, totalPages))} disabled={currentPage === totalPages}>Next</button>
            </div>
            <div className="centered-button">
            <Link to="/newsubmission">
                <button className="new-sub-btn">New Submission</button>
                </Link>
            </div>
            <Footer/>
        </div>
    );
}

export default ListSubmission;
