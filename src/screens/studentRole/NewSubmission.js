import React, { useState } from 'react';
import Dropzone from 'react-dropzone';
import Avatar from '../../components/Avatar';
import HeaderStudent from '../../components/HeaderStudent';
import Footer from '../../components/Footer';
const NewSubmisson = () => {
    const [files, setFiles] = useState([]);

    const onDrop = (acceptedFiles) => {
        setFiles([...files, ...acceptedFiles]);
    };

    return (
        <div className="container">
            <HeaderStudent/>

            <div className="line"></div>

            <h1>New Submission</h1>
            <div className='main-content' style={{paddingLeft:'50px', paddingRight:'50px', alignItems:'center', display:'flex', flexDirection:'column', justifyContent:'center'}}>
            
            <div style={{border:'1px solid black', borderRadius:'20px', justifyContent:'center', display:'flex', width:'100%'}}>
                <Dropzone onDrop={onDrop}>
                    {({ getRootProps, getInputProps }) => (
                        <div {...getRootProps()} className="dropzone" style={{display:'flex', flexDirection:'column', alignItems:'center'}}>
                            <input {...getInputProps()} />
                            <p>Kéo và thả file Word hoặc ảnh vào đây</p>
                            <p>(Hoặc click để chọn file)</p>
                        </div>
                    )}
                </Dropzone>
                <ul>
                    {files.map((file) => (
                        <li key={file.name}>{file.name}</li>
                    ))}
                </ul>
            </div>

            <div style={{ width: '100%', textAlign: 'center' }}>
                <a href="/newsubmission">
                    <button style={{ textAlign: 'center' }}>
                        Submit
                    </button>
                </a>
            </div>
            </div>

            {/* <div className="line"></div> */}
            <Footer/>
        </div>
    );
};

export default NewSubmisson;
