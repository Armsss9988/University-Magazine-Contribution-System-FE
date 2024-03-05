import React, { useState, useEffect } from "react";
import "./styles.css";
import Footer from "../components/Footer";

function EditSubmission() {


    return (
        <div className="container">
            <header>
                <div className="logoname">
                    <h2 style={{ fontSize: "20px" }}>FGW University Magazine Contribution</h2>

                </div>

                <div className="menu">
                    <a >
                    <h2 className="a" style={{ fontSize: '20px', fontWeight: "normal" }}>Home</h2>
                    </a>
                    <a>
                    <h2 className="a" style={{ fontSize: '20px', fontWeight: "normal", marginRight: '100px', marginLeft:'100px' }}>My submission</h2>
                    </a>
                    <a>
                    <h2 className="a" style={{ fontSize: '20px', fontWeight: "normal" }}>Contact</h2>
                    </a>
                </div>

                <div className="loginres">
                    <a href="/login">
                        <button className="btnLogin">
                            Login
                            
                        </button>
                    </a>

                    
                    
                </div>
            </header>

            <div className="line"></div>
            <div className="main-content" style={{padding:'80px', display:'flex', justifyContent:'center', alignItems:'center'}}>
                <div className="box-list-edit">

                    <div style={{display:'flex', flexDirection:'column'}}>
                    
                    </div>

                    <div style={{display:'flex', flexDirection:'column', textAlign:'center'}}>
                    
                    </div>
                    
                    <div style={{display:'flex', flexDirection:'column', textAlign:'center'}}>
                    <a href="/detailsubmission">
                    <button style={{marginRight:'20px'}}>Add new file</button>
                    </a>
                    <a href="/detailsubmission">
                    <button style={{marginRight:'20px'}}>Delete all</button>
                    </a>
                    </div>
                    
                    
                </div>
            </div>

            <div style={{ width:'100%', textAlign:'center', margin:'10px'}}>
            <a >
                <button style={{ textAlign:'center'}}>
                Save
                </button>
            </a>
            </div>

            <div className="line"></div>
            <Footer/>
        </div>



    );
}

export default EditSubmission