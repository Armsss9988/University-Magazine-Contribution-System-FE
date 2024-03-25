import React, { useState, useEffect } from "react";
import Footer from "../../components/Footer";
import SidebarAdmin from "../../components/SidebarAdmin";

function HomeAdmin() {
    return (
        <div className="container">
            <SidebarAdmin />
            <div className="content">
                <div className="background">
                    <text>Welcome to the admin role</text>
                </div>
            </div>
        </div>
    );
}

export default HomeAdmin;
