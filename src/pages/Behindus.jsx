import Card from 'react-bootstrap/Card';
import Container from 'react-bootstrap/Container';
import "./Stylings/Behindus.css";
import Navbar from '../components/Navbar/Navbar.jsx'; 
import Footer from '../components/Footer/Footer.jsx';

function Behindus() {
  return (
    <div>
        <div className="behindus-page">
          <Navbar />
          <Container className="py-5">
            <div className="row justify-content-center mb-5">
              <div className="col-lg-8 text-center">
                <div className="header-content">
                  <h1 className="display-4 fw-bold mb-3 gradient-text">
                    Behind Us
                  </h1>
                  <div className="decorative-line"></div>
                </div>
              </div>
            </div>

            <div className="row g-4">
              <div className="col-md-6">
                <Card>
                  <Card.Body>
                    <Card.Title>Our Mission</Card.Title>
                    <Card.Text>
                      To provide innovative solutions that empower individuals and businesses to achieve their goals.
                    </Card.Text>
                  </Card.Body>
                </Card>
              </div>
              <div className="col-md-6">
                <Card>
                  <Card.Body>
                    <Card.Title>Our Vision</Card.Title>
                    <Card.Text>
                      To be a leader in our industry, known for our commitment to excellence and customer satisfaction.
                    </Card.Text>
                  </Card.Body>
                </Card>
              </div>
            </div>

          </Container>
          <Footer />
    </div>
    </div>
  );
}

export default Behindus;

// Cards Container - Ensuring side by side layout
//           <div className="row g-4 align-items-stretch">
//             {/* Left Card - Visit Our Centre */}
//             <div className="col-lg-6 col-md-12">
//               <div className="info-card h-100">
//                 <h3 className="mb-4">Visit Our Centre</h3>
//                 <div className="info-content">
//                   <div className="info-item">
//                     <div className="info-icon">
//                       <i className="fas fa-map-marker-alt"></i>
//                     </div>
//                     <div>
//                       <h5>Address</h5>
//                       <p>154, Central Road,<br /> Wadduwa</p>
//                     </div>
//                   </div>

//                   <div className="info-item">
//                     <div className="info-icon">
//                       <i className="fas fa-phone"></i>
//                     </div>
//                     <div>
//                       <h5>Call Us</h5>
//                       <p>+94 (38) 2296222<br />Mon-Fri: 7AM-6PM</p>
//                     </div>
//                   </div>

//                   <div className="info-item">
//                     <div className="info-icon">
//                       <i className="fas fa-envelope"></i>
//                     </div>
//                     <div>
//                       <h5>Email Us</h5>
//                       <p>thudawahome@gmail.com</p>
//                     </div>
//                   </div>

//                   <div className="info-item">
//                     <div className="info-icon">
//                       <i className="fas fa-clock"></i>
//                     </div>
//                     <div>
//                       <h5>Operating Hours</h5>
//                       <p>Monday - Sunday: 7:00 AM - 6:00 PM</p>
//                     </div>
//                   </div>
//                 </div>
//               </div>
//             </div>
