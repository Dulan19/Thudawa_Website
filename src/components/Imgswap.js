"use client"

import { useState, useEffect } from "react"
import "../Imgswap.css"

const Imgswap = () => {
  // Array of your image URLs - replace with your actual images
  const images = [
    require("../assets/home1.jpg"),
    require("../assets/home2.jpeg"),
    require("../assets/home 3.jpg"),
    require("../assets/home 4.jpg"),
  ]

  const [currentImageIndex, setCurrentImageIndex] = useState(0)
  const [loadedImages, setLoadedImages] = useState(new Set())
  const [firstImageLoaded, setFirstImageLoaded] = useState(false)

  useEffect(() => {
    // Auto-advance images every 5 seconds
    const interval = setInterval(() => {
      setCurrentImageIndex((prevIndex) => (prevIndex === images.length - 1 ? 0 : prevIndex + 1))
    }, 5000)

    return () => clearInterval(interval)
  }, [images.length])

  // Optimized image loading - load first image immediately, others in background
  useEffect(() => {
    // Load first image immediately
    const firstImg = new Image()
    firstImg.onload = () => {
      setFirstImageLoaded(true)
      setLoadedImages((prev) => new Set([...prev, 0]))
    }
    firstImg.src = images[0]

    // Load other images in background
    images.slice(1).forEach((src, index) => {
      const img = new Image()
      img.onload = () => {
        setLoadedImages((prev) => new Set([...prev, index + 1]))
      }
      img.src = src
    })
  }, []) // Removed images from the dependency array

  const goToSlide = (index) => {
    setCurrentImageIndex(index)
  }

  // Show loading only for a brief moment, then show first image even if others aren't loaded
  if (!firstImageLoaded) {
    return (
      <div className="hero-swap loading">
        <div className="loading-spinner">
          <div className="spinner-circle"></div>
        </div>
      </div>
    )
  }

  return (
    <div className="hero-swap">
      <div className="swap-container">
        {images.map((image, index) => (
          <div
            key={index}
            className={`swap-slide ${
              index === currentImageIndex ? "active" : ""
            } ${loadedImages.has(index) ? "loaded" : "loading-bg"}`}
          >
            <img
              src={image || "/placeholder.svg"}
              alt={`Hero ${index + 1}`}
              className="swap-image"
              loading={index === 0 ? "eager" : "lazy"}
            />
          </div>
        ))}

        {/* Dots indicator */}
        <div className="swap-dots">
          {images.map((_, index) => (
            <button
              key={index}
              className={`dot ${index === currentImageIndex ? "active" : ""}`}
              onClick={() => goToSlide(index)}
              aria-label={`Go to slide ${index + 1}`}
            />
          ))}
        </div>

        {/* Overlay content */}
        <div className="swap-overlay">
          <div className="overlay-content">
            <h1>"පරාතථයන කීතියෙ" පරාර්ථය පිණිස මිස කිර්තිය පිණිස නොවේ</h1>
            <hr className="overlay-divider" />
            <h2>Welfare, not for Pride</h2>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Imgswap;
