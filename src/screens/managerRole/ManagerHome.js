import React, { useState, useEffect } from "react";
import '../css/styles.css';
import Footer from "../../components/Footer";
import HeaderManger from "../../components/HeaderManger";
function ManagerHome() {
    

    return (
        <div className="container">
            <HeaderManger/>

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

export default ManagerHome