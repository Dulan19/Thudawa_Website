import React, { useState } from "react";
import { NavLink } from "react-router-dom";
import "./Navbar.css";

function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);

  const toggleMenu = () => setMenuOpen(!menuOpen);

  return (
    <nav className="navbar">
      {/* Left side */}
      <div className="navbar-left">
        {/* <img src="your-logo.png" className="logo" alt="Logo" /> */}
        <div className="brand">
          <span className="brand-line1">Tudawe Child</span>
          <span className="brand-line2">Development Center</span>
        </div>
      </div>

      {/* Desktop nav */}
      <ul className="navbar-center desktop-only">
        <li>
          <NavLink to="/" className={({ isActive }) => (isActive ? "active" : "")}>
            Home
          </NavLink>
        </li>
        <li>
          <NavLink to="/Aboutus" className={({ isActive }) => (isActive ? "active" : "")}>
            About Us
          </NavLink>
        </li>
        <li>
          <NavLink to="/Background" className={({ isActive }) => (isActive ? "active" : "")}>
            Background
          </NavLink>
        </li>
        <li>
          <NavLink to="/Behindus" className={({ isActive }) => (isActive ? "active" : "")}>
            Behind Us
          </NavLink>
        </li>
        <li>
          <NavLink to="/Achievements" className={({ isActive }) => (isActive ? "active" : "")}>
            Achievements
          </NavLink>
        </li>
        <li>
          <NavLink to="/Events" className={({ isActive }) => (isActive ? "active" : "")}>
            Events
          </NavLink>
        </li>
      </ul>

      <ul className="navbar-right desktop-only">
        <li>
          <NavLink to="/Contactus" className={({ isActive }) => (isActive ? "active" : "")}>
            Contact Us
          </NavLink>
        </li>
        <li>
          <NavLink to="/Donateus" className={({ isActive }) => (isActive ? "active" : "")}>
            Donate
          </NavLink>
        </li>
      </ul>

      {/* Mobile menu toggle (3 dots) */}
      <div className="dots-menu mobile-only" onClick={toggleMenu}>
        <span></span>
        <span></span>
        <span></span>
      </div>

      {/* Mobile dropdown */}
      <div className={`mobile-menu ${menuOpen ? "open" : ""}`}>
        <ul>
          <li>
            <NavLink to="/" onClick={toggleMenu}>
              Home
            </NavLink>
          </li>
          <li>
            <NavLink to="/Aboutus" onClick={toggleMenu}>
              About Us
            </NavLink>
          </li>
          <li>
            <NavLink to="/Background" onClick={toggleMenu}>
              Background
            </NavLink>
          </li>
          <li>
            <NavLink to="/Behindus" onClick={toggleMenu}>
              Behind Us
            </NavLink>
          </li>
          <li>
            <NavLink to="/Achievements" onClick={toggleMenu}>
              Achievements
            </NavLink>
          </li>
          <li>
            <NavLink to="/Events" onClick={toggleMenu}>
              Events
            </NavLink>
          </li>
          <li>
            <NavLink to="/Contactus" onClick={toggleMenu}>
              Contact Us
            </NavLink>
          </li>
          <li>
            <NavLink to="/Donateus" onClick={toggleMenu}>
              Donate
            </NavLink>
          </li>
        </ul>
      </div>
    </nav>
  );
}

export default Navbar;
