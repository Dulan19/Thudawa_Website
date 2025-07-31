"use client";

import { useState, useEffect } from "react";
import Navbar from "./components/Navbar/Navbar";
import Imgswap from "./components/Imgswap";
import Footer from "./components/Footer/Footer";
import Preloader from "./components/Preloader/Preloader";
import "./App.css";

function App() {
  const [loading, setLoading] = useState(true);         
  const [contentReady, setContentReady] = useState(false);

  useEffect(() => {
    // Simulate loading for 11 seconds
    const timer = setTimeout(() => {
      setLoading(false);
      setTimeout(() => setContentReady(true), 100);
    }, 11000);

    return () => clearTimeout(timer);
  }, []);

  if (loading) return <Preloader />;

  return (
    <div className="App">
      <Navbar />
      <div
        className={`main-content ${
          contentReady ? "content-loaded" : "content-loading"
        }`}
      >
        <Imgswap />

        {/* Vision and Mission Section */}
        <div className="vision-mission-container">
          <div className="box vision-box">
            <h2>Our Vision</h2>
            <p>
              Our vision is to end the sufferings of innocent children, recreate
              their childhoods with justice and equality, and create a better
              future for them.
            </p>
            <button className="view"
              onClick={() => (window.location.href = "/Aboutus")}
              >Read More</button>
          </div>
          <div className="box mission-box">
            <h2>Our Mission</h2>
            <p>
              Our mission is to foster, protect, and provide for disowned,
              neglected, orphaned, or abused children with welfare and guidance.
            </p>
            <button className="view"
              onClick={() => (window.location.href = "/Aboutus")}
              >Read More</button>
          </div>
        </div>

        {/* Events Section */}
        <div className="events-section">
          <h2>Events</h2>
          <div className="events-grid">
            {/* Event Cards */}
            {[
              "Bakthi Geetha - 2025",
              "Dansala - 2025",
              "Bakthi Geetha at ACBC - 2025",
              "Avurudu Uthsawaya - 2025",
            ].map((title, index) => (
              <div className="events-card" key={index}>
                <div className={`events-img-container events-img-${index + 1}`}></div>
                <div className="events-content">
                  <h3>{title}</h3>
                  <button
                    className="view"
                    onClick={() => (window.location.href = "/events")}
                  >
                    View
                  </button>
                </div>
              </div>
            ))}

            {/* View All Events */}
            <div className="events-button-wrapper">
              <button
                className="view-on-event-page"
                onClick={() => (window.location.href = "/events")}
              >
                View All Events
                <svg className="arrow" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M8.59 16.59L13.17 12 8.59 7.41 10 6l6 6-6 6-1.41-1.41z" />
                </svg>
              </button>
            </div>
          </div>
        </div>

        {/* Achievements Section */}
        <div className="achievements-section">
          <h2>Achievements</h2>
          <div className="achievements-grid">
            {/* Achievements Cards */}
            {Array(4)
              .fill(0)
              .map((_, index) => (
                <div className="achievements-card" key={index}>
                  <div
                    className={`achievements-img-container achievements-img-${index + 1}`}
                  ></div>
                  <div className="achievements-content">
                    <h3>Bakthi Geetha - 2025</h3>
                    <p>
                      On Poson Poya Day, with the support of Mrs. Palika
                      Darmawickrama and the committee, we successfully presented
                      “Bakthi Gee 2025”.
                    </p>
                    <button
                      className="view"
                      onClick={() => (window.location.href = "/achievements")}
                    >
                      View
                    </button>
                  </div>
                </div>
              ))}

            {/* View All Achievements */}
            <div className="achievements-button-wrapper">
              <button
                className="view-on-achievements-page"
                onClick={() => (window.location.href = "/achievements")}
              >
                View All Achievements
                <svg className="arrow" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M8.59 16.59L13.17 12 8.59 7.41 10 6l6 6-6 6-1.41-1.41z" />
                </svg>
              </button>
            </div>
          </div>
        </div>

        {/* Footer */}
        <Footer />
      </div>
    </div>
  );
}

export default App;
