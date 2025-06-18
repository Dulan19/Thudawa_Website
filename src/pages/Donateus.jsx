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
        <h1>How to Donate</h1>
        <ul>
          <li>Bank Transfer: < br />
            Account Name: Tudawe Children Development Centre<br />
            Bank: Bank of Ceylon (7010)<br />
            Account Number: 0003699120<br />
            Branch: Wadduwa Branch (584)
          </li>
          <li>Online Payment: Visit our website and click on the "Donate" button.</li>
          <li>In-Kind Donations: We accept toys, books, and educational materials.</li>
        </ul>
        <h1>Contact Us for More Information</h1>
        <button className ="contactus-button" onClick={() => window.location.href = '/events'}>Contact Us</button>
        </div>
        </div>
        <Footer />
        </div>
      
  );
}
export default Donateus;