import React, { useState, useEffect } from "react";
import "./HomeScreen.css";

function LoginScreen() {


    return (
        <div>
            <header>
                <div className="logoname">
                    <img className="logoimg" src="https://cdn.haitrieu.com/wp-content/uploads/2022/12/Icon-Truong-Dai-hoc-Greenwich-Viet-Nam.png" alt="Logo" />
                    <h2 style={{ fontSize: "20px" }}>FGW University Magazine Contribution</h2>

                </div>

                <div className="menu">
                    <a href="/">
                        <h2 className="a" style={{ fontSize: '20px', marginRight: '100px', fontWeight: "normal" }}>Home</h2>
                    </a>

                    <h2 className="a" style={{ fontSize: '20px', fontWeight: "normal" }}>Contact</h2>
                </div>

                <div className="loginres">
                    <h1>Hello, name!</h1>
                </div>
            </header>
            <div>
                <div>

                </div>
            </div>

            <div className="logincontainer">
                <div className="loginframe">
                    <h1>Login</h1>
                    <form className="loginform">
                        <label htmlFor="username">Username</label>
                        <input type="text" id="username" name="username" />
                        <br />
                        <label htmlFor="password">Password</label>
                        <input type="password" id="password" name="password" />
                        <br />
                        <button className="loginbtn" type="submit">Login</button>
                    </form>
                </div>
            </div>

            <footer style={{ backgroundColor: '#E7F4FD', padding: '20px', position: 'absolute', width: '100%' }}>
                <div style={{ textAlign: 'center' }}>
                    &copy; 2024 - FPT Greenwich University
                </div>
            </footer>
        </div>



    );
}

export default LoginScreen