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
                    <h2>Our Vision</h2>
                    <p>
                      Our vision is to put an end to the sufferings of innocent children who are being tampered by social
                      imbalances and injustice; to recreate their childhoods through justice and social equality and through
                      that, create a better future for them.
                    </p>
                    <button className="view">View</button>
                  </div>

                  {/* Copy-pasted boxes removed for brevity, add yours here */}

                  <div className="Events-box">
                    <h2>Our Mission</h2>
                    <p>
                      Our mission is to foster, protect and provide, for those children who have been disowned, neglected,
                      orphaned or abused and to provide all the inhabitants with welfare and guidance.
                    </p>
                    <button className="view">View</button>
                    <button className="seemore-btn">View More</button>
                  </div>
                </div>

                <button className="scroll-arrow" onClick={() => window.location.href = '/events'}>
                  →
                </button>
              </div>
          </div>
            

        <Footer />
      </div>
    </div>
  )
}

export default App
