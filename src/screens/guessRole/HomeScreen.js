import React, { useState, useEffect } from "react";
import Footer from '../../components/Footer';
import HeaderGuess from "../../components/HeaderGuess";

function HomeScreen() {
    const [textToShow, setTextToShow] = useState('');

    useEffect(() => {
        const text = "Welcome to FGW University Magazine Contribution";
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
            <HeaderGuess/>

            <div className="main-content" style={{
                backgroundImage:
                    `url("https://cms.greenwich.edu.vn/pluginfile.php/1/theme_adaptable/p1/1698976651/socialbg.png")`,
                backgroundSize: '100% auto', display: 'flex', justifyContent: 'center', alignItems: 'center'
            }}>
                <span style={{ color: 'white', fontSize: '54px' }}>{textToShow}</span>
            </div>

            <Footer/>
        </div>
    );
}

export default HomeScreen;





