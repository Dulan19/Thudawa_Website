"use client";

import { useState, useEffect } from "react";
import Navbar from "./components/Navbar/Navbar";
import Imgswap from "./components/Imgswap";
import Footer from "./components/Footer/Footer";
import Preloader from "./components/Preloader/Preloader";
import "./App.css";

function App() {
  const [loading, setLoading] = useState(true);         // State for preloader
  const [contentReady, setContentReady] = useState(false); // Smooth transition for content

  useEffect(() => {
    // Simulate loading with preloader
    const timer = setTimeout(() => {
      setLoading(false);
      setTimeout(() => setContentReady(true), 100); // Small delay for smooth transition
    }, 7000);

    return () => clearTimeout(timer); // Clear timeout on unmount
  }, []);

  if (loading) return <Preloader />; // Show preloader during initial load

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
          </div>
          <div className="box mission-box">
            <h2>Our Mission</h2>
            <p>
              Our mission is to foster, protect, and provide for disowned,
              neglected, orphaned, or abused children with welfare and guidance.
            </p>
            <button className="seemore-btn">Read More</button>
          </div>
        </div>

        {/* Events Section */}
        <div className="events-section">
          <h2>Events</h2>
          <div className="events-grid">
            {/* Event Card 1 */}
            <div className="events-card">
              <div className="events-img-container events-img-1"></div>
              <div className="events-content">
                <h3>Bakthi Geetha - 2025</h3>
                <button
                  className="view"
                  onClick={() => (window.location.href = "/events")}
                >
                  View
                </button>
              </div>
            </div>

            {/* Event Card 2 */}
            <div className="events-card">
              <div className="events-img-container events-img-2"></div>
              <div className="events-content">
                <h3>Dansala - 2025</h3>
                <button
                  className="view"
                  onClick={() => (window.location.href = "/events")}
                >
                  View
                </button>
              </div>
            </div>

            {/* Event Card 3 */}
            <div className="events-card">
              <div className="events-img-container events-img-3"></div>
              <div className="events-content">
                <h3>Bakthi Geetha at ACBC- 2025</h3>
                <button
                  className="view"
                  onClick={() => (window.location.href = "/events")}
                >
                  View
                </button>
              </div>
            </div>

            {/* Event Card 4 */}
            <div className="events-card">
              <div className="events-img-container events-img-4"></div>
              <div className="events-content">
                <h3>Avurudu Uthsawaya - 2025</h3>
                <button
                  className="view"
                  onClick={() => (window.location.href = "/events")}
                >
                  View
                </button>
              </div>
            </div>

            {/* Button to View All Events */}
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

        {/* achievements Section */}
        <div className="achievements-section">
          <h2>Achievements</h2>
          <div className="achievements-grid">
            {/* achievements Card 1 */}
            <div className="achievements-card">
              <div className="achievements-img-container achievements-img-1"></div>
              <div className="achievements-content">
                <h3>Bakthi Geetha - 2025</h3>
                <p>
                  On Poson Poya Day, with the support of Mrs. Palika Darmawickrama
                  and the committee, we successfully presented “Bakthi Gee 2025”.
                </p>
                <button
                  className="view"
                  onClick={() => (window.location.href = "/achievements")}
                >
                  View
                </button>
              </div>
            </div>

            {/* achievements Card 2 */}
            <div className="achievements-card">
              <div className="achievements-img-container achievements-img-2"></div>
              <div className="achievements-content">
                <h3>Bakthi Geetha - 2025</h3>
                <p>
                  On Poson Poya Day, with the support of Mrs. Palika Darmawickrama
                  and the committee, we successfully presented “Bakthi Gee 2025”.
                </p>
                <button
                  className="view"
                  onClick={() => (window.location.href = "/achievements")}
                >
                  View
                </button>
              </div>
            </div>

            {/* achievements Card 3 */}
            <div className="achievements-card">
              <div className="achievements-img-container achievements-img-3"></div>
              <div className="achievements-content">
                <h3>Bakthi Geetha - 2025</h3>
                <p>
                  On Poson Poya Day, with the support of Mrs. Palika Darmawickrama
                  and the committee, we successfully presented “Bakthi Gee 2025”.
                </p>
                <button
                  className="view"
                  onClick={() => (window.location.href = "/achievements")}
                >
                  View
                </button>
              </div>
            </div>

            {/* achievements Card 4 */}
            <div className="achievements-card">
              <div className="achievements-img-container achievements-img-4"></div>
              <div className="achievements-content">
                <h3>Bakthi Geetha - 2025</h3>
                <p>
                  On Poson Poya Day, with the support of Mrs. Palika Darmawickrama
                  and the committee, we successfully presented “Bakthi Gee 2025”.
                </p>
                <button
                  className="view"
                  onClick={() => (window.location.href = "/achievements")}
                >
                  View
                </button>
              </div>
            </div>

            {/* Button to View All Events */}
            <div className="achievements-button-wrapper">
              <button
                className="view-on-achievements-page"
                onClick={() => (window.location.href = "/achievements")}
              >
                View All Events
                <svg className="arrow" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M8.59 16.59L13.17 12 8.59 7.41 10 6l6 6-6 6-1.41-1.41z" />
                </svg>
              </button>
            </div>
          </div>
        </div>

        {/* Footer Section */}
        <Footer />
      </div>
    </div>
  );
}

export default App;
