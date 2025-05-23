import React from 'react';
import { Link, NavLink } from 'react-router-dom';
import './Navbar.css';
//import logo from '../../../public/logo192.png'; // Adjust if incorrect

function Navbar() {
  return (
    <nav className="navbar">
      <div className="navbar-left">
        {/* <img src={logo} alt="Logo" className="logo" /> */}
        <Link to="/" className="brand">Thudawa Child Development Center</Link>
      </div>
      <ul className="navbar-center">
        <li><NavLink to="/" className={({ isActive }) => isActive ? 'active' : ''}>Home</NavLink></li>
        <li><NavLink to="/about" className={({ isActive }) => isActive ? 'active' : ''}>About Us</NavLink></li>
        <li><NavLink to="/background" className={({ isActive }) => isActive ? 'active' : ''}>Background</NavLink></li>
        <li><NavLink to="/behind-us" className={({ isActive }) => isActive ? 'active' : ''}>Behind Us</NavLink></li>
        <li><NavLink to="/achievements" className={({ isActive }) => isActive ? 'active' : ''}>Achievements</NavLink></li>
        <li><NavLink to="/events" className={({ isActive }) => isActive ? 'active' : ''}>Events</NavLink></li>
      </ul>
      <ul className="navbar-right">
        <li><NavLink to="/contact" className={({ isActive }) => isActive ? 'active' : ''}>Contact Us</NavLink></li>
        <li><NavLink to="/donate" className={({ isActive }) => isActive ? 'active' : ''}>Donate</NavLink></li>
      </ul>
    </nav>
  );
}

export default Navbar;