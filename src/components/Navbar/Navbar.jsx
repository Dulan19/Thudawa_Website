import React from 'react';
import { NavLink } from 'react-router-dom';
import './Navbar.css';
//import logo from '../../../public/logo192.png'; // Adjust if incorrect

function Navbar() {
  return (
    <nav className="navbar">
      <div class="navbar-left">
          {/* <img src="your-logo.png" class="logo" alt="Logo"> */}
              <div class="brand">
                  <span class="brand-line1">Thudawa Child</span>
                  <span class="brand-line2">Development Center</span>
              </div>
      </div>  

      <ul className="navbar-center">
        <li><NavLink to="/" className={({ isActive }) => isActive ? 'active' : ''}>Home</NavLink></li>
        <li><NavLink to="/Aboutus" className={({ isActive }) => isActive ? 'active' : ''}>About Us</NavLink></li>
        <li><NavLink to="/Background" className={({ isActive }) => isActive ? 'active' : ''}>Background</NavLink></li>
        <li><NavLink to="/Behindus" className={({ isActive }) => isActive ? 'active' : ''}>Behind Us</NavLink></li>
        <li><NavLink to="/Achievements" className={({ isActive }) => isActive ? 'active' : ''}>Achievements</NavLink></li>
        <li><NavLink to="/Events" className={({ isActive }) => isActive ? 'active' : ''}>Events</NavLink></li>
      </ul>
      <ul className="navbar-right">
        <li><NavLink to="/Contactus" className={({ isActive }) => isActive ? 'active' : ''}>Contact Us</NavLink></li>
        <li><NavLink to="/Donateus" className={({ isActive }) => isActive ? 'active' : ''}>Donate</NavLink></li>
      </ul>
    </nav>
  );
}

export default Navbar;