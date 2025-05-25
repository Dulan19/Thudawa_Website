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
    
    // Simulate form submission
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
      
      {/* Floating Background Elements */}
      <div className="floating-shapes">
        <div className="shape shape-1"></div>
        <div className="shape shape-2"></div>
        <div className="shape shape-3"></div>
        <div className="shape shape-4"></div>
        <div className="shape shape-5"></div>
      </div>

      <div className="container py-5">
        {/* Header Section */}
        <div className="row justify-content-center mb-5">
          <div className="col-lg-8 text-center">
            <div className="header-content animate-fade-in">
              <h1 className="display-4 fw-bold mb-3 gradient-text">
                Get In Touch
              </h1>
              <p className="lead mb-4">
                We're here to support your child's development journey. 
                Reach out to us for consultations, programs, or any questions.
              </p>
              <div className="decorative-line"></div>
            </div>
          </div>
        </div>

        <div className="row g-5">
          {/* Contact Information */}
          <div className="col-lg-4">
            <div className="contact-info animate-slide-left">
              <div className="info-card mb-4">
                <div className="info-icon">
                  <i className="fas fa-map-marker-alt"></i>
                </div>
                <div className="info-content">
                  <h5>Visit Our Centre</h5>
                  <p>154, Central Road,<br /> Wadduwa</p>

                  <h5>Call Us</h5>
                  <p>+94 (38) 2296222<br />Mon-Fri: 7AM-PM</p>

                  <h5>Email Us</h5>
                  <p>thudawahome@gmail.com</p>

                  <h5>Operating Hours</h5>
                  <p>Monday - Sunday: 7:00 AM - 6:00 PM</p> 

                </div>
              </div>
            </div>
          </div>

          {/* Contact Form */}
          <div className="col-lg-8">
            <div className="contact-form animate-slide-right">
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

        {/* Additional Services Section */}
        {/* <div className="row mt-5">
          <div className="col-12">
            <div className="services-highlight animate-fade-in-up">
              <h3 className="text-center mb-4">How We Can Help Your Child</h3>
              <div className="row g-4">
                <div className="col-md-3">
                  <div className="service-item">
                    <div className="service-icon">
                      <i className="fas fa-child"></i>
                    </div>
                    <h6>Early Development</h6>
                    <p>Supporting crucial early years development</p>
                  </div>
                </div>
                <div className="col-md-3">
                  <div className="service-item">
                    <div className="service-icon">
                      <i className="fas fa-brain"></i>
                    </div>
                    <h6>Cognitive Skills</h6>
                    <p>Enhancing thinking and learning abilities</p>
                  </div>
                </div>
                <div className="col-md-3">
                  <div className="service-item">
                    <div className="service-icon">
                      <i className="fas fa-users"></i>
                    </div>
                    <h6>Social Skills</h6>
                    <p>Building confidence and social connections</p>
                  </div>
                </div>
                <div className="col-md-3">
                  <div className="service-item">
                    <div className="service-icon">
                      <i className="fas fa-heart"></i>
                    </div>
                    <h6>Emotional Support</h6>
                    <p>Nurturing emotional wellbeing and growth</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div> */}
      </div>
      
      
    </div>
      <Footer />
    </div>
  );
};

export default ContactUs;