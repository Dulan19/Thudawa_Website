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
          <h6> Restoring childhoods, shaping futures — a home where compassion, education, and community<br />
          create hope for every child.
          </h6>
        </h1>
        <div className="section-two">
          <p>Tudawe historical house is located in the beautiful village area. The Tudawe Children Development 
            Center premises gathered around the parental House and Property which has enough space for buildings 
            as well as playgrounds. We have to remember Tudawe Family and other initiators who encourage us to donate this 
            nearly half-arced property for making a better world for children.</p>
        </div>
        <Footer />
      </div>
    </div>  
  )
}

export default Aboutus
