import React, { useState, useEffect } from "react";
import "../screens/css/styles.css";
import Avatar from "./Avatar";

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

    return (
        <header>
                <div className="logoname">
                    <h2 style={{ fontSize: "20px" }}>FGW University Magazine Contribution</h2>

                </div>

                <div className="menu">
                    <a href="/adminhome">
                        Home
                    </a>
                    <a href="/viewfaculty">
                        Faculty Manager
                    </a>
                    <a href="/semester">
                        Semester Manager
                    </a>
                    <a href="/listaccount">
                    Account management
                    </a>
                    
                    
                </div>

                <div>
                <Avatar />
            </div>

               


            </header>
    );
}

export default HeaderAdmin