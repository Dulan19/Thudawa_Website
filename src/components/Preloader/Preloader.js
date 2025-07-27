import "./Preloader.css";

const Preloader = () => {
  return (
    <div className="preloader-container">
      <div className="wall-background">
        {/* Randomly placed photo frames */}
        <div className="photo-frame" style={{ top: '10%', left: '5%', width: '150px', height: '200px' }}>
          <img src="../../assets/photo1.jpg" alt="Photo 1" />
        </div>
        <div className="photo-frame" style={{ top: '20%', left: '20%', width: '120px', height: '180px' }}>
          <img src="../../assets/photo2.jpg" alt="Photo 2" />
        </div>
        <div className="photo-frame" style={{ top: '30%', left: '40%', width: '200px', height: '250px' }}>
          <img src="../../assets/photo3.jpg" alt="Photo 3" />
        </div>
        <div className="photo-frame" style={{ top: '15%', left: '60%', width: '130px', height: '190px' }}>
          <img src="../../assets/photo4.jpg" alt="Photo 4" />
        </div>
        <div className="photo-frame" style={{ top: '50%', left: '10%', width: '170px', height: '220px' }}>
          <img src="../../assets/photo5.jpg" alt="Photo 5" />
        </div>
        <div className="photo-frame" style={{ top: '40%', left: '70%', width: '140px', height: '200px' }}>
          <img src="../../assets/photo6.jpg" alt="Photo 6" />
        </div>
        {/* Add more photo frames as needed */}
      </div>
      <div className="preloader-content">
        <div className="blur-box">
          <div className="logo">
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
    </div>
  );
};

export default Preloader;