import React, { useState } from 'react';
import Dropzone from 'react-dropzone';
import Avatar from '../components/Avatar';
import Footer from "../components/Footer";

const NewSubmisson = () => {
    const [files, setFiles] = useState([]);

    const onDrop = (acceptedFiles) => {
        setFiles([...files, ...acceptedFiles]);
    };

    return (
        <div className="container">
            <header>
                <div className="logoname">
                    <h2 style={{ fontSize: "20px" }}>FGW University Magazine Contribution</h2>

                </div>

                <div className="menu">
                    <a>
                        <h2 className="a" style={{ fontSize: '20px', fontWeight: "normal" }}>Home</h2>
                    </a>
                    <a>
                        <h2 className="a" style={{ fontSize: '20px', fontWeight: "normal", marginRight: '100px', marginLeft: '100px' }}>My submission</h2>
                    </a>
                    <a>
                        <h2 className="a" style={{ fontSize: '20px', fontWeight: "normal" }}>Contact</h2>
                    </a>
                </div>

                <div>
                    <Avatar/>
                </div>
            </header>

            <div className="line"></div>

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
