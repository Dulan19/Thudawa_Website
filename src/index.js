import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter, Routes, Route } from "react-router-dom";

// Home Page
import Home from './App'; // You mentioned App.jsx is your Home

// Page Components
import Aboutus from './pages/Aboutus.jsx';
import Contact from './pages/Contactus.jsx';
import Background from './pages/Background.jsx';
import Behindus from './pages/Behindus.jsx';
import Achievements from './pages/Achievments.jsx'; // Corrected typo in file name
import Events from './pages/Events.jsx';
import Donate from './pages/Donateus.jsx'; // Make sure file is named 'Donate.jsx'

// Optional: create a simple fallback page
const NoPage = () => <div style={{ padding: "2rem", textAlign: "center" }}><h1>404 - Page Not Found</h1></div>;

function App() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="aboutus" element={<Aboutus />} />
      <Route path="background" element={<Background />} />
      <Route path="behindus" element={<Behindus />} />
      <Route path="achievements" element={<Achievements />} />
      <Route path="events" element={<Events />} />
      <Route path="contact" element={<Contact />} />
      <Route path="donate" element={<Donate />} />
      <Route path="*" element={<NoPage />} />
    </Routes>
  );
}

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <BrowserRouter>
      <App />
    </BrowserRouter>
  </React.StrictMode>
);
