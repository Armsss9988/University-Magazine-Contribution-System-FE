import React, { useState, useEffect } from "react";
import "./styles.css";
import Avatar from "../components/Avatar";
import Footer from "../components/Footer";
import HeaderStudent from "../components/HeaderStudent";

function DetailSubmission() {


    return (
        <div className="container">
            <HeaderStudent/>

            <div className="line"></div>

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
                    <div className="comment-item">

                        <div className="title-item">
                            <text>Comment</text>
                        </div>
                        <div className="result-item" >
                            <text>Submission status</text>
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
            <Footer/>
        </div>



    );
}

export default DetailSubmission