import React, { useState, useEffect } from "react";
import "../screens/css/styles.css";
import Avatar from "./Avatar";

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
                <a href="/" style={{textDecoration:'none'}}  >
                    <h2 className="a" style={{
                        fontSize: '20px', fontWeight: "normal",
                    }}>Home</h2>
                </a>
                <a href="/listsubmission" style={{ textDecoration: "none" }} >
                    <h2 className="a" style={{
                        fontSize: '20px', fontWeight: "normal", marginRight: '100px',
                        marginLeft: '100px', color: 'black'
                    }}>My submission</h2>
                </a>
                
            </div>

            <div>
                <Avatar />
            </div>

        </header>
    );
}

export default HeaderStudent