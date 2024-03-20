import React, { useState, useEffect } from "react";
import Footer from "../components/Footer";
import HeaderGuess from "../components/HeaderGuess";
import { userAPI } from "../api/api";
function LoginScreen() {
    const [formData, setFormData] = useState({
        email: "",
        password: "",
    });
    //const [users,setUsers] = useState(null);
    //const[roles, setRoles] = useState('');
    const [name, setName] = useState("");
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
            // window.location.href = "/";
           
            // console.log("API Response:", response.data);
            // console.log("Role: ", response.data.role);
           
            console.log("API Response:", response.data);
            console.log(formData.email, formData.password);

        } catch (error) {
            // Handle API error
            setSuccess(false);
            setError("Login failed");
            window.alert('Login failed. Please check your username and password.');
            console.error("API Error:", error);

        }
    };

    const profileUser = async () => {
        try {
            const response = await userAPI.profileUser({
            });
            //setUsers(response.data.user);
            //setRoles(response.data.user['role'])
            const users = response.data.user;
            const roles = response.data.user['role'];



            // Process the API response
            setSuccess(true);
            setError(null);
            //window.location.href = "/studenthome";
            if ( roles === 'coordinator') {
                window.location.href = '/coordiratorhome';
              } else if (roles === 'admin') {
                window.location.href = '/adminhome';
              }else if (roles === 'student') {
                window.location.href = '/studenthome';
              }else if (roles === 'manager') {
                window.location.href = '/managerhome';
              }
            // console.log("API Response:", response.data);
            // console.log("Role: ", response.data.role);
            console.log("User info: ", users);
            console.log("Role: ", roles);

        } catch (error) {
            // Handle API error
            setSuccess(false);
            setError("Login failed");
            window.alert('Profile failed');
            console.error("API Error:", error);
        }
    };



    const handleSubmit = async (event) => {
        event.preventDefault(); // Ngăn chặn hành vi mặc định của form
        // Gửi dữ liệu username và password đến API hoặc xử lý đăng nhập
         await loginUser();
         await profileUser();
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