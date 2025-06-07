import Navbar from "../components/Navbar/Navbar";
import Footer from "../components/Footer/Footer";
import "./Stylings/Achievements.css";

const Achievements = () => {
  return (
    <div>
      <Navbar />
      <div className="achievements-container">
        <h1>Our Achievements</h1>
        <p>We are proud to share some of our key achievements at Tudawe Child Development Center:</p>
        <ul>
          <li>Successfully provided care and education to over 500 children in the past year.</li>
          <li>Implemented a new educational curriculum that has improved learning outcomes.</li>
          <li>Organized community outreach programs that reached over 1,000 families.</li>
          <li>Received recognition from local authorities for our contributions to child welfare.</li>
        </ul>
        <h2>Join Us in Celebrating Our Success</h2>
        <p>Your support has been instrumental in helping us achieve these milestones. Thank you!</p>
      </div>
      <Footer />
    </div>
  );
}   

export default Achievements;