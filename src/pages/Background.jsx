"use client"
import React, { useState } from "react";
import Navbar from "../components/Navbar/Navbar.jsx"
import Footer from "../components/Footer/Footer.jsx"
import "./Stylings/Background.css"

function Background() {
  const [show1, setShow1] = useState(false);
  const [show2, setShow2] = useState(false);
  const [show3, setShow3] = useState(false);
  const [show4, setShow4] = useState(false);
  const [show5, setShow5] = useState(false);
  return (
    <div>
      <div className="background1-image"></div>
      <div className="page-content">
        <Navbar />

        
        <h1 className="aboutus-heading">
          sdfsdfsdf
          <h6>
            
           fsdfsd
            <br />
            sdfsdf
          </h6>
        </h1>

        
        <div className="section-container">
          <div className="intro-section">
            <h2>Thalpitiya Village</h2>
            <p>Thalpitiya Village Thalpitiya Village is located 31 km away from the central city, Colombo. 
              Though it is close to city center, It has preserved the beauty of the Village, and currently going 
              through a lot of development projects. Let’s see the Beauty of the Village, If you travel by train,you 
              feel the  breeze of the Indian ocean,  you can get down from the Pinwattha or Wadduwa Station and walk
               towards Thalpitiya. On the beach, and there are numerous hotels ready...</p>
            <button onClick={() => setShow1(!show1)}>{show1 ? "Show Less" : "Read More"}
            </button>
            {show1 && <p>Full article content...</p>}
          </div>

          
        

          
          <div className="mvv-section">
            <h2>dfgfdgdfg</h2>
            <div className="mvv-grid">
              <div className="mvv-card">
                <div className="mvv-icon">🎯</div>
                <h3>fdgdfgd</h3>
                <p>
                  dfgfdgfdg
                </p>
                <h3>මෙහෙවර</h3>
                <p>
                  dfgfdg
                </p>
              </div>
              <div className="mvv-card">
                <div className="mvv-icon">👁️</div>
                <h3>Vision</h3>
                <p>
                 dfgfdgdf
                 </p>
                <h3>දැක්ම</h3>
                <p>
                  dfgdfgdfg
                </p>
              </div>
              
            </div>
          </div>

          
          <div className="facilities-section">
            <h2>gdfgdfg</h2>
            <div className="facilities-grid">
              <div className="facility-card">
                <div className="facility-image">🏠</div>
                <h3>gdfgdfgdfg</h3>
                <p>dfgfdgdf</p>
                <div className="facility-fact">
                  dfgdfgfd
                </div>
              </div>
              <div className="facility-card">
                <div className="facility-image">🛏️</div>
                <h3>dfgfdgfdg</h3>
                <p>dfgdfg</p>
                <div className="facility-fact">dgdfgdfg</div>
              </div>
              <div className="facility-card">
                <div className="facility-image">📚</div>
                <h3>dgdfgdf</h3>
                <p>gddfgfdg.</p>
                <div className="facility-fact">dfgfdgdf</div>
              </div>
              <div className="facility-card">
                <div className="facility-image">🎮</div>
                <h3>fgdgdfg</h3>
                <p>fdgfdgdf</p>
                <div className="facility-fact">dgfdgd</div>
              </div>
              <div className="facility-card">
                <div className="facility-image">🍳</div>
                <h3>dgdfg</h3>
                <p>dgfdgdf</p>
                <div className="facility-fact">fdgdfg</div>
              </div>
            </div>
          </div>

          
          <div className="donor-section">
            <h2>fdgfdg</h2>
            <div className="donor-content">
              <p>
                dfgfdg
              </p>
              <div className="donor-highlights">
                <div className="donor-card">
                  <h3>dfgdf</h3>
                  <p>dfgfd</p>
                </div>
                <div className="donor-card">
                  <h3>fgdd</h3>
                  <p>dfgdf</p>
                </div>
                <div className="donor-card">
                  <h3>fdg</h3>
                  <p>dfgd</p>
                </div>
              </div>
              <div className="donation-call">
                <p>
                  dfgd
                </p>
                <button className="donate-btn">fdgd</button>
              </div>
            </div>
          </div>

          
          <div className="life-section">
            <h2>dfgfd</h2>
            <div className="life-content">
              <div className="daily-routine">
                <h3>fdgd</h3>
                <div className="routine-grid">
                  <div className="routine-item">
                    <span className="routine-icon">🌅</span>
                    <span>dggd</span>
                  </div>
                  <div className="routine-item">
                    <span className="routine-icon">📖</span>
                    <span>dfg</span>
                  </div>
                  <div className="routine-item">
                    <span className="routine-icon">🌱</span>
                    <span>dfg</span>
                  </div>
                  <div className="routine-item">
                    <span className="routine-icon">🍽️</span>
                    <span>dfg</span>
                  </div>
                </div>
              </div>
              <div className="testimonial">
                <blockquote>
                  content
                </blockquote>
                <cite>sub contebnt</cite>
              </div>
            </div>
          </div>

          
          <div className="spiritual-section">
            <h2>topic</h2>
            <div className="spiritual-content">
              <div className="spiritual-item">
                <h3>topic</h3>
                <p>
                  content
                </p>
              </div>
              <div className="spiritual-item">
                <h3>topic</h3>
                <p>
                 content
                </p>
              </div>
              <div className="spiritual-item">
                <h3>topic</h3>
                <p>
                  contenbt
                </p>
              </div>
            </div>
          </div>

          
          <div className="closing-section">
            <div className="closing-content">
              <h2>topic</h2>
              <p className="closing-message">
                content
              </p>
              <p>
                
              </p>
            </div>
          </div>
        </div>

        <Footer />
      </div>
    </div>
  )
}

export default Background
