import React, { useState, useEffect } from "react";
import "../screens/css/styles.css";
import { Link } from "react-router-dom"
import LogoutButton from "./Logout";


function HeaderAdmin() {

   

   
    return (
        <header>
            <div className="logoname">
                <h2 style={{ fontSize: "20px" }}>FGW University Magazine Contribution</h2>

            </div>

            <div className="menuAdmin">
                <p>
                    <Link to="/adminhome">Home</Link>
                </p>
                <p>
                    <Link to="/viewfaculty">Faculty Manager</Link>
                </p>
                <p >
                    <Link to="/semester">Semester Manager</Link>
                </p>
                <p>
                    <Link to="/listaccount">Account management</Link>
                </p>
                


            </div>

            <div>
                <LogoutButton />

            </div>




        </header>
    );
}

export default HeaderAdmin