import React, { useState, useEffect } from "react";
import "../screens/css/styles.css";
import Avatar from "./Avatar";
import { Link } from "react-router-dom"


function HeaderStudent() {


    const [activeTab, setActiveTab] = useState('/');

    const handleClick = (path) => {
        setActiveTab(path);
    };


    return (
        <header>
            <div className="logoname">
                <h2 style={{ fontSize: "20px" }}>FGW University Magazine Contribution</h2>

            </div>

            <div className="menu">
            <p >
                    <Link style={{
                        fontSize: '20px', fontWeight: "normal", textDecoration:'none', color: 'black'
                    }} to="/studenthome">Home</Link>
                </p>
                <p >
                    <Link style={{
                        fontSize: '20px', fontWeight: "normal", marginRight: '100px',
                        marginLeft: '100px', color: 'black', textDecoration:'none'
                    }} to="/listsubmission">My submission</Link>
                </p>
                
                
                
            </div>

            <div>
                <Avatar />
            </div>

        </header>
    );
}

export default HeaderStudent