import React from 'react';
import Navbar from './components/Navbar/Navbar'; 
import './App.css';
import Imgswap from './components/Imgswap';

function Aboutus() {
  return (
    <div className="Aboutus">
      <Navbar />
      <Imgswap />
      
      <div className="content-section">
        <h1>content</h1>
        <p>contentt</p>
      </div>
    </div>
  );
}

export default Aboutus;
