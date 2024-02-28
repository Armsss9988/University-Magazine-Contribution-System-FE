import React, { useState, useEffect } from "react";
import "./HomeScreen.css";
import { Link } from "react-router-dom";

function HomeScreen() {


    return (
        <div>
            <header>
                <div className="logoname">
                    <h2 style={{ fontSize: "20px" }}>FGW University Magazine Contribution</h2>

                </div>

                <div className="menu">
                    <h2 className="a" style={{ fontSize: '20px', marginRight: '100px', fontWeight: "normal" }}>Home</h2>
                    <h2 className="a" style={{ fontSize: '20px', fontWeight: "normal" }}>Contact</h2>
                </div>

                <div className="loginres">
                    <a href="/chooserolelogin">
                        <button className="btnLogin">
                            Login

                        </button>
                    </a>

                    <a href="/chooseroleregister">
                    <button className="btnRegister">
                        Register
                    </button>
                    </a>
                    
                </div>
            </header>

            <div className="line"></div>
            <div>
                <img className="blogimg" 
                src="https://cms.greenwich.edu.vn/pluginfile.php/1/theme_adaptable/p2/1698976651/BLOG-technology-in-higher-education%401X.jpg" 
                alt="Logo"/>   
            </div>
            <div className="line"></div>
            <footer style={{ backgroundColor: '#E7F4FD', padding: '20px', position:'absolute', width: '100%' }}>
                <div style={{ textAlign: 'center' }}>
                    &copy; 2024 - FPT Greenwich University
                </div>
            </footer>
        </div>



    );
}

export default HomeScreen