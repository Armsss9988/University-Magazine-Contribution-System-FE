import React, { useState, useEffect } from "react";
import "../screens/css/styles.css";
import { Link, useLocation } from "react-router-dom";
import LogoutButton from "./Logout";

function SidebarAdmin() {
    const [activeItem, setActiveItem] = useState('');
    const location = useLocation();

    // Xác định item được chọn dựa trên đường dẫn hiện tại
    useEffect(() => {
        setActiveItem(window.location.pathname);
    }, []);

    // Thiết lập active item khi component được render
    

    return (
        <div className="sidebar">
            <div className="logoname">
                <h2 style={{ fontSize: "20px", textAlign: "center" }}>FGW University Magazine Contribution</h2>
            </div>

            <div className="menuAdmin">
                <p className={activeItem === '/adminhome' ? 'active' : ''}>
                    <Link to="/adminhome">Home</Link>
                </p>
                <p className={activeItem === '/viewfaculty' ? 'active' : ''}>
                    <Link to="/viewfaculty">Faculty Management</Link>
                </p>
                <p className={activeItem === '/semester' ? 'active' : ''}>
                    <Link to="/semester">Semester Management</Link>
                </p>
                <p className={activeItem === '/listaccount' ? 'active' : ''}>
                    <Link to="/listaccount">Account Management</Link>
                </p>
            </div>

            <div>
                <LogoutButton />
            </div>
        </div>
    );
}

export default SidebarAdmin;
