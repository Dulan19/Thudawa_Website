"use client"

import "./Preloader.css"

// Import images directly from the src/assets folder
import photo1 from "../../assets/Buffer page/photo1.jpg"
import photo2 from "../../assets/Buffer page/photo2.jpg"
import photo3 from "../../assets/Buffer page/photo3.jpg"
import photo4 from "../../assets/Buffer page/photo4.jpg"
import photo5 from "../../assets/Buffer page/photo5.jpg"
import photo6 from "../../assets/Buffer page/photo6.jpg"
import photo7 from "../../assets/Buffer page/photo7.jpg"
import photo8 from "../../assets/Buffer page/photo8.jpg"

const Preloader = () => {
  // Use the imported image variables
  const imageList = [photo1, photo2, photo3, photo4, photo5, photo6, photo7, photo8]

  const renderImageRow = (direction, rowIndex) => {
    return (
      <div className={`image-row ${direction === "left" ? "move-left" : "move-right"}`}>
        {/* Duplicate images for seamless loop */}
        {[...imageList, ...imageList].map((imageSrc, index) => (
          <div key={`${rowIndex}-${index}`} className="image-container">
            <img
              src={imageSrc || "/placeholder.svg"} // Use the imported image variable here
              alt={`Landscape ${index + 1}`}
              className="landscape-image"
              width={500} // Provide appropriate width
              height={300} // Provide appropriate height
            />
          </div>
        ))}
      </div>
    )
  }

  return (
    <div className="preloader-container">
      {/* Background Image Rows */}
      <div className="background-animation">
        {renderImageRow("right", 1)}
        {renderImageRow("left", 2)}
        {renderImageRow("right", 3)}
        {renderImageRow("left", 4)}
      </div>
      {/* Central Blur Box */}
      <div className="blur-box">
        <div className="logo" role="img" aria-label="Company Logo">
          {/* Your logo is set via background-image in CSS */}
        </div>
        <div className="loading-section">
          <h2 className="welcome-text">"Hope Starts Here."</h2>
          <div className="loading-dots">
            <span className="dot1"></span>
            <span className="dot1"></span>
            <span className="dot1"></span>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Preloader
