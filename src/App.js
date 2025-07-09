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

        <div className="events-section">
            <h2>Events</h2>
            <div className="events-grid">
              <div className="events-card">
                <div className="events-img-container events-img-1"></div>
                <div className="events-content">
                <h3>Bakthi Geetha - 2025</h3>
                <p>On the occasion of Poson Poya Day, with the valuable support of Mrs. Palika Darmawickrama, 
                  The Music Teacher of the Thudawa Child Development Centre, and the dedicated efforts of the Centre’s committee, 
                  The Thudawa Child Development Centre successfully presented “Bakthi Gee 2025” together with its children</p>
                  <button className="view" onClick={() => window.location.href = '/events'}>View</button>
                  </div>
              </div>              
              <div className="events-card">
                <div className="events-img-container events-img-2"></div>
                <h3>Dansala - 2025</h3>
                <p>On the occasion of Vesak Full Moon Poya Day 2025, the Chief Matron, committee members, and children of The 
                  Thudawa Child Development Centre organized a fruit Dansala for the devotees and travelers visiting Vesak celebrations
                  .</p>
                <button className="view" onClick={() => window.location.href = '/events'}>View</button>
              </div>
              <div className="events-card">
                <div className="events-img-container events-img-3"></div>
                <h3>Bakthi Geetha at ACBC</h3>
                <p>At the All Ceylon Buddhist Congress Vesak Kalapaya 2025, the children of The Thudawa Child Development Centre were 
                  invited to perform Bakthi Gee on the official stage. </p>
                <button className="view" onClick={() => window.location.href = '/events'}>View</button>                
              </div>
              <div className="events-card">
                <div className="events-img-container events-img-4"></div>
                <h3>Avurudu Uthsawaya - 2025</h3>
                <p>With the support of the Chief Matron and the committee, the Avurudu Uthsaya 2025 was successfully 
                  organized for the children of the Child Development Centre in celebration of the Sinhala and Tamil New Year.</p>
                  <button className="view" onClick={() => window.location.href = '/events'}>View</button>
              </div>
                  <div style={{textAlign: 'center'}}>
                  <button className="view-on-event-page" onClick={() => window.location.href = '/events'}>
                                View All Events
                            <svg className="arrow" viewBox="0 0 24 24" fill="currentColor">
                                    <path d="M8.59 16.59L13.17 12 8.59 7.41 10 6l6 6-6 6-1.41-1.41z"/>
                                </svg>
                    </button>
              </div>
            </div>
          </div>




          <div className="facilities-section">
            <h2>Achievements</h2>
            <div className="facilities-grid">
              <div className="facility-card">
                <div className="facility-img-container facility-img-1"></div>
                <h3>1</h3>
                <p>On the occasion of Poson Poya Day, with the valuable support of Mrs. Palika Darmawickrama, 
                  The Music Teacher of the Thudawa Child Development Centre, and the dedicated efforts of the 
                  Centre’s committee, 
                  The Thudawa Child Development Centre successfully presented “Bakthi Gee 2025” together with
                   its children</p>
                  <button className="view" onClick={() => window.location.href = '/events'}>View</button>
              </div>
              <div className="facility-card">
                <div className="facility-img-container facility-img-2"></div>
                <h3>2</h3>
                <p>Comfortable sleeping quarters and administrative spaces that ensure both rest 
                  and organization.</p>
                
              </div>
              <div className="facility-card">
                <div className="facility-img-container facility-img-3"></div>
                <h3>3</h3>
                <p>A gooda learning environment built sivir sa with international support to foster 
                  education and growth.</p>
                
              </div>
              <div className="facility-card">
                <div className="facility-img-container facility-img-4"></div>
                <h3>4</h3>
                <p>Safe outdoor spwfewnoewaces where chiwhich wherdsfldren can play, laugh, and simply be kids.</p>
                
              </div>
            </div>
          </div>
            

        <Footer />
      </div>
    </div>
  )
}

export default App
