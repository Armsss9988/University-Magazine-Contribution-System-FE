import React, { useState, useEffect } from "react";
import "../screens/css/styles.css";
import { Link } from "react-router-dom"
import Avatar from "./Avatar";
import { CookiesProvider, useCookies } from 'react-cookie';
import Logout from "./Logout";
import A from "./Logout";


function HeaderAdmin() {

    //Student
    const [isOpenStudent, setIsOpenStudent] = useState(false);
    const [selectedValueStudent, setSelectedValueStudent] = useState('Student Account');

    const toggleDropdownStudent = () => {
        setIsOpenStudent(!isOpenStudent);
    };

    const handleSelectStudent = (value) => {
        selectedValueStudent(value);
        setIsOpenStudent(false);
    };

    //Manager
    const [isOpenManager, setIsOpenManager] = useState(false);
    const [selectedValueManager, setSelectedValueManager] = useState('Manager Account');

    const toggleDropdownManager = () => {
        setIsOpenManager(!isOpenManager);
    };

    const handleSelectManager = (value) => {
        selectedValueManager(value);
        setIsOpenManager(false);
    };

    //Coordinator
    const [isOpenCoordinator, setIsOpenCoordinator] = useState(false);
    const [selectedValueCoordinator, setSelectedValueCoordinator] = useState('Coordinator Account');

    const toggleDropdownCoordinator = () => {
        setIsOpenCoordinator(!isOpenCoordinator);
    };

    const handleSelectCoordinator = (value) => {
        selectedValueCoordinator(value);
        setIsOpenCoordinator(false);
    };
    const [isActive, setIsActive] = useState(false);

    const handleClick = () => {
        setIsActive(true);
    };

    const logout = () => {
        cookies.removeItem('token'); // Remove the token from local storage
        // Optionally remove other user data
        window.location.href = '/login'; // Redirect to the login page
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
      <A/>

            </div>




        </header>
    );
}

export default HeaderAdmin