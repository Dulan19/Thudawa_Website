import React from 'react';
import { MyNavbar } from './components/Navbar/Navbar';

import './App.css';
import Imgswap from './components/Imgswap';
function App() {
  return (
    <div className="App">
      
      <MyNavbar />

      <Imgswap />
      <div className="content-section">
        <h1>content</h1>
        <p>contentt</p>
      </div>
    </div>
  );
}

export default App;
