import React from "react"
import Navbar from '../components/Navbar/Navbar.jsx'; 
import Footer from '../components/Footer/Footer.jsx';
import "../App.css"



function Background() {
  return (
    <div className="App">
      <Navbar />
      <div className="content-section">
          <div className="vision-mission-container">
            <div className="box vision-box">
              <h2>something</h2>
              <p>
                Give me some time i will finish this page.
              </p>
            </div>
            <div className="box mission-box">
              <h2>something</h2>
              <p>
                cosdgd
              </p>
              <button className="seemore-btn">Read More</button>
            </div>
          </div>
        </div>
      

      <Footer />
    </div>
  )
}

export default Background