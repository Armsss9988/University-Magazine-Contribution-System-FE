import React, { useState, useEffect } from "react";
import "../screens/css/styles.css";
import { Link } from "react-router-dom"

import Avatar from "./Avatar";

function HeaderGuess() {


    const [isOpen, setIsOpen] = useState(false);
    const [selectedValue, setSelectedValue] = useState('option1');

    const toggleDropdown = () => {
        setIsOpen(!isOpen);
    };

    const handleSelect = (value) => {
        setSelectedValue(value);
        setIsOpen(false);
    };
    const [isActive, setIsActive] = useState(false);

    const handleClick = () => {
      setIsActive(true);
    };

    return (
        <header>
            <div className="logoname">
                <h2 style={{ fontSize: "20px" }}>FGW University Magazine Contribution</h2>

            </div>

            <div className="menu">
                <a href="/">
                    Home
                </a>
                <div className="dropdown">
                    <button onClick={toggleDropdown}>
                        {selectedValue || 'Select an option'}
                    </button>
                    {isOpen && (
                        <ul className="dropdown-content">
                            <p>
                                <Link to="/magazinecomp">Your desired link.</Link>
                            </p>
                            <a className="drlist-item" href="/magazinebus">
                                Magazine of BUS
                            </a>
                            <a className="drlist-item" href="/magazinegd">
                                Magazine of GD
                            </a>
                        </ul>
                    )}
                </div>
                <a href="/contact">
                    Contact
                </a>
            </div>

            <div className="loginres">
                <a href="/login">
                    <button className="btnLogin">
                        Login

                    </button>
                </a>



            </div>
        </header>
    );
}

export default HeaderGuess