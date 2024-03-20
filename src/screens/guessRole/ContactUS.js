import React, { useState, useEffect } from "react";
import "../css/styles.css";
import Footer from "../../components/Footer";
import HeaderGuess from "../../components/HeaderGuess";

function ContactUS() {
    const [formStatus, setFormStatus] = useState('Send');

  const onSubmit = (e) => {
    e.preventDefault();
    setFormStatus('Submitting...');

    const { name, email, message } = e.target.elements;
    const formData = {
      name: name.value,
      email: email.value,
      message: message.value,
    };

    console.log(formData); // Log form data (you can replace this with your desired action)
  };

    return (
        <div className="container">
            <HeaderGuess/>

            
            <div className="contact-us">
      <h2 className="t-contact">Contact Us</h2>
      <form onSubmit={onSubmit}>
        <div className="information">
            
          <label>
            Name:Nhom tui minh
          </label>
          <label>
            Email:Anhminhsadboy@gmail.com
          </label>
          <label>
            Hotline:1234578694 
            </label>
            <img className="contact-img"
                    src="https://theboutiqueadventurer.com/wp-content/uploads/2021/02/royal-obersvatory-london-views.jpg"
                    alt="Logo" />

        </div>
      </form>
    </div>
        
            
            <Footer/>
        </div>



    );
}

export default ContactUS