import React, { useState, useEffect } from "react";
import "../css/styles.css";
import HeaderStudent from "../../components/HeaderStudent";
import Footer from "../../components/Footer";
import { submissionAPI, userAPI } from "../../api/api";
import { useLocation } from "react-router-dom";

function DetailSubmission() {
  const [submissions, setSubmissions] = useState([]);
  const [student, setStudent] = useState("");
  const [error, setError] = useState(null);

  const location = useLocation();
  const { id } = location.state;

  useEffect(() => {
    async function fetchData() {
        try {
            const submissionsResponse = await submissionAPI.getSubmissionById(id);
            const userResponse = await userAPI.getUser(submissionsResponse.data.submissions.student);
            setSubmissions(submissionsResponse.data.submissions);
            setStudent(userResponse.data.username);
             // Update UI with student data
          } catch (error) {
            // Handle specific error types (optional)
            // (refer to previous improved code for handling examples)
            setError(error.message);
          }
      }
    fetchData();

  }, []); 


  return (
    <div className="container">
      <HeaderStudent />
      <div className="line"></div>
      <h1>Detail Submission</h1>
      <div
        className="main-content"
        style={{
          padding: "20px",
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
        }}
      >
        <div className="sub-box">
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
              <text>Student</text>
            </div>
            <div className="result-item">
              <text>{student}</text>
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
        <div style={{ width: "100%", textAlign: "center" }}>
          <a href="/editsubmission">
            <button style={{ textAlign: "center" }}>Edit</button>
          </a>
        </div>
      </div>

      <div className="line"></div>
      <Footer />
    </div>
  );
}

export default DetailSubmission;
