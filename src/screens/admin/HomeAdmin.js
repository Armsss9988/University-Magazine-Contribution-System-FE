import React, { useState, useEffect } from "react";
import Footer from "../../components/Footer";
import SidebarAdmin from "../../components/SidebarAdmin";

function HomeAdmin() {
    

    return (
        <div className="container">
            <SidebarAdmin/>

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

export default HomeAdmin