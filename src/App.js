"use client"

import { useState, useEffect } from "react"
import Navbar from "./components/Navbar/Navbar"
import "./App.css"
import Imgswap from "./components/Imgswap"
import Footer from "./components/Footer/Footer"
import Preloader from "./components/Preloader/Preloader"

function App() {
  const [loading, setLoading] = useState(true)
  const [contentReady, setContentReady] = useState(false)

  useEffect(() => {
    // Simulate loading
    const timer = setTimeout(() => {
      setLoading(false)
      // Small delay to ensure smooth transition
      setTimeout(() => setContentReady(true), 100)
    }, 7000)

    return () => clearTimeout(timer)
  }, [])

  if (loading) {
    return <Preloader />
  }

  return (
    <div className="App">
      <Navbar />
      <div className={`main-content ${contentReady ? "content-loaded" : "content-loading"}`}>
        <Imgswap />
        <div className="content-section">
          <div className="vision-mission-container">
            <div className="box vision-box">
              <h2>Our Vision</h2>
              <p>
                Our vision is to put an end to the sufferings of innocent children who are being tampered by social
                imbalances and injustice; to recreate their childhoods through justice and social equality and through
                that, create a better future for them.
              </p>
            </div>
            <div className="box mission-box">
              <h2>Our Mission</h2>
              <p>
                Our mission is to foster, protect and provide, for those children who have been disowned, neglected,
                orphaned or abused and to provide all the inhabitants with welfare and guidance.
              </p>
              <button className="seemore-btn">Read More</button>
            </div>
          </div>
        </div>

        
          <div className="Events-section">
                  <h1>Events</h1>
              <div className="Events-scroll-wrapper">
                <div className="Events-container">
                  {/* Events boxes */}
                  <div className="Events-box">
                    <h2>Bakthi Geetha</h2>
                    <p>
                      Mrs.Palika Darmawickrama, The Music teacher of the Thudawa Child Development Centre and the commitee of the 
                      Thudawa Child Development Centre, has 
                    </p>
                    <button className="view">View</button>
                  </div>

                  <div className="Events-box">
                    <h2>Bakthi Geetha</h2>
                    <p>
                      Our vision is to put an end to the sufferings of innocent children who are being tampered by social
                      imbalances and injustice; to recreate their childhoods through justice and social equality and through
                      that, create a better future for them.
                    </p>
                    <button className="view">View</button>
                  </div>

                  <div className="Events-box">
                    <h2>Aurudu Event</h2>
                    <p>
                      Our mission is to foster, protect and provide, for those children who have been disowned, neglected,
                      orphaned or abused and to provide all the inhabitants with welfare and guidance.
                    </p>
                    <button className="view">View</button>
                  
                  </div>
                </div>

                <button className="scroll-arrow" onClick={() => window.location.href = '/events'}>
                  View More
                </button>
              </div>
          </div>
          <div className ="achievements-section">
                <h1>Achievements</h1>
                <div className="achievements-container">
                  <div className="achievement-box">
                    <h2>Best Child Development Center</h2>
                    <p>
                      Awarded by the Ministry of Child Affairs for outstanding contributions to child welfare.
                    </p>
                  </div>
                  <div className="achievement-box">
                    <h2>Community Service Award</h2>
                    <p>
                      Recognized for our efforts in community outreach and support programs.
                    </p>
                  </div>
                  <div className="achievement-box">
                    <h2>Excellence in Education</h2>
                    <p>
                      Received accolades for our innovative educational programs and child development initiatives.
                    </p>
                  </div>
                  </div>
                </div>
            

        <Footer />
      </div>
    </div>
  )
}

export default App
