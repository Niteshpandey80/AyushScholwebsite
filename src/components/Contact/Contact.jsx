import React from 'react';
import './Contact.css';
import { FaInstagram } from "react-icons/fa";
import { FaFacebook } from "react-icons/fa";

const Contact = () => {
  return (
    <div className="contact-page" id="contact">
      <h1>Contact Information</h1>
      <div className="contact-container">
        <div className="info-box">
          <h2>School Name</h2>
          <p>Maa Sharda Shishu Mandir Barhi</p>

          <h2>Medium</h2>
          <p>Hindi</p>

          <h2>Class</h2>
          <p>KG1 to 8th with Primary</p>

          <h2>Location</h2>
          <p>Ward No. 8, Bahri, District: Katni, Madhya Pradesh</p>
          <p>Pincode: 483770</p>

          <h2>Contact</h2>
          <p>Mobile: <a href="tel:+918359871057">+91 83598 71057</a></p>
          <p>Email: <a href="mailto:rambhajanrajpallallu@gmail.com">rambhajanrajpallallu@gmail.com</a></p>

          <h2>Follow Us</h2>
          <p>
            <a
            href="https://www.instagram.com/mssb_483770?igsh=cnJhNDlzcTFscnQw"
                target="_blank"
                rel="noopener noreferrer"
                style={{ display: 'flex', alignItems: 'center', gap: '8px' }}
                        >
              <FaInstagram />
               Instagram
                   </a>
                     <a
            href="https://www.facebook.com/share/1BLTFf6nYC/"
                target="_blank"
                rel="noopener noreferrer"
                style={{ display: 'flex', alignItems: 'center', gap: '8px' , marginTop:'15px' }}
                        >
              <FaFacebook />
               Facebook
                   </a>
          </p>
        </div>
      </div>
    </div>
  );
};

export default Contact;
