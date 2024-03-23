import React, { useState, useEffect } from "react";
import "../screens/css/styles.css";
import Avatar from "./Avatar";
import { Link } from "react-router-dom"

function HeaderManger() {

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
        <header>
            <div className="logoname">
                <h2 style={{ fontSize: "20px" }}>FGW University Magazine Contribution</h2>

            </div>

            <div className="menu">
                <p>
                    <Link to="/managerhome">Home</Link>
                </p>
                
                <div className="dropdown">
                    <button onClick={toggleDropdown}>
                        {selectedValue || 'Select an option'}
                    </button>
                    {isOpen && (
                        <ul className="dropdown-content">
                            <p>
                                <Link to="/managermgzcomp">Magazine of COMP</Link>
                            </p>
                            <p>
                                <Link to="/managermgzbus">Magazine of BUS</Link>
                            </p>
                            <p>
                                <Link to="/managermgzgd">Magazine of GD</Link>
                            </p>                   
                        </ul>
                    )}
                </div>
                
                <div className="dropdown">
                    <button onClick={toggleDropdown}>
                        {selectedValue || 'Select an option'}
                    </button>
                    {isOpen && (
                        <ul className="dropdown-content">
                            <p>
                                <Link to="/numberofstudents">Number Of Students</Link>
                            </p>
                            <p>
                                <Link to="/numberofmgz">Number Of Magazine</Link>
                            </p>
                            <p>
                                <Link to="/percentageofmgz">Percen Of Magazine</Link>
                            </p>                   
                        </ul>
                    )}
                </div>
                <p>
                     <Link to="/newmagazine">New Magazine</Link>
                </p>  
            </div>
            <div>
                <Avatar />
            </div>
        </header>
    );
}
export default HeaderManger