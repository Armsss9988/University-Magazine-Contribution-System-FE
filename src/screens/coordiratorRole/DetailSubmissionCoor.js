import React, { useState, useEffect } from "react";
import "../css/styles.css";
import Footer from '../../components/Footer';
import HeaderCoor from "../../components/HeaderCoor";


function DetailSubmissionCoor() {

    const [comment, setComment] = useState('');

    const handleChange = (event) => {
        setComment(event.target.value);
    };

    const handleSubmit = (event) => {
        event.preventDefault();
        // Simulate saving the comment (replace with your actual logic)
        console.log('Saving comment:', comment);
        setComment(''); // Clear comment after save
    };

    const [selectedValue, setSelectedValue] = useState('none');

    const handleChangeStatus = (event) => {
        setSelectedValue(event.target.value);
    };

    return (
        <div className="container">
            <HeaderCoor />

            <div className="line"></div>

            <h1>Detail Submission</h1>
            <div className="main-content" style={{ padding: '20px', display: 'flex', flexDirection: 'column', justifyContent: 'center' }}>

                <div className="sub-box">
                    <div className="detail-item">
                        <div className="title-item">
                            <text>Submission status</text>
                        </div>
                        <div className="result-item">
                            <text>Submission status</text>
                        </div>


                    </div >
                    <div className="detail-item">
                        <div className="title-item">
                            <text>Due date</text>
                        </div>
                        <div className="result-item">
                            <text>Due date</text>
                        </div>
                    </div>
                    <div className="detail-item">
                        <div className="title-item">
                            <text >Time remaining</text>
                        </div>
                        <div className="result-item">
                            <text>Submission status</text>
                        </div>
                    </div>
                    <div className="detail-item">
                        <div className="title-item">
                            <text>File submissions</text>
                        </div>
                        <div className="result-item">
                            <text>Submission status</text>
                        </div>
                    </div>


                </div>

                <form onSubmit={handleSubmit} >
                    <label htmlFor="comment">Comment:</label>
                    <textarea id="comment" value={comment} onChange={handleChange} />
                    <select value={selectedValue} onChange={handleChangeStatus}>
                        <option value="Submited">Submited</option>
                        <option value="Aprove">Aprove</option>
                        <option value="Reject">Reject</option>
                    </select>
                </form>

                <div style={{ width: '100%', textAlign: 'center' }}>
                    <a href="/editsubmission">
                        <button style={{ textAlign: 'center' }}>
                            Save
                        </button>
                    </a>
                </div>
            </div>





            <div className="line"></div>
            <Footer />
        </div>



    );
}

export default DetailSubmissionCoor