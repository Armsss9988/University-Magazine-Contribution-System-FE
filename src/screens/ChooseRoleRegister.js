import React, { useState, useEffect } from "react";
import "./HomeScreen.css";

function ChooseRoleRegister() {


    return (
        <div>
            <header>
                <div className="logoname">
                    <h2 style={{ fontSize: "20px" }}>FGW University Magazine Contribution</h2>

                </div>

                <div className="menu">
                <a href="/">
                        <h2 className="a" style={{ fontSize: '20px', marginRight: '100px', fontWeight: "normal" }}>Home</h2>
                    </a>
                    <h2 className="a" style={{ fontSize: '20px', fontWeight: "normal" }}>Contact</h2>
                </div>

                <div className="loginres">


                    <button className="btnRegister">
                        Login
                    </button>
                </div>
            </header>
            <div>
                <div>

                </div>
            </div>

            <div className="logincontainer">
                <div className="loginframe">
                    <h1>Register for</h1>
                    <form className="loginform">
                        <a href="/login">
                            <button className="loginbtn" >Student</button>
                        </a>
                        <a href="/login">
                            <button className="loginbtn">Guess</button>
                        </a>

                    </form>
                </div>
            </div>

            <footer style={{ backgroundColor: '#E7F4FD', padding: '10px' }}>
                <div style={{ textAlign: 'center' }}>
                    &copy; 2024 - FPT Greenwich University
                </div>
            </footer>
        </div>



    );
}

export default ChooseRoleRegister