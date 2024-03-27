import React, { useState, useEffect } from "react";
import "../screens/css/styles.css";
import { Link, useLocation } from "react-router-dom"
import LogoutButton from "./Logout";

function HeaderManger() {

    const [isOpen, setIsOpen] = useState(false);
    const [selectedValue, setSelectedValue] = useState('Magazine');

    const location = useLocation(); // Sử dụng hook useLocation để lấy đường dẫn hiện tại

    const toggleDropdown = () => {
        setIsOpen(!isOpen);
    };

    const handleSelect = (value) => {
        setSelectedValue(value);
        setIsOpen(false);
    };


    return (
        <header>
            <div className="logoname">
                <h2 style={{ fontSize: "20px" }}>FGW University Magazine Contribution</h2>
            </div>

            <div className="menuGuess">
                {/* Sử dụng className={location.pathname === '/home' ? 'active' : ''} để chỉ kích hoạt trạng thái active cho Home */}
                <Link to="/managerhome" className={location.pathname === '/managerhome' ? 'active' : ''}>Home</Link>
                {/* Sử dụng className={location.pathname === '/contact' ? 'active' : ''} để chỉ kích hoạt trạng thái active cho Contact */}
                <Link to="/newmagazine" className={location.pathname === '/newmagazine' ? 'active' : ''}>New Magazine</Link>

                <div className="dropdown">
                    <button onClick={toggleDropdown}>
                        {selectedValue || 'Select an option'}
                    </button>
                    {isOpen && (
                        <ul className="dropdown-content">
                            <p className="drlist-item" >
                                <Link to="/numberofstudents">Magazine of COMP</Link>
                            </p>
                            <p className="drlist-item" >
                                <Link to="/percentageofmgz">Magazine of BUS</Link>
                            </p>
                            <p className="drlist-item" >
                                <Link to="/numberofmgz">Magazine of GD</Link>
                            </p>

                        </ul>
                    )}
                </div>


            </div>

            <div>
                <LogoutButton />
            </div>
        </header>
    );
}
export default HeaderManger