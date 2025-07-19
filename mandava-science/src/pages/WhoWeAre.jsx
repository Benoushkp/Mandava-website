import React from 'react';
import '../styles/WhoWeAre.css';
import logo from '../assets/manlogo.png';
import founderImage from '../assets/founder.jpg';
import bgVision from '../assets/vision.jpg';
import bgMission from '../assets/mission.jpg';
import bgBeliefs from '../assets/values.jpg';
import bgAchievements from '../assets/impact.jpg';

const WhoWeAre = () => {
  return (
    <div className="who-container">
      {/* Hero Section */}
      <section className="hero-banner">
        <img src={logo} alt="Mandava Logo" className="who-logo" />
        <h1>Who We Are</h1>
        <p>Empowering India and the Globe through Social Justice, Economic Self-Respect, and National Service</p>
      </section>

      {/* Vision Section */}
      <section className="section full-bg" style={{ backgroundImage: `url(${bgVision})` }}>
        <div className="section-overlay">
          <h2>Our Vision</h2>
          <p>
            To build a socially just nation by ensuring free education, healthcare, and transport — fostering youth leadership and entrepreneurial spirit grounded in scientific temper.
          </p>
        </div>
      </section>

      {/* Mission Section */}
      <section className="section full-bg" style={{ backgroundImage: `url(${bgMission})` }}>
        <div className="section-overlay">
          <h2>Our Mission</h2>
          <p>
            We educate and empower individuals to realize their potential and assert their right to equity. Through partnerships with institutions, we promote entrepreneurship, innovation, and local governance.
          </p>
        </div>
      </section>

      {/* Beliefs Section */}
      <section className="section full-bg" style={{ backgroundImage: `url(${bgBeliefs})` }}>
        <div className="section-overlay">
          <h2>Our Core Beliefs</h2>
          <ul>
            <li>Free education, healthcare, and mass transportation for all</li>
            <li>Innovation-driven incubation cells — including humanities</li>
            <li>Entrepreneurship as a right, not a privilege</li>
            <li>Empowering through a sovereign wealth model</li>
            <li>Tech-based local governance for participatory democracy</li>
          </ul>
        </div>
      </section>

      {/* Achievements Section */}
      <section className="section full-bg" style={{ backgroundImage: `url(${bgAchievements})` }}>
        <div className="section-overlay">
          <h2>Recent Achievements</h2>
          <ul>
            <li> Completed 17 Lakh+ Free Comprehensive Health Checkup, contributing to the Ayushman Bharat Digital Mission</li>
            <li>Key policy contribution to the country's free mass transport initiative, enabling people movement & commerce</li>
            <li>Sponsored technical education for underprivileged girls</li>
            <li>Launched India's first Humanities Incubation Center at Christ University, Bangalore</li>
            <li>Distributed 1 Lakh+ copies of the Preamble of the Indian Constitution to citizens</li>
            <li>Supported startups and entrepreneurs in enabling the start-up ecosystems and the needed support</li>
            <li>Have contributed significantly in the research and analysis for the State Planning Commissions for the State of TN, State of Punjab.</li>
          </ul>
        </div>
      </section>

      {/* Founder Letter */}
      <section className="section founder">
        <img src={founderImage} alt="Founder Daniel Prashanth" className="founder-img" />
        <div className="founder-text">
          <h2>Message from Our Founder</h2>
          <p>
            “As we approach 100 years of independence, our mission is clear — contribute to nation-building through scientific principles and inclusive innovation. We dedicate our work to every citizen striving to uplift themselves and others.”
          </p>
          <strong>– Daniel Prashanth<br />Founder & Managing Trustee</strong>
        </div>
      </section>
    </div>
  );
};

export default WhoWeAre;
