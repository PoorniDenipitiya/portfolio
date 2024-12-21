import React from 'react';
import './contact.css'; // Make sure to create a CSS file for styling
import Animation from '../images/Animation.gif';
import {
  FaMailBulk,
  FaLinkedin,
  FaFacebook,
} from "react-icons/fa";

const Contact = () => {
  return (
    <div className="contact-container">
      <div className="left-part">
        <div className="animation">
          <h2>Get in Touch!</h2>
          <img src={Animation} alt="Animation" />
        </div>
      </div>
      <div className="right-part">
        <div className="social-links">
          <div className="social-item">
            <a
              href="https://www.facebook.com/profile.php?id=100085017612092&mibextid=ZbWKwL"
              target="_blank"
              rel="noopener noreferrer"
            >
              <FaFacebook />
              <span>Facebook</span>
            </a>
          </div>
          <div className="social-item">
            <a
              href="https://www.linkedin.com/in/poorni-denipitiya-4688b2286"
              target="_blank"
              rel="noopener noreferrer"
            >
              <FaLinkedin />
              <span>LinkedIn</span>
            </a>
          </div>
          <div className="social-item">
            <a
              href="mailto:uthpala9931@gmail.com"
              target="_blank"
              rel="noopener noreferrer"
            >
              <FaMailBulk />
              <span>Gmail</span>
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;
