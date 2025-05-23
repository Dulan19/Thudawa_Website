import React from 'react';
import './Footer.css'; 
import { NavLink } from 'react-router-dom';

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="footer">
      <div className="footer-container">
        <div className="footer-section about-section">
          <h3>About Us</h3>
          <p>Thudawa Children Development Center is dedicated to nurturing and empowering children through education and care.</p>
        </div>
        
        <div className="footer-section links-section">
          <h3>Quick Links</h3>
          <div className="footer-links-grid">
            <ul className="footer-links-column">
              <li><NavLink to="/" className={({ isActive }) => isActive ? 'active' : ''}>Home</NavLink></li>
              <li><NavLink to="/Aboutus" className={({ isActive }) => isActive ? 'active' : ''}>About Us</NavLink></li>
              <li><NavLink to="/Background" className={({ isActive }) => isActive ? 'active' : ''}>Background</NavLink></li>
            </ul>
            <ul className="footer-links-column">
              <li><NavLink to="/Behindus" className={({ isActive }) => isActive ? 'active' : ''}>Behind Us</NavLink></li>
              <li><NavLink to="/Achievements" className={({ isActive }) => isActive ? 'active' : ''}>Achievements</NavLink></li>
              <li><NavLink to="/Events" className={({ isActive }) => isActive ? 'active' : ''}>Events</NavLink></li>
            </ul>
            <ul className="footer-links-column">
              <li><NavLink to="/Contactus" className={({ isActive }) => isActive ? 'active' : ''}>Contact Us</NavLink></li>
              <li><NavLink to="/Donateus" className={({ isActive }) => isActive ? 'active' : ''}>Donate</NavLink></li>
            </ul>
          </div>
        </div>
        
        <div className="footer-section contact-section">
          <h3>Contact Info</h3>
          <ul className="contact-info">
            <li>154, Central Road, Wadduwa</li>
            <li>Email: thudwahome@gmail.com</li>
            <li>Phone: (+94) 38-2296222</li>
          </ul>
        </div>
      </div>
      
      <div className="footer-bottom">
        <p>&copy; {currentYear} Thudawa Childern Development Center. All rights reserved.</p>
      </div>
    </footer>
  );
};

export default Footer;