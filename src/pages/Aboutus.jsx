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
        <h1 className="aboutus-heading">
          Our Journey Since 1996
        </h1>
        <div className="section-two">
          <p>sgst</p>
        </div>
        <Footer />
      </div>
    </div>  
  )
}

export default Aboutus
