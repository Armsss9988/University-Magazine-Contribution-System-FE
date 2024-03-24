import React, { useState, useEffect } from "react";
import "../css/styles.css";
import HeaderStudent from '../../components/HeaderStudent';
import Footer from '../../components/Footer';
import { submissionAPI } from "../../api/api";
import { useLocation } from 'react-router-dom';

function DetailSubmission() {
    const [submissions, setSubmissions] = useState([]);
    const [student, setStudent] = useState('');
    const [error, setError] = useState(null);

    const location = useLocation();
    const { id } = location.state;

    useEffect(() => {
        fetchData();

    }, []);

    const fetchData = async () => {
        
        try {
            const response = await submissionAPI.getSubmissionById(id);
            const { data } = response;
            setSubmissions(data.submissions);
            
            console.log(data);
            console.log(submissions);
        } catch (error) {
            setError(error.message);
        }
        
    };


    if (error) {
        return <div>Error: {error}</div>;
    }

    if (submissions.length === 0) {
        return <div>Loading...</div>;
    }

    return (
        <div className="container">
            <HeaderStudent />
            <div className="line"></div>
            <h1>Detail Submission</h1>
            <div className="main-content" style={{ padding: '20px', display: 'flex', flexDirection: 'column', justifyContent: 'center' }}>
                <div className="sub-box" >
                    <div className="detail-item">
                        <div className="title-item">
                            <text>Submission name</text>
                        </div>
                        <div className="result-item">
                            <span>{submissions.title}</span>
                        </div>
                    </div>
                    <div className="detail-item">
                        <div className="title-item">
                            <text>Submission status</text>
                        </div>
                        <div className="result-item">
                            <span>{submissions.status}</span>
                        </div>
                    </div>
                    <div className="detail-item">
                        <div className="title-item">
                            <text>created at</text>
                        </div>
                        <div className="result-item">
                            <text>{submissions.created_at}</text>
                        </div>
                    </div>
                    <div className="detail-item">
                        <div className="title-item">
                            <text>Updated at</text>
                        </div>
                        <div className="result-item">
                        <text>{submissions.updated_at}</text>
                        </div>
                    </div>
                    <div className="detail-item">
                        <div className="title-item">
                            <text>File submissions</text>
                        </div>
                        <div className="result-item">
                            <text>{submissions.document_path}</text>
                        </div>
                    </div>
                    <div className="comment-item">
                        <div className="title-item">
                            <text>Comment</text>
                        </div>
                        <div className="result-item">
                            <text>{submissions.comment_content}</text>
                        </div>
                    </div>
                </div>
                <div style={{ width: '100%', textAlign: 'center' }}>
                    <a href="/editsubmission">
                        <button style={{ textAlign: 'center' }}>
                            Edit
                        </button>
                    </a>
                </div>
            </div>

            <div className="line"></div>
            <Footer />
        </div>
    );
}

export default DetailSubmission;
