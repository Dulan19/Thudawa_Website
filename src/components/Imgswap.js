import React, { useState, useEffect } from 'react';
import '../Imgswap.css';

const Imgswap = () => {
  // Array of your image URLs - replace with your actual images
  const images = [
    require('../assets/home1.jpg'),
    require('../assets/home2.jpeg'),
    require('../assets/home 3.jpg'),
    require('../assets/home 4.jpg')
  ];

  const [currentImageIndex, setCurrentImageIndex] = useState(0);
  const [isLoaded, setIsLoaded] = useState(false);

  useEffect(() => {
    // Auto-advance images every 5 seconds
    const interval = setInterval(() => {
      setCurrentImageIndex((prevIndex) => 
        prevIndex === images.length - 1 ? 0 : prevIndex + 1
      );
    }, 5000); // Change image every 5 seconds

    return () => clearInterval(interval);
  }, [images.length]);

  // Preload images for smooth transitions
  useEffect(() => {
    const imagePromises = images.map((src) => {
      return new Promise((resolve) => {
        const img = new Image();
        img.onload = resolve;
        img.src = src;
      });
    });

    Promise.all(imagePromises).then(() => {
      setIsLoaded(true);
    });
  }, [images]);

  const goToSlide = (index) => {
    setCurrentImageIndex(index);
  };

  

  if (!isLoaded) {
    return (
      <div className="hero-swap loading">
        <div className="loading-spinner">Loading...</div>
      </div>
    );
  }

  return (
    <div className="hero-swap">
      <div className="swap-container">
        {images.map((image, index) => (
          <div
            key={index}
            className={`swap-slide ${
              index === currentImageIndex ? 'active' : ''
            }`}
          >
            <img
              src={image}
              alt={`Hero ${index + 1}`}
              className="swap-image"
            />
          </div>
        ))}
        
        

        {/* Dots indicator */}
        <div className="swap-dots">
          {images.map((_, index) => (
            <button
              key={index}
              className={`dot ${index === currentImageIndex ? 'active' : ''}`}
              onClick={() => goToSlide(index)}
              aria-label={`Go to slide ${index + 1}`}
            />
          ))}
        </div>

        {}
        <div className="swap-overlay">
          <div className="overlay-content">
            <h1>"පරාතථයන කීතියෙ" පරාර්ථය පිණිස මිස කිර්තිය පිණිස නොවේ</h1>
            <hr className="overlay-divider" />
            <h2>Welfare is not for Pride</h2>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Imgswap;