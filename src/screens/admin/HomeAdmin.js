import React, { useState, useEffect } from "react";
import Footer from "../../components/Footer";
import SidebarAdmin from "../../components/SidebarAdmin";

function HomeAdmin() {
    const [textToShow, setTextToShow] = useState('');

    useEffect(() => {
        const text = "Welcome to the admin role";
        let currentIndex = 0;

        const interval = setInterval(() => {
            if (currentIndex <= text.length) {
                setTextToShow(text.substring(0, currentIndex));
                currentIndex++;
            } else {
                clearInterval(interval);
            }
        }, 100); // Điều chỉnh tốc độ hiển thị ở đây

        return () => clearInterval(interval);
    }, []);

    return (
        <div className="container">
            <SidebarAdmin />
            <div className="content">
                <div className="background">
                    <span>{textToShow}</span>
                </div>
            </div>
        </div>
    );
}

export default HomeAdmin;
