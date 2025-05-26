import React, { useState } from 'react';
import './Stylings/Donateus.css';
import Navbar from '../components/Navbar/Navbar.jsx'; 
import Footer from '../components/Footer/Footer.jsx';

const DonateUs = () => {
  const [donationAmount, setDonationAmount] = useState('');
  const [customAmount, setCustomAmount] = useState('');
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [message, setMessage] = useState('');
  const [paymentMethod, setPaymentMethod] = useState('credit-card');
     <Navbar />
  const handleSubmit = (e) => {
    e.preventDefault();
    // Here you would typically connect to a payment processor
    console.log({
      amount: donationAmount === 'other' ? customAmount : donationAmount,
      name,
      email,
      message,
      paymentMethod
    });
    alert('Thank you for your donation!');
    // Reset form
    setDonationAmount('');
    setCustomAmount('');
    setName('');
    setEmail('');
    setMessage('');
    setPaymentMethod('credit-card');
  };

  return (
    
    <div className="donate-us-container">
      <div className="donate-header">
        <h1>Support Our Cause</h1>
        <p>Your donation helps us continue our important work. Every contribution makes a difference!</p>
      </div>

      <div className="donate-content">
        <div className="donation-options">
          <h2>Quick Donation Amounts</h2>
          <div className="amount-buttons">
            {['10', '25', '50', '100', 'other'].map((amount) => (
              <button
                key={amount}
                className={`amount-btn ${donationAmount === amount ? 'selected' : ''}`}
                onClick={() => {
                  setDonationAmount(amount);
                  if (amount !== 'other') setCustomAmount('');
                }}
              >
                {amount === 'other' ? 'Other' : `$${amount}`}
              </button>
            ))}
          </div>

          {donationAmount === 'other' && (
            <div className="custom-amount">
              <label htmlFor="customAmount">Enter Custom Amount ($)</label>
              <input
                type="number"
                id="customAmount"
                value={customAmount}
                onChange={(e) => setCustomAmount(e.target.value)}
                min="1"
              />
            </div>
          )}

          <div className="payment-methods">
            <h3>Payment Method</h3>
            <div className="payment-options">
              <label>
                <input
                  type="radio"
                  name="paymentMethod"
                  value="credit-card"
                  checked={paymentMethod === 'credit-card'}
                  onChange={() => setPaymentMethod('credit-card')}
                />
                Credit Card
              </label>
              <label>
                <input
                  type="radio"
                  name="paymentMethod"
                  value="paypal"
                  checked={paymentMethod === 'paypal'}
                  onChange={() => setPaymentMethod('paypal')}
                />
                PayPal
              </label>
              <label>
                <input
                  type="radio"
                  name="paymentMethod"
                  value="bank-transfer"
                  checked={paymentMethod === 'bank-transfer'}
                  onChange={() => setPaymentMethod('bank-transfer')}
                />
                Bank Transfer
              </label>
            </div>
          </div>
        </div>

        <form className="donation-form" onSubmit={handleSubmit}>
          <h2>Donation Information</h2>
          
          <div className="form-group">
            <label htmlFor="name">Full Name</label>
            <input
              type="text"
              id="name"
              value={name}
              onChange={(e) => setName(e.target.value)}
              required
            />
          </div>

          <div className="form-group">
            <label htmlFor="email">Email Address</label>
            <input
              type="email"
              id="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
            />
          </div>

          <div className="form-group">
            <label htmlFor="message">Message (Optional)</label>
            <textarea
              id="message"
              value={message}
              onChange={(e) => setMessage(e.target.value)}
              rows="3"
            />
          </div>

          <div className="donation-summary">
            <h3>Your Donation</h3>
            <p>
              Amount: $
              {donationAmount === 'other'
                ? customAmount || '0'
                : donationAmount || '0'}
            </p>
          </div>

          <button type="submit" className="submit-donation">
            Donate Now
          </button>
        </form>
      </div>
      <Footer />
    </div>
  );
};

export default DonateUs;