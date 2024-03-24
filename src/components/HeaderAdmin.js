import React, { useState, useEffect } from "react";
import "../screens/css/styles.css";
import { Link } from "react-router-dom"
import LogoutButton from "./Logout";


function HeaderAdmin() {

    

    const [isOpen, setIsOpen] = useState(false);
    const [selectedValue, setSelectedValue] = useState('option1');

    const toggleDropdown = () => {
        setIsOpen(!isOpen);
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
                <p>
                    <Link to="/adminhome">Home</Link>
                </p>
                <p>
                    <Link to="/viewfaculty">Faculty Manager</Link>
                </p>
                <p onClick={handleClick} className={isActive ? 'active' : ''}>
                    <Link to="/semester">Semester Manager</Link>
                </p>
                <p>
                    <Link to="/listaccount">Account management</Link>
                </p>
                


            </div>

            <div>
                <LogoutButton />

            </div>




        </header>
    );
}

export default HeaderAdmin