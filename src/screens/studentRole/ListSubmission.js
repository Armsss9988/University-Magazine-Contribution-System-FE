import React, { useState, useEffect } from "react";
import "../styles.css";
import Avatar from "../../components/Avatar";
import Footer from "../../components/Footer";
import HeaderStudent from "../../components/HeaderStudent";

function ListSubmission() {
    const [isOpen, setIsOpen] = useState(false);
    const [selectedValue, setSelectedValue] = useState('option1');

    const toggleDropdown = () => {
        setIsOpen(!isOpen);
    };

    const handleSelect = (value) => {
        setSelectedValue(value);
        setIsOpen(false);
    };


    return (
        <div className="container">
            <HeaderStudent/>

            <div className="line"></div>

            <h1>List Submission</h1>
            <div className='main-content' style={{ padding: '20px' }}>
                
                <div className="box-list">

                    <div style={{ display: 'flex', flexDirection: 'column' }}>
                        <text style={{ marginLeft: '20px', fontWeight: 'bold' }}>Files</text>
                        <text style={{ marginLeft: '20px' }}>word1.docx</text>
                        <text style={{ marginLeft: '20px' }}>image1.png</text>
                    </div>

                    <div style={{ display: 'flex', flexDirection: 'column', textAlign: 'center' }}>
                        <text style={{ marginLeft: '20px', fontWeight: 'bold' }}>Status</text>
                        <text style={{ marginLeft: '20px' }}>đang duyệt</text>
                    </div>

                    <a href="/detailsubmission">
                        <button style={{ marginRight: '20px' }}>Detail</button>
                    </a>

                </div>
            </div>

            <div style={{ width: '100%', textAlign: 'center', margin: '10px' }}>
                <a href="/newsubmission">
                    <button style={{ textAlign: 'center' }}>
                        New submission
                    </button>
                </a>
            </div>

            <div className="line"></div>
            <Footer/>
        </div>



    );
}

export default ListSubmission