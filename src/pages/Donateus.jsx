import Navbar from "../components/Navbar/Navbar";
import Footer from "../components/Footer/Footer";
import "./Stylings/Donateus.css";

const Donateus = () => {
  return (
    <div>
      <div className="background-image"></div>
      <Navbar />
      <div className="donateus-container">
        <div className="donateus-card">
        <h1>Support Our Cause</h1>
        <p>Your contributions help us provide better care and facilities and Quality Education 
            for the children at Tudawe Child Development Center.</p>
        <h2>How to Donate</h2>
        <ul>
          <li>Bank Transfer: 
            <strong>Account Name:</strong> Tudawe Children Development Centre<br />
            <strong>Bank:</strong> Bank of Ceylon (7010)<br />
            <strong>Account Number:</strong> 0003699120<br />
            <strong>Branch:</strong> Wadduwa Branch (584)
          </li>
          <li>Online Payment: Visit our website and click on the "Donate" button.</li>
          <li>In-Kind Donations: We accept toys, books, and educational materials.</li>
        </ul>
        <h2>Contact Us for More Information</h2>
        <button className ="contactus-button">Contact Us</button>
        </div>
        </div>
        <Footer />
        </div>
      
  );
}
export default Donateus;