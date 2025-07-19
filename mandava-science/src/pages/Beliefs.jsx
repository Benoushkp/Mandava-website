import React from 'react';
import '../styles/Beliefs.css';
import bgBeliefs from '../assets/values.png'; // UHD beliefs background

const Beliefs = () => {
  return (
    <div className="beliefs-page">
      {/* Banner */}
      <section
        className="beliefs-banner"
        style={{ backgroundImage: `url(${bgBeliefs})` }}
      >
        <div className="overlay">
          <h1>Our Core Beliefs</h1>
          <p>
            Rooted in India’s Constitution, our beliefs guide us toward building a socially just, scientifically advanced, and self-reliant nation.
          </p>
        </div>
      </section>

      {/* Beliefs List */}
      <section className="beliefs-content">
        <h2>What We Believe</h2>
        <ul>
          <li>Free education, healthcare, and transport for all citizens.</li>
          <li>Grassroots entrepreneurship through educational incubation.</li>
          <li>Financial empowerment via a sovereign wealth fund model.</li>
          <li>Tech-based governance and participatory local democracy.</li>
          <li>Overcoming poverty and technological illiteracy nationwide.</li>
          <li>Constitutional awareness for every Indian — as a right and duty.</li>
        </ul>
      </section>

      {/* Core Pillars */}
      <section className="pillars-section">
        <h2>Our Core Pillars</h2>
        <div className="pillars-grid">
          <div className="pillar-card">
            <h3>Social Justice</h3>
            <p>Universal access to education, health, and mobility — because a just society is a strong nation.</p>
          </div>
          <div className="pillar-card">
            <h3>Economic Self-Respect</h3>
            <p>Empowering every citizen to innovate, create, and lead with dignity and purpose.</p>
          </div>
          <div className="pillar-card">
            <h3>Love for the Nation</h3>
            <p>Fostering civic pride, constitutional knowledge, and participation in democratic governance.</p>
          </div>
        </div>
      </section>

      {/* Quote */}
      <section className="beliefs-quote">
        <blockquote>
          “Belief without action is a dream. Our beliefs are rooted in transformation — through science, justice, and unity.”
        </blockquote>
        <cite>– Mandava Science Foundation</cite>
      </section>
    </div>
  );
};

export default Beliefs;
