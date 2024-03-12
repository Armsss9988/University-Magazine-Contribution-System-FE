import React, { useState, useEffect } from "react";
import Footer from "../components/Footer";
import HeaderGuess from "../components/HeaderGuess";
import { userAPI } from "../api/api";

function HomeScreen() {

    // const [formData, setFormData] = useState({
        
    // });
    // const [error, setError] = useState(null);
    // const [success, setSuccess] = useState(false);

    
    

    

    // const handleSubmit = (event) => {
    //     event.preventDefault(); // Ngăn chặn hành vi mặc định của form
    //     // Gửi dữ liệu username và password đến API hoặc xử lý đăng nhập
    //     profileUser();
    // };

    

    return (
        <div className="container">
            <HeaderGuess/>

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