import React, { useState, useEffect } from "react";
import "../styles.css";
import Footer from "../../components/Footer";

function LoginScreen() {
    const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');

  const handleSubmit = (event) => {
    event.preventDefault(); // Ngăn chặn hành vi mặc định của form
    // Gửi dữ liệu username và password đến API hoặc xử lý đăng nhập
    alert(`Đăng nhập với username: ${username} và password: ${password}`);
  };


    return (
        <div className="container">
            <header>
                <div className="logoname">
                    <h2 style={{ fontSize: "20px" }}>FGW University Magazine Contribution</h2>

                </div>

                <div className="homebtn">
                    <a href="/" style={{color: "white", textDecoration: "none"}}>
                        Home
                    </a>

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
                        <input type="text" id="username" name="username" value={username} onChange={(e) => setUsername(e.target.value)}/>
                        <br />
                        <label htmlFor="password">Password</label>
                        <input type="password" id="password" name="password" value={password} onChange={(e) => setPassword(e.target.value)}/>
                        <text style={{fontSize:"12px"}}>Forgot password?</text>
                        <button className="loginbtn" type="submit">Login</button>
                    </form>
                </div>
            </div>

            <Footer/>
        </div>



    );
}

export default LoginScreen