import React from 'react';
import './Navbar.css';
//import logo from '../../../public/logo192.png'; // Adjust if incorrect

function Navbar() {
  return (
    <nav className="navbar">
      <div className="navbar-left">
        {/* <img src={logo} alt="Logo" className="logo" /> */}
        <span className="brand">Thudawa Child Development Center</span>
      </div>
      <ul className="navbar-center">
        <li><a href="#">Home</a></li>
       <li><a href="#Aboutus">About Us</a></li>
        <li><a href="#">Background</a></li>
        <li><a href="#">Behind Us</a></li>
        <li><a href="#">Achievements</a></li>
        <li><a href="#">Events</a></li>
      </ul>
      <ul className="navbar-right">
        <li><a href="#">Contact Us</a></li>
        <li><a href="#">Donate</a></li>
      </ul>
    </nav>
  );
}

export default Navbar;
