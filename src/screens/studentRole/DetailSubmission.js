import React, { useState, useEffect } from "react";
import "../css/styles.css";
import HeaderStudent from "../../components/HeaderStudent";
import Footer from "../../components/Footer";
import { useNavigate, Link } from "react-router-dom"; // Import useNavigate và Link từ react-router-dom
import { submissionAPI, userAPI, entryAPI } from "../../api/api";
import { useLocation } from "react-router-dom";

function DetailSubmission() {
  const [isLoading, setLoading] = useState("true");
  const [isEntryEnd, setEntryEnd] = useState("false");
  const [submissions, setSubmissions] = useState([]);
  const [student, setStudent] = useState("");
  const [files, setFiles] = useState([]);
  const [error, setError] = useState(null);
  const navigate = useNavigate();

  const location = useLocation();
  const { id } = location.state;

  useEffect(() => {
    fetchData();
  }, []);

  const fetchData = async () => {
    try {
      const submissionsResponse = await submissionAPI.getSubmissionById(id);
      const userResponse = await userAPI.getUser(
        submissionsResponse.data.submission.student
      );
      const entryResponse = await entryAPI.getEntryById(
        submissionsResponse.data.submission.entry
      );
      const documentPath = submissionsResponse.data.submission.document_path;
      const fileNames = documentPath.split(",").map((name) => name.substring(id.length * 2));
      setFiles(fileNames);
      setSubmissions(submissionsResponse.data.submission);
      setStudent(userResponse.data.username);
      setEntryEnd(entryResponse.data.isClosed);
      setLoading(false);
      // Update UI with student data
    } catch (error) {
      // Handle specific error types (optional)
      // (refer to previous improved code for handling examples)
      setError(error.message);
      setLoading(false);
    }
  };

  const handleEditClick = (id) => {
    navigate(`/editsubmission/`, { state: { id: id, isEntryEnd: isEntryEnd } }); // Navigate to edit page with faculty id
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
      {isLoading ? (
        <div>Loading...</div>
      ) : (
        <div>
          <h1 style={{ textAlign: 'center' }}>Detail Submission</h1>
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
                  <text>File</text>
                </div>
                <div className="result-item">
                  <ul>
                    {files.map((file, index) => (
                      <li key={index}>
                        <text>{file}</text>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>


              <div className="detail-item">
                <div className="title-item">
                  <text>Created at</text>
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
              <button onClick={() => handleEditClick(submissions._id)}>
                {(isEntryEnd) ? 'Update' : 'Edit'}
              </button>
            </div>
          </div>
        </div>
      )}

      <div className="line"></div>
      <Footer />
    </div>
  );
}

export default DetailSubmission;
