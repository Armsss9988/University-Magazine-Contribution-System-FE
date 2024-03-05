import React, { useState, useEffect } from "react";
import "../screens/styles.css";

function Avatar() {


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
        <div className="avatar">
                    <img src={require('../images/ava.png')} alt="Avatar" style={{ width: '50px', height: '50px' }} onClick={toggleDropdown} />
                    {isOpen && (
                        <ul className="dropdown-content-ava">
                            <a className="drlist-item-ava" href="/profilestudent">
                                Profile
                            </a>
                            <a className="drlist-item-ava" href="/magazinebus">
                                Log out
                            </a>
                        </ul>
                    )}
                </div>
    );
}

export default Avatar