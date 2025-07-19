import React, { useState, useEffect } from 'react';
import '../styles/Donate.css';
import qr from '../assets/qr-code.png';
import confetti from 'canvas-confetti';
import { jsPDF } from 'jspdf';
import emailjs from 'emailjs-com';
import { useNavigate } from 'react-router-dom';

const Donate = () => {
  const [formSubmitted, setFormSubmitted] = useState(false);
  const [panError, setPanError] = useState('');
  const [emailSent, setEmailSent] = useState(false);
  const [formData, setFormData] = useState({
    name: '',
    pan: '',
    phone: '',
    email: ''
  });

  const navigate = useNavigate();

  useEffect(() => {
    if (emailSent) {
      const timer = setTimeout(() => {
        navigate('/');
      }, 5000);
      return () => clearTimeout(timer);
    }
  }, [emailSent, navigate]);

  const validatePAN = (pan) => /^[A-Z]{5}[0-9]{4}[A-Z]$/.test(pan.toUpperCase());

  const handleChange = (e) => {
    const { name, value } = e.target;
    const newValue = name === 'pan' ? value.toUpperCase() : value;

    setFormData((prev) => ({ ...prev, [name]: newValue }));
    if (name === 'pan') {
      setPanError(validatePAN(newValue) ? '' : 'PAN format must be like ABCDE1234F');
    }
  };

  const handleFormSubmit = (e) => {
    e.preventDefault();
    const { name, pan, phone, email } = formData;

    if (!name || !pan || !phone || !email) {
      alert('Please fill all fields.');
      return;
    }

    if (!validatePAN(pan)) {
      alert('Invalid PAN format. Example: ABCDE1234F');
      return;
    }

    setFormSubmitted(true);
    confetti({ particleCount: 150, spread: 70, origin: { y: 0.6 } });
  };

  const generatePDF = () => {
    const doc = new jsPDF();
    const date = new Date().toLocaleDateString();

    doc.setFontSize(18);
    doc.text("Mandava Science Foundation", 20, 20);
    doc.setFontSize(12);
    doc.text("Donation Receipt", 20, 35);
    doc.text(`Date: ${date}`, 20, 45);
    doc.text(`Name: ${formData.name}`, 20, 55);
    doc.text(`PAN: ${formData.pan}`, 20, 65);
    doc.text(`Phone: ${formData.phone}`, 20, 75);
    doc.text(`Email: ${formData.email}`, 20, 85);
    doc.text("UPI ID: mandava@upi", 20, 95);
    doc.text("Amount: ₹_________", 20, 105);
    doc.text("Thank you for your kind support.", 20, 120);

    return doc.output("blob");
  };

  const sendEmailReceipt = () => {
    const pdfBlob = generatePDF();
    const emailForm = new FormData();

    emailForm.append('user_name', formData.name);
    emailForm.append('user_email', formData.email);
    emailForm.append('message', `Thank you for your support to Mandava Science Foundation.`);
    emailForm.append('file', pdfBlob, 'Mandava-Receipt.pdf');

    emailjs.sendForm(
      'your_service_id',     // Replace with real ID
      'your_template_id',    // Replace with real ID
      emailForm,
      'your_public_key'      // Replace with real public key
    ).then(() => {
      setEmailSent(true);
      confetti({ particleCount: 100, spread: 60, origin: { y: 0.3 } });
    }, (error) => {
      alert('❌ Failed to send receipt: ' + error.text);
    });
  };

  return (
    <div className="donate-container">
      <section className="donate-hero">
        <h1>Donate to Mandava Science Foundation</h1>
        <p>Empowering lives through science, equity, and education for all.</p>
      </section>

      {!formSubmitted && !emailSent && (
        <form className="donation-form" onSubmit={handleFormSubmit}>
          <input type="text" name="name" placeholder="Name as per PAN" onChange={handleChange} required />
          <input type="text" name="pan" placeholder="PAN Card Number" maxLength="10" value={formData.pan} onChange={handleChange} required />
          {panError && <p className="error-msg">{panError}</p>}
          <input type="tel" name="phone" placeholder="Phone Number" onChange={handleChange} required />
          <input type="email" name="email" placeholder="Email Address" onChange={handleChange} required />
          <button type="submit" className="submit-btn">Proceed to Donate</button>
        </form>
      )}

      {formSubmitted && !emailSent && (
        <section className="qr-section">
          <div className="qr-card">
            <img src={qr} alt="Donate QR" className="qr-image" />
            <p className="upi-id">UPI ID: <span>mandava@upi</span></p>
            <button className="confirm-btn" onClick={sendEmailReceipt}>✅ I've Paid – Send My Receipt</button>
          </div>
        </section>
      )}

      {emailSent && (
        <section className="thankyou-section">
          <div className="thankyou-box">
            <h2>🎉 Thank you for your generous support!</h2>
            <p>Your receipt has been sent to <strong>{formData.email}</strong>.</p>
            <p>Redirecting you to the homepage in a few seconds...</p>
          </div>
        </section>
      )}
    </div>
  );
};

export default Donate;
