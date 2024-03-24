import React, { useState } from "react";
import "../screens/css/styles.css";
import { Link, useLocation } from "react-router-dom";
import LogoutButton from "./Logout";

function HeaderAdmin() {
    const [activeItem, setActiveItem] = useState('');
    const location = useLocation();

    // Xác định item được chọn dựa trên đường dẫn hiện tại
    const getCurrentItem = () => {
        const pathname = location.pathname;
        switch (pathname) {
            case '/adminhome':
                return 'Home';
            case '/viewfaculty':
                return 'Faculty Manager';
            case '/semester':
                return 'Semester Manager';
            case '/listaccount':
                return 'Account Management';
            default:
                return '';
        }
    };

    // Thiết lập active item khi component được render
    useState(() => {
        const currentItem = getCurrentItem();
        setActiveItem(currentItem);
    }, [location.pathname]); // Khi đường dẫn thay đổi, cập nhật lại active item

    return (
        <div className="sidebar">
            <div className="logoname">
                <h2 style={{ fontSize: "20px", textAlign: "center" }}>FGW University Magazine Contribution</h2>
            </div>

            <div className="menuAdmin">
                <p className={activeItem === 'Home' ? 'active' : ''}>
                    <Link to="/adminhome">Home</Link>
                </p>
                <p className={activeItem === 'Faculty Manager' ? 'active' : ''}>
                    <Link to="/viewfaculty">Faculty Manager</Link>
                </p>
                <p className={activeItem === 'Semester Manager' ? 'active' : ''}>
                    <Link to="/semester">Semester Manager</Link>
                </p>
                <p className={activeItem === 'Account Management' ? 'active' : ''}>
                    <Link to="/listaccount">Account Management</Link>
                </p>
            </div>

            <div>
                <LogoutButton />
            </div>
        </div>
    );
}

export default HeaderAdmin;
