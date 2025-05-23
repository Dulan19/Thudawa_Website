import React from 'react';
import Navbar from './components/Navbar/Navbar'; 
import './App.css';
import Imgswap from './components/Imgswap';

function App() {
  return (
    
    <div className="App">
      <Navbar />
      <Imgswap />
      
      <div className="content-section">
        <div className="vision-mission-container">
          <div className="box vision-box">
            <h2>Our Vision</h2>
            <p>Our vision is to put an end to the sufferings of innocent children who are being tampered by social imbalances and injustice;
            to recreate their childhoods through justice and social equality and through that, create a better future for them.</p>
          </div>
          <div className="box mission-box">
            <h2>Our Mission</h2>
            <p>Our mission is to foster, protect and provide, for those children who have been disowned, neglected, orphaned or abused and to provide all the inhabitants with welfare and guidance.</p>
            <button className="seemore-btn">See More</button>
          </div>
        </div>
      </div>

      
    </div>
    
  );
}

export default App;
