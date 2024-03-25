import React, { useState, useEffect } from "react";
import "../screens/css/styles.css";
import { Link, useLocation } from "react-router-dom";
import LogoutButton from "./Logout";

function HeaderGuess() {
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
                <Link to="/" className={location.pathname === '/' ? 'active' : ''}>Home</Link>
                {/* Sử dụng className={location.pathname === '/contact' ? 'active' : ''} để chỉ kích hoạt trạng thái active cho Contact */}
                <Link to="/contact" className={location.pathname === '/contact' ? 'active' : ''}>Contact</Link>
                
                <div className="dropdown">
                    <button onClick={toggleDropdown}>
                        {selectedValue || 'Select an option'}
                    </button>
                    {isOpen && (
                        <ul className="dropdown-content">
                            <p className="drlist-item" >
                                <Link to="/magazinecomp">Magazine of COMP</Link>
                            </p>
                            <p className="drlist-item" >
                                <Link to="/magazinebus">Magazine of BUS</Link>
                            </p>
                            <p className="drlist-item" >
                                <Link to="/magazinegd">Magazine of GD</Link>
                            </p>
                            
                        </ul>
                    )}
                </div>

                
            </div>

            <div className="loginres">
                <Link to="/login">
                    <button className="btnLogin">Login</button>
                </Link>
            </div>
        </header>
    );
}

export default HeaderGuess;
