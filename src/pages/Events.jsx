import Navbar from "../components/Navbar/Navbar";
import Footer from "../components/Footer/Footer";
import "./Stylings/Events.css";

const Events = () => {
  return (
    <div>
      <Navbar />
      <div className="events-container">
        <h1>Upcoming Events</h1>
        <p>Join us for our exciting events at Tudawe Child Development Center!</p>
        <ul>
          <li>
            <strong>Annual Fundraising Gala</strong> - Date: March 15, 2024
            <br />
            Join us for an evening of fun and fundraising to support our programs.
          </li>
          <li>
            <strong>Community Health Fair</strong> - Date: April 20, 2024
            <br />
            Free health screenings and wellness workshops for families in our community.
          </li>
          <li>
            <strong>Children's Art Exhibition</strong> - Date: May 10, 2024
            <br />
            Celebrate the creativity of our children with an exhibition of their artwork.
          </li>
        </ul>
        <h2>Get Involved</h2>
        <p>We welcome volunteers and sponsors for our events. Contact us for more details!</p>
      </div>
      <Footer />
    </div>
  );
}

export default Events;