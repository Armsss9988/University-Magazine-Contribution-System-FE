import React, { useState, useEffect } from "react";
import Dropzone from "react-dropzone";
import { useLocation } from "react-router-dom";
import HeaderStudent from "../../components/HeaderStudent";
import Footer from "../../components/Footer";
import { submissionAPI } from "../../api/api";
import { useNavigate, Link } from "react-router-dom";

const EditSubmission = () => {
  const [files, setFiles] = useState([]);
  const [dropFiles, setDropFiles] = useState([]);
  const [title, setTitle] = useState("");
  const location = useLocation();
  const { id, isEntryEnd } = location.state;
  const navigate = useNavigate();

  useEffect(() => {
    // Fetch data của submission đã có từ API và hiển thị lên giao diện
    const fetchData = async () => {
      try {
        const response = await submissionAPI.getSubmissionById(id);
        const { data } = response;
        setTitle(data.submission.title);
        console.log(data.submission.document_path);
        const fileData = [];
        data.files.forEach((file) => {
          const blob = new Blob([new Uint8Array(file.data.data)], {
            type: file.type,
          });
          const newFile = new File([blob], file.name, { type: file.type });
          console.log(newFile);
          fileData.push(newFile);
        });
        setFiles(fileData);
      } catch (error) {
        console.error("Fetch submission error:", error);
      }
    };

    fetchData();
  }, [id]);

  const onDrop = (acceptedFiles) => {
    setDropFiles([...dropFiles, ...acceptedFiles]);
  };

  const handleSubmit = async (event) => {
    event.preventDefault();

    if (title.trim() === "") {
      alert("Please enter a title.");
      return;
    }

    if (files.length === 0) {
      alert("Please select at least one file.");
      return;
    }

    const formData = new FormData();
    formData.append("title", title);
    files.forEach((file) => {
      console.log(file);
      formData.append(`File`, file);
    });
    dropFiles.forEach((file) => {
      formData.append(`File`, file);
    });

    try {
      if (isEntryEnd) {
        const response = await submissionAPI.updateSubmission(id, formData);
        if (response) {
          alert(response.data.message);
          navigate(-1);
        }
      } else {
        const response = await submissionAPI.editSubmission(id, formData);
        if (response) {
          alert(response.data.message);
          navigate(-1);
        }
      }
    } catch (error) {
      alert("Failed change data of submission!");
      console.error("Update failed:", error);
    }
  };

  const handleTitleChange = (event) => {
    setTitle(event.target.value);
  };
  const initiateDownload = (file) => {
    console.log(file.data);
    if (!file.type) {
      console.error(
        "File type not available. Download may not work correctly."
      );
    }
    const blob = new Blob([file], { type: file.type });
    const url = window.URL.createObjectURL(blob);
    const link = document.createElement("a");
    link.href = url;
    link.setAttribute("download", file.name);
    document.body.appendChild(link);
    link.click();
    link.parentNode.removeChild(link);
  };

  const handleDeleteFile = (index) => {
    setFiles(files.filter((file, fileIndex) => fileIndex !== index));
  };
  const handleDeleteDropedFile = (index) => {
    setDropFiles(dropFiles.filter((file, fileIndex) => fileIndex !== index));
  };

  return (
    <div className="container">
      <HeaderStudent />
      <h1 style={{textAlign: 'center'}}>Edit Submission</h1>
      <div className="main-content">
        <div className="form-container">
          <Dropzone onDrop={onDrop} className="dropzone">
            {({ getRootProps, getInputProps }) => (
              <div {...getRootProps()} className="dropzone-content">
                <input {...getInputProps()} />
                <p>Drag and drop Word files or images here</p>
                <p>(Or click to select file)</p>
              </div>
            )}
          </Dropzone>
          <ul className="file-list">
            {(files.length > 0 || dropFiles.length > 0) && (
              <>
                {files.map((file, index) => (
                  <li key={index}>
                    <div className="file-info">
                      <span>{file.name}</span>
                      <div className="file-actions">
                        <button onClick={() => initiateDownload(file)}>
                          Download
                        </button>
                        {!isEntryEnd && (
                          <button onClick={() => handleDeleteFile(index)}>
                            Delete
                          </button>
                        )}
                      </div>
                    </div>
                  </li>
                ))}
                {dropFiles.map((file, index) => (
                  <li key={index}>
                    <div className="file-info">
                      <span>{file.name}</span>
                      <div className="file-actions">
                        <button onClick={() => initiateDownload(file)}>
                          Download
                        </button>
                        {!isEntryEnd && (
                          <button onClick={() => handleDeleteDropedFile(index)}>
                            Delete
                          </button>
                        )}
                      </div>
                    </div>
                  </li>
                ))}
              </>
            )}
          </ul>
          <form onSubmit={handleSubmit}>
            <input
              type="text"
              value={title}
              onChange={handleTitleChange}
              placeholder="Title"
            />
            <button type="submit">Submit</button>
          </form>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default EditSubmission;
