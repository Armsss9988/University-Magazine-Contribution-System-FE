import React, { useState, useEffect } from 'react';
import Dropzone from 'react-dropzone';
import { useParams } from 'react-router-dom';
import HeaderStudent from '../../components/HeaderStudent';
import Footer from '../../components/Footer';
import { submissionAPI } from '../../api/api';

const EditSubmission = () => {
    const { id } = useParams();
    const [files, setFiles] = useState([]);
    const [title, setTitle] = useState('');

    useEffect(() => {
        // Fetch data của submission đã có từ API và hiển thị lên giao diện
        const fetchData = async () => {
            try {
                const response = await submissionAPI.getSubmissionById(id);
                const { data } = response;
                setTitle(data.title);
                setFiles(data.files);
            } catch (error) {
                console.error('Fetch submission error:', error);
            }
        };

        fetchData();
    }, [id]);

    const onDrop = (acceptedFiles) => {
        setFiles([...files, ...acceptedFiles]);
    };

    const handleSubmit = async (event) => {
        event.preventDefault();

        if (title.trim() === '') {
            alert('Please enter a title.');
            return;
        }

        if (files.length === 0) {
            alert('Please select at least one file.');
            return;
        }

        const formData = new FormData();
        formData.append('title', title);
        files.forEach((file) => {
            formData.append(`File`, file);
        });

        try {
            const response = await submissionAPI.updateSubmission(id, formData, {
                headers: {
                    'Content-Type': 'multipart/form-data'
                }
            });
            console.log('Update success:', response.data);
        } catch (error) {
            console.error('Update failed:', error);
        }
    };

    const handleTitleChange = (event) => {
        setTitle(event.target.value);
    };

    return (
        <div className="container">
            <HeaderStudent/>
            <div className="line"></div>
            <h1>Edit Submission</h1>
            <div className='main-content'>
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
                        {files.map((file, index) => (
                            <li key={index}>{file.name}</li>
                        ))}
                    </ul>
                    <form onSubmit={handleSubmit}>
                        <input type="text" value={title} onChange={handleTitleChange} placeholder="Title" />
                        <button type="submit">Submit</button>
                    </form>
                </div>
            </div>
            <Footer/>
        </div>
    );
};

export default EditSubmission;
