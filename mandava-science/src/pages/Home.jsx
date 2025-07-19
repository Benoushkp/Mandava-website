import React from 'react';
import '../styles/Home.css';
import logo from '../assets/manlogo.png'; // Your logo file
import videoBg from '../assets/science-bg1.mp4'; // HD science video in /assets

const Home = () => {
  return (
    <div className="home-container">
      <video className="bg-video" autoPlay loop muted playsInline>
        <source src={videoBg} type="video/mp4" />
        Your browser does not support the video tag.
      </video>

      <div className="hero-overlay">
        <div className="hero-content">
          <img src={logo} alt="Mandava Logo" className="hero-logo" />
          <h1>Mandava Science Foundation</h1>
          <p>Empowering India and the Globe through Science, Innovation, and Equity</p>
          <div className="hero-buttons">
            <a href="/who-we-are" className="btn primary">Who We Are</a>
            <a href="/donate" className="btn secondary">Donate Now</a>
          </div>
        </div>
      </div>

      <section className="pillars-section">
        <h2>Our Core Pillars</h2>
        <div className="pillars-grid">
          <div className="pillar-card">
            <h3>Social Justice</h3>
            <p>Free access to education, health, and science for every citizen.</p>
          </div>
          <div className="pillar-card">
            <h3>Economic Self-Respect</h3>
            <p>Empowering local innovators and scientific entrepreneurs.</p>
          </div>
          <div className="pillar-card">
            <h3>Love for the Nation</h3>
            <p>Celebrating knowledge, culture, and civic technology.</p>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Home;
