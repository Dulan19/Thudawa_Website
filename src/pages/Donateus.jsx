import Navbar from "../components/Navbar/Navbar";
import Footer from "../components/Footer/Footer";
import "./Stylings/Donateus.css";

const Donateus = () => {
  return (
    <div>
      <Navbar />
      <div className="donateus-container">
        <h1>Support Our Cause</h1>
        <p>Your contributions help us provide better care and facilities for the children at Tudawe Child Development Center.</p>
        <h2>How to Donate</h2>
        <ul>
          <li>Bank Transfer: Account No. 123456789, Bank Name: ABC Bank</li>
          <li>Online Payment: Visit our website and click on the "Donate" button.</li>
          <li>In-Kind Donations: We accept toys, books, and educational materials.</li>
        </ul>
        <h2>Contact Us for More Information</h2>
        <p>Email:</p>
        </div>
        <Footer />
        </div>
      
  );
}
export default Donateus;