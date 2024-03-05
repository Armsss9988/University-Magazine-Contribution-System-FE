import React, { useState, useEffect } from "react";
import "./styles.css";
import Footer from "../components/Footer";

function HomeScreen() {
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
        <div className="container">
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
                                <a className="drlist-item" href="/magazinecomp">
                                    Magazine of COMP
                                </a>
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

            <div className="line"></div>

            <div>
                <img className="blogimg"
                    src="https://cms.greenwich.edu.vn/pluginfile.php/1/theme_adaptable/p1/1698976651/socialbg.png"
                    alt="Logo" />
            </div>
            <div className="line"></div>
            <Footer/>
        </div>



    );
}

export default HomeScreen