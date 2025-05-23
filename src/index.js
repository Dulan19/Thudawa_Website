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
      <Route path="Aboutus" element={<Aboutus />} />
      <Route path="Background" element={<Background />} />
      <Route path="Behindus" element={<Behindus />} />
      <Route path="Achievements" element={<Achievements />} />
      <Route path="Events" element={<Events />} />
      <Route path="Contactus" element={<Contact />} />
      <Route path="Donateus" element={<Donate />} />
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
