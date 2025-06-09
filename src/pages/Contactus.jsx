import Navbar from "../components/Navbar/Navbar";
import Footer from "../components/Footer/Footer";
import "./Stylings/Contactus.css";

const Contactus = () => {
  return (
    <div>
      <div className="contactus-background"></div>
      
    <div className="contactus-container">
      <Navbar />
      <div className="contactus-card">
        <h1>Visit Our Centre</h1>
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
        <h1>Send Feedback</h1>
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
      
    </div>

    <div className="contactus-map">
      <iframe
        title = "View Our Location"
        src = "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3962.7779645279293!2d79.92924897568054!3d6.674409621389811!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3ae2486e40ab72dd%3A0xc601f53029188b6c!2sTudawe%20Child%20Development%20Center!5e0!3m2!1sen!2slk!4v1749225084210!5m2!1sen!2slk" 
        style={{border:0}}
        allowfullscreen="" 
        loading="lazy" 
        referrerpolicy="no-referrer-when-downgrade">
        </iframe>
      </div>
      <Footer />
    </div>
  );
};

export default Contactus;