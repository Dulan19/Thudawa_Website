import Navbar from "../components/Navbar/Navbar";
import Footer from "../components/Footer/Footer";
import "./Stylings/Contactus.css";

const Contactus = () => {
  return (
    <div className="contactus-container">
      <Navbar />
      <div className="contactus-card">
        <h2>Visit Our Centre</h2>
        <h2>Address</h2>
        <p>
          154, Center Road,<br />
          Wadduwa</p>

        <h2>Call Us</h2>
        <p>
          +94 (38) 2296222<br />
          Mon-Fri: 7AM-6PM</p>

        <h2>Email Us</h2>
        <p>thudawahome@gmail.com</p>

        <h2>Operating Hours</h2>
        <p>Monday - Sunday: 7:00 AM - 6:00 PM</p>  
      </div>

      <div className ="contactus-card">
        <h2>Contact Form</h2>
        <form>
          <div className="form-group">
            <label htmlFor="name">Name</label>
            <input type="text" id="name" name="name" required />
          </div>
          <div className="form-group">
            <label htmlFor="email">Email</label>
            <input type="email" id="email" name="email" required />
          </div>
          <div className="form-group">
            <label htmlFor="message">Message</label>
            <textarea id="message" name="message" rows="4" required></textarea>
          </div>
          <button type="submit">Send Message</button>
        </form>
        </div>
      <Footer />
    </div>

  );
};

export default Contactus;