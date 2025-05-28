import "./Preloader.css"

const Preloader = () => {
  return (
    <div className="preloader-container">
      <div className="preloader-content">
        {/* Logo placeholder - you can replace this with your actual logo */}
        <div className="logo-container">
          <div className="logo-placeholder">
            <span>Your Logo Here</span>
          </div>
        </div>

        {/* Animated children waving */}
        <div className="children-container">
          <div className="child child-1">
            <div className="child-body">
              <div className="child-head"></div>
              <div className="child-torso"></div>
              <div className="child-arm left-arm">
                <div className="hand"></div>
              </div>
              <div className="child-arm right-arm waving-arm">
                <div className="hand waving-hand"></div>
              </div>
              <div className="child-leg left-leg"></div>
              <div className="child-leg right-leg"></div>
            </div>
          </div>

          <div className="child child-2">
            <div className="child-body">
              <div className="child-head"></div>
              <div className="child-torso"></div>
              <div className="child-arm left-arm waving-arm">
                <div className="hand waving-hand"></div>
              </div>
              <div className="child-arm right-arm">
                <div className="hand"></div>
              </div>
              <div className="child-leg left-leg"></div>
              <div className="child-leg right-leg"></div>
            </div>
          </div>
        </div>

        {/* Loading text and animation */}
        <div className="loading-section">
          <h2 className="welcome-text">Welcome to Our Home</h2>
          <div className="loading-dots">
            <span className="dot"></span>
            <span className="dot"></span>
            <span className="dot"></span>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Preloader
