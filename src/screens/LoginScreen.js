import React, { useState, useEffect } from "react";
import "./styles.css";
import Footer from "../components/Footer";
import HeaderGuess from "../components/HeaderGuess";
import { userAPI } from "../api/api";
function LoginScreen() {
    const [formData, setFormData] = useState({
        email: "",
        password: "",
    });
    const [error, setError] = useState(null);
    const [success, setSuccess] = useState(false);

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData({
            ...formData,
            [name]: value,
        });
    };

    const loginUser = async () => {
        try {
            const response = await userAPI.loginUser({
                email: formData.email,
                password: formData.password,
            });

            // Process the API response
            setSuccess(true);
            setError(null);
            console.log("API Response:", response.data);
        } catch (error) {
            // Handle API error
            setSuccess(false);
            setError("Login failed");
            console.error("API Error:", error);
        }
    };
    const handleSubmit = (event) => {
        event.preventDefault(); // Ngăn chặn hành vi mặc định của form
        // Gửi dữ liệu username và password đến API hoặc xử lý đăng nhập
        alert(`Đăng nhập với username: ${formData.email} và password: ${formData.password}`);
        loginUser();

    };




    return (
        <div className="container">
            <HeaderGuess />
            <div>
                <div>

                </div>
            </div>

            <div className="logincontainer" style={{ flex: '1 1 auto' }}>
                <div className="loginframe">
                    <h1>Login</h1>
                    <form className="loginform" onSubmit={handleSubmit}>
                        <label htmlFor="email">Username</label>
                        <input
                            type="email"
                            id="email"
                            name="email" 
                            value={formData.username} 
                            onChange={handleChange}
                            required />
                        <br />
                        <label htmlFor="password">Password</label>
                            <input 
                            type="password" 
                            id="password" 
                            name="password" 
                            value={formData.password} 
                            onChange={handleChange}
                            required />
                        <text style={{ fontSize: "12px" }}>Forgot password?</text>
                        <button className="loginbtn" type="submit">Login</button>
                    </form>
                </div>
            </div>

            <Footer />
        </div>



    );
}

export default LoginScreen