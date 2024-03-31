import React from 'react';
import './Footer.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faFacebook, faTwitter, faInstagram, faLinkedin } from '@fortawesome/free-brands-svg-icons';
// import AboutUs from "./Components/AboutUs/AboutUs";

const Footer = () => {
  return (
    <footer className="footer">
      <div className="container">
        <div className="social-media">
          <a href="https://www.facebook.com"><FontAwesomeIcon icon={faFacebook} /></a>
          <a href="https://www.twitter.com"><FontAwesomeIcon icon={faTwitter} /></a>
          <a href="https://www.instagram.com"><FontAwesomeIcon icon={faInstagram} /></a>
          <a href="https://www.linkedin.com"><FontAwesomeIcon icon={faLinkedin} /></a>
        </div>
        <div className="links">
          <a href="/AboutUs">About Us</a>
          <a href="/feedback">Feedback</a>
        </div>
        <div className="contact-info">
          <p>Contact us: example@example.com</p>
          <p>Phone: +1234567890</p>
          <p>Address: 123 Main St, City, Country</p>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
