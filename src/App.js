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

        <div className="facilities-section">
            <h2>Events</h2>
            <div className="facilities-grid">
              <div className="facility-card">
                <div className="facility-img-container facility-img-1"></div>
                <h3>Bakthi Geetha - 2025</h3>
                <p>On the occasion of Poson Poya Day, with the valuable support of Mrs. Palika Darmawickrama, 
                  The Music Teacher of the Thudawa Child Development Centre, and the dedicated efforts of the Centre’s committee, 
                  The Thudawa Child Development Centre successfully presented “Bakthi Gee 2025” together with its children</p>
                  <button className="view" onClick={() => window.location.href = '/events'}>View</button>
              </div>
              <div className="facility-card">
                <div className="facility-img-container facility-img-2"></div>
                <h3>Bedrooms & Office</h3>
                <p>Comfortable sleeping quarters and administrative spaces that ensure both rest and organization.</p>
                <div className="facility-fact">Each child has their own personal space to call home.</div>
              </div>
              <div className="facility-card">
                <div className="facility-img-container facility-img-3"></div>
                <h3>Study Room</h3>
                <p>A dedicated learning environment built with international support to foster education and growth.</p>
                <div className="facility-fact">Built in 2004 with donations from Germany!</div>
              </div>
              <div className="facility-card">
                <div className="facility-img-container facility-img-4"></div>
                <h3>Playground</h3>
                <p>Safe outdoor spaces where children can play, laugh, and simply be kids.</p>
                <div className="facility-fact">Added in 2010 along with our beautiful butterfly garden.</div>
              </div>
            </div>
          </div>




          <div className="facilities-section">
            <h2>Achievements</h2>
            <div className="facilities-grid">
              <div className="facility-card">
                <div className="facility-img-container facility-img-1"></div>
                <h3>Bakthi Geetha - 2025</h3>
                <p>On the occasion of Poson Poya Day, with the valuable support of Mrs. Palika Darmawickrama, 
                  The Music Teacher of the Thudawa Child Development Centre, and the dedicated efforts of the Centre’s committee, 
                  The Thudawa Child Development Centre successfully presented “Bakthi Gee 2025” together with its children</p>
                  <button className="view" onClick={() => window.location.href = '/events'}>View</button>
              </div>
              <div className="facility-card">
                <div className="facility-img-container facility-img-2"></div>
                <h3>Bedrooms & Office</h3>
                <p>Comfortable sleeping quarters and administrative spaces that ensure both rest and organization.</p>
                <div className="facility-fact">Each child has their own personal space to call home.</div>
              </div>
              <div className="facility-card">
                <div className="facility-img-container facility-img-3"></div>
                <h3>Study Room</h3>
                <p>A dedicated learning environment built with international support to foster education and growth.</p>
                <div className="facility-fact">Built in 2004 with donations from Germany!</div>
              </div>
              <div className="facility-card">
                <div className="facility-img-container facility-img-4"></div>
                <h3>Playground</h3>
                <p>Safe outdoor spaces where children can play, laugh, and simply be kids.</p>
                <div className="facility-fact">Added in 2010 along with our beautiful butterfly garden.</div>
              </div>
            </div>
          </div>
            

        <Footer />
      </div>
    </div>
  )
}

export default App
