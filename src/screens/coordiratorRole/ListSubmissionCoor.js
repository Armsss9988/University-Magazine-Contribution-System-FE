import React, { useState, useEffect } from "react";
import "../styles.css";
import Footer from "../../components/Footer";
import HeaderStudent from "../../components/HeaderStudent";

function ListSubmissionCoor() {
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
                        <text style={{ marginLeft: '20px', fontWeight: 'bold' }}>Le Anh Minh</text>
                        <text style={{ marginLeft: '20px' }}>9:30AM | 07/03/2024</text>
                    </div>

                    <div style={{ display: 'flex', flexDirection: 'column', textAlign: 'center' }}>
                        <text style={{ marginLeft: '20px', fontWeight: 'bold' }}>Files</text>
                        <text style={{ marginLeft: '20px' }}>2 files submited</text>
                    </div>

                    <a href="/detailsubmission">
                        <button style={{ marginRight: '20px' }}>Detail</button>
                    </a>

                </div>
            </div>


            <div className="line"></div>
            <Footer/>
        </div>



    );
}

export default ListSubmissionCoor