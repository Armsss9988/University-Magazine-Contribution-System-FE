import React, { useState } from 'react';
import Dropzone from 'react-dropzone';
import HeaderStudent from '../../components/HeaderStudent';
import Footer from '../../components/Footer';
import { submissionAPI } from '../../api/api';

const TermsAndConditions = ({ onClose }) => {
    const terms = `
        1. Term 1: Duis at congue sem. Aenean eu nisi sem. Curabitur fringilla pulvinar lorem, sit amet consectetur lectus interdum ac. Curabitur lacinia est et hendrerit euismod. Pellentesque accumsan elit velit, dictum rutrum diam varius semper. Mauris non tortor pretium, euismod ex non, pellentesque nunc. Pellentesque ut porta lorem, sed dictum nulla.
        2. Term 2: Pellentesque molestie sed quam at ultrices. Nulla sem urna, sagittis eu nunc vel, elementum sollicitudin erat. Cras nec sodales leo. Donec vel nulla vitae lorem commodo elementum ac ultricies sem. Vivamus vitae massa et nulla facilisis convallis eu quis sapien. Ut eleifend felis est, nec luctus diam fermentum ac. Sed at scelerisque sapien. Vivamus tempor sollicitudin magna, ac euismod massa accumsan ac. Sed tincidunt, metus in lobortis porta, odio erat ornare lorem, vel sagittis nisi tellus nec nibh. Morbi eu justo at sem sodales rhoncus. Donec et elit mauris. Cras a nibh egestas ligula posuere consectetur et semper ante. Vestibulum quis nibh orci. Maecenas vulputate feugiat placerat.
        3. Term 3: Aliquam bibendum erat nec feugiat faucibus. Praesent et quam sapien. Ut accumsan vulputate metus, sit amet posuere dolor faucibus id. Fusce a pretium mi. Nulla ipsum enim, vulputate a urna eget, viverra consequat sapien. Morbi suscipit, odio a mollis facilisis, metus metus ultricies nulla, at gravida nibh orci non purus. Morbi maximus posuere mauris, in luctus libero efficitur eu. Donec nisi justo, aliquam at hendrerit et, egestas in ex. Proin eget suscipit felis, a ullamcorper lacus. Duis vehicula faucibus placerat. Quisque sagittis elit dolor, sed cursus neque facilisis in. Maecenas leo neque, pretium eget pulvinar at, pulvinar in ex. Nulla facilisi.
        4. Term 4: Nulla varius dui quis neque rutrum vulputate. Etiam semper enim quis urna sagittis, in viverra odio scelerisque. Morbi cursus, dolor a hendrerit sagittis, purus dui blandit lorem, id auctor ante elit vitae nunc. Etiam vel dictum mauris. Quisque eget neque in risus mollis volutpat at ut felis. Sed convallis augue ac neque interdum, vitae cursus nulla porttitor. Duis porttitor nisi a congue feugiat. Ut consequat leo massa, vitae ultrices arcu ornare eu. Duis maximus sem et est aliquam vehicula. Cras ut ex eget eros consequat fermentum. Nunc in arcu vel magna facilisis imperdiet. Vestibulum euismod feugiat erat eu faucibus. Quisque lobortis sit amet arcu sit amet lacinia. Ut non est vel felis commodo elementum. Nunc mattis condimentum pulvinar. Aliquam libero ligula, porta in leo eget, gravida pulvinar massa.
    `;

    return (
        <div className="dialog-container">
            <div className="dialog">
                <h2>Terms of Service</h2>
                <pre>{terms}</pre>
                <button onClick={onClose}>Close</button>
            </div>
        </div>
    );
};

const NewSubmission = () => {
    const [files, setFiles] = useState([]);
    const [title, setTitle] = useState('');
    const [agree, setAgree] = useState(false);
    const [showTerms, setShowTerms] = useState(false);

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

        if (!agree) {
            alert('You must agree to the terms and conditions before submitting the form.');
            return;
        }

        const formData = new FormData();
        formData.append('title', title);
        files.forEach((file) => {
            formData.append(`File`, file);
        });

        try {
            const response = await submissionAPI.createSubmission(formData, {
                headers: {
                    'Content-Type': 'multipart/form-data'
                }
            });
            console.log('Upload success:', response.data);
        } catch (error) {
            console.error('Upload failed:', error);
        }
    };

    const handleTitleChange = (event) => {
        setTitle(event.target.value);
    };

    const handleAgreeChange = () => {
        setAgree(!agree);
    };

    const handleShowTerms = () => {
        setShowTerms(true);
    };

    const handleCloseTerms = () => {
        setShowTerms(false);
    };

    return (
        <div className="container">
            <HeaderStudent/>
            <div className="line"></div>
            <h1>New Submission</h1>
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
                        {files.map((file) => (
                            <li key='File'>{file.name}</li>
                        ))}
                    </ul>
                    <form onSubmit={handleSubmit}>
                        <input type="text" value={title} onChange={handleTitleChange} placeholder="Title" />
                        <label className='checkbox-container'>
                            <input className='checkbox' type="checkbox" checked={agree} onChange={handleAgreeChange} />
                            <span className="checkbox-label">I agree to the <text className='text-terms' onClick={handleShowTerms}>Terms of Service</text></span>
                        </label>
                        <button type="submit">Submit</button>
                    </form>
                </div>
            </div>
            {showTerms && <TermsAndConditions onClose={handleCloseTerms} />}
            <Footer/>
        </div>
    );
};

export default NewSubmission;
