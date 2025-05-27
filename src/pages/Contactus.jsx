import React, { useState } from 'react';
import './Stylings/Contactus.css';
import Navbar from '../components/Navbar/Navbar.jsx'; 
import Footer from '../components/Footer/Footer.jsx';

const ContactUs = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    subject: '',
    message: ''
  });

  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    setTimeout(() => {
      setIsSubmitting(false);
      alert('Thank you for your message! We will get back to you soon.');
      setFormData({
        name: '',
        email: '',
        phone: '',
        subject: '',
        message: ''
      });
    }, 2000);
  };

  return (
    <div>
      <Navbar />
      <div className="contact-us-page">
        <div className="container py-5">
          {/* Header Section */}
          <div className="row justify-content-center mb-5">
            <div className="col-lg-8 text-center">
              <div className="header-content">
                <h1 className="display-4 fw-bold mb-3 gradient-text">
                  Get In Touch
                </h1>
                <div className="decorative-line"></div>
              </div>
            </div>
          </div>

          <div className="row g-4">
            {/* Left Card - Visit Our Centre */}
            <div className="col-lg-6">
              <div className="info-card">
                <h3 className="mb-4">Visit Our Centre</h3>
                <div className="info-content">
                  <div className="info-item">
                    <div className="info-icon">
                      <i className="fas fa-map-marker-alt"></i>
                    </div>
                    <div>
                      <h5>Address</h5>
                      <p>154, Central Road,<br /> Wadduwa</p>
                    </div>
                  </div>

                  <div className="info-item">
                    <div className="info-icon">
                      <i className="fas fa-phone"></i>
                    </div>
                    <div>
                      <h5>Call Us</h5>
                      <p>+94 (38) 2296222<br />Mon-Fri: 7AM-6PM</p>
                    </div>
                  </div>

                  <div className="info-item">
                    <div className="info-icon">
                      <i className="fas fa-envelope"></i>
                    </div>
                    <div>
                      <h5>Email Us</h5>
                      <p>thudawahome@gmail.com</p>
                    </div>
                  </div>

                  <div className="info-item">
                    <div className="info-icon">
                      <i className="fas fa-clock"></i>
                    </div>
                    <div>
                      <h5>Operating Hours</h5>
                      <p>Monday - Sunday: 7:00 AM - 6:00 PM</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Right Card - Send Us a Message */}
            <div className="col-lg-6">
              <div className="form-container">
                <h3 className="mb-4">Send Us a Message</h3>
                  <form onSubmit={handleSubmit}>
                    <div className="row">
                      <div className="col-md-6 mb-3">
                        <div className="form-group">
                          <input
                            type="text"
                            className="form-control custom-input"
                            name="name"
                            value={formData.name}
                            onChange={handleChange}
                            required
                          />
                          <label className="form-label">Full Name *</label>
                        </div>
                      </div>
                      <div className="col-md-6 mb-3">
                        <div className="form-group">
                          <input
                            type="email"
                            className="form-control custom-input"
                            name="email"
                            value={formData.email}
                            onChange={handleChange}
                            required
                          />
                          <label className="form-label">Email Address *</label>
                        </div>
                      </div>
                    </div>
                    
                    <div className="row">
                      <div className="col-md-6 mb-3">
                        <div className="form-group">
                          <input
                            type="tel"
                            className="form-control custom-input"
                            name="phone"
                            value={formData.phone}
                            onChange={handleChange}
                          />
                          <label className="form-label">Phone Number</label>
                        </div>
                      </div>
                      <div className="col-md-6 mb-3">
                        <div className="form-group">
                          <select
                            className="form-control custom-input"
                            name="subject"
                            value={formData.subject}
                            onChange={handleChange}
                            required
                          >
                            <option value="">Select Subject *</option>
                            <option value="consultation">Initial Consultation</option>
                            <option value="programs">Development Programs</option>
                            <option value="assessment">Child Assessment</option>
                            <option value="support">Family Support</option>
                            <option value="other">Other Inquiry</option>
                          </select>
                          <label className="form-label">Subject *</label>
                        </div>
                      </div>
                    </div>

                    <div className="mb-4">
                      <div className="form-group">
                        <textarea
                          className="form-control custom-input"
                          name="message"
                          rows="5"
                          value={formData.message}
                          onChange={handleChange}
                          required
                        ></textarea>
                        <label className="form-label">Your Message *</label>
                      </div>
                    </div>

                    <button 
                      type="submit" 
                      className="btn custom-btn w-100"
                      disabled={isSubmitting}
                    >
                      {isSubmitting ? (
                        <>
                          <span className="spinner-border spinner-border-sm me-2"></span>
                          Sending Message...
                        </>
                      ) : (
                        <>
                          Send Message
                          <i className="fas fa-paper-plane ms-2"></i>
                        </>
                      )}
                    </button>
                </form>
              </div>
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default ContactUs;