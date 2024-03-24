import React, { useState, useEffect } from "react";
import "../screens/css/styles.css";
import { Link } from "react-router-dom";
import LogoutButton from "./Logout";

function HeaderStudent() {
    const [activeTab, setActiveTab] = useState('/');

    const handleClick = (path) => {
        setActiveTab(path);
    };

    // Cập nhật state activeTab khi đường dẫn thay đổi
    useEffect(() => {
        setActiveTab(window.location.pathname);
    }, []);

    return (
        <header>
            <div className="logoname">
                <h2 style={{ fontSize: "20px" }}>FGW University Magazine Contribution</h2>
            </div>

            <div className="menuStudent">
                <p>
                    <Link className={activeTab === '/studenthome' ? 'active' : ''} to="/studenthome" onClick={() => handleClick('/studenthome')}>Home</Link>
                </p>
                
                <p>
                    <Link className={activeTab === '/listsubmission' ? 'active' : ''} to="/listsubmission" onClick={() => handleClick('/listsubmission')}>My submission</Link>
                </p>
            </div>

            <div>
                <LogoutButton />
            </div>
        </header>
    );
}

export default HeaderStudent;
