import React, { useState, useEffect } from "react";
import "../styles.css";
import Avatar from "../../components/Avatar";
import HeaderStudent from '../../components/HeaderStudent';
import Footer from '../../components/Footer';

function StudentHome() {

   

    return (
        <div className="container">
            <HeaderStudent/>

            <div className="line"></div>

            {/* <div className='main-content' style={{padding:'20px'}}>
                <div className="box-list-course">
                    <text style={{marginLeft:'20px'}}>Tạp chí chuyên ngành</text>
                    <a href="/listsubmission">
                    <button style={{marginRight:'20px'}}>Open</button>
                    </a>
                    
                </div>
            </div> */}
            <div className="main-content" style={{
                backgroundImage:
                    `url("https://cms.greenwich.edu.vn/pluginfile.php/1/theme_adaptable/p2/1698976651/BLOG-technology-in-higher-education%401X.jpg")`,
                backgroundSize: '100% auto', display: 'flex', justifyContent: 'center', alignItems: 'center'
            }}>
                <text style={{ color: 'white', fontSize: '54px' }}>Welcome to COMP's University Magazine</text>

            </div>

            <div className="line"></div>
            
            <Footer/>
        </div>



    );
}

export default StudentHome