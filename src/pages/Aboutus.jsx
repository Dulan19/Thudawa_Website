"use client"

import React from "react"
import Navbar from '../components/Navbar/Navbar.jsx'; 
import Footer from '../components/Footer/Footer.jsx';


import "./Stylings/Aboutus.css";

function Aboutus() {
  return (
    <div>
      <div className="background-image"></div>
      <div className="page-content">
        <Navbar />
        <section className="intro-text">
          <h1>Welcome to Thudawa</h1>
          < p>Scroll down to learn more...</p>
        </section>
        <Footer />
      </div>
    </div>  
  )
}

export default Aboutus
