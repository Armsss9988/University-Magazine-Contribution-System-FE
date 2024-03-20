import React, { useState, useEffect } from "react";
import Avatar from "../../components/Avatar";
import Footer from "../../components/Footer";
import HeaderStudent from "../../components/HeaderStudent";
import { Link } from 'react-router-dom'; // Import Link from react-router-dom
import { submissionAPI } from "../../api/api";

function ListSubmission() {
    const [submissions, setSubmissions] = useState([]);

    useEffect(() => {
        // Fetch danh sách các submission từ API khi component được render
        const fetchSubmissions = async () => {
            try {
                const response = await submissionAPI.listSubmission(); // Fetch danh sách submissions từ API
                setSubmissions(response.data); // Set danh sách submissions vào state
                console.log(submissions);
            } catch (error) {
                console.error('Failed to fetch submissions:', error);
            }
        };

        fetchSubmissions();
    }, []);

    // Hàm để split document_path thành ba phần _id, student và tên file
    const getFileNameFromPath = (documentPath) => {
        // Tách documentPath thành các phần tử dựa vào dấu '/'
        const parts = documentPath.split('/');
        // Lấy phần tử cuối cùng của mảng là tên file
        const fileNameWithExtension = parts[parts.length - 1];
        // Tách tên file và phần mở rộng bằng cách tách chuỗi theo dấu '.'
        const [fileName, extension] = fileNameWithExtension.split('.');
        // Trả về tên file
        return fileName;
    };
    
    
    



    return (
        <div className="container">
            <HeaderStudent />
            <div className="line"></div>
            <h1>List Submission</h1>
            <div className='main-content' style={{ padding: '20px' }}>
                {submissions.map(submission => (
                    <div className="box-list" key={submission.id}>
                        <div className="files-column">
                            <h3>Files</h3>
                            {/* <p>{submission._id}</p>
                            <p>{submission.student}</p> */}
                            <p>{getFileNameFromPath(submission.document_path)}</p>
                        </div>
                        <div className="status-column">
                            <h3>Status</h3>
                            <p>{submission.status}</p>
                        </div>
                        {/* Thay thế thẻ <a> bằng Link */}
                        <Link to={`/detailsubmission/${submission.id}`} className="detail-link">
                            <button>Detail</button>
                        </Link>
                    </div>
                ))}
            </div>
            <div className="centered-button">
                <Link to="/newsubmission">
                    <button>New Submission</button>
                </Link>
            </div>
            <div className="line"></div>
            <Footer />
        </div>
    );
}

export default ListSubmission;
