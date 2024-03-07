import React, { useState, useEffect } from "react";
import "../styles.css";
import Footer from "../../components/Footer";
import HeaderStudent from "../../components/HeaderStudent";

function EditSubmission() {


    return (
        <div className="container">
            <HeaderStudent/>

            <div className="line"></div>
            <h1>List Submission</h1>
            <div className="main-content" style={{padding:'80px', display:'flex', justifyContent:'center', alignItems:'center', flexDirection:'column'}}>
            
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