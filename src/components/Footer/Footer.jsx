import React from 'react';
import './footer.css';
import { FaFacebook, FaTwitter, FaInstagram } from 'react-icons/fa'

function Footer() {
  return (
    <div className="footer">
      <h1 className="footer-title">Footer</h1>
      <div className="social-buttons">
        <button className="social-button">
          <FaFacebook className="icon" />
          Facebook
        </button>
        <button className="social-button">
          <FaTwitter className="icon" />
          Twitter
        </button>
        <button className="social-button">
          <FaInstagram className="icon" />
          Instagram
        </button>
      </div>
    </div>
  );
}

export default Footer;
