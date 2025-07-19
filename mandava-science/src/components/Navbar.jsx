import React, { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import '../styles/navbar.css';
import logo from '../assets/manlogo.png';

const Navbar = () => {
  const location = useLocation();
  const [menuOpen, setMenuOpen] = useState(false);

  const isActive = (path) => location.pathname === path ? 'active' : '';

  const toggleMenu = () => setMenuOpen(!menuOpen);

  const handleLinkClick = () => setMenuOpen(false);

  return (
    <header className="navbar">
      <div className="navbar-content">
        <div className="navbar-brand">
          <img src={logo} alt="Mandava Logo" className="navbar-logo" />
          <h1 className="navbar-title">Mandava Science Foundation</h1>
        </div>

        {/* Hamburger toggle */}
        <button
          className={`navbar-toggle ${menuOpen ? 'open' : ''}`}
          onClick={toggleMenu}
          aria-label="Toggle navigation menu"
        >
          <span className="bar"></span>
          <span className="bar"></span>
          <span className="bar"></span>
        </button>

        {/* Navigation Menu */}
        <nav className={`navbar-menu ${menuOpen ? 'active' : ''}`}>
          <Link to="/" className={isActive('/')} onClick={handleLinkClick}>Home</Link>
          <Link to="/who-we-are" className={isActive('/who-we-are')} onClick={handleLinkClick}>Who We Are</Link>
          <Link to="/Beliefs" className={isActive('/Beliefs')} onClick={handleLinkClick}>Beliefs</Link>
          <Link to="/projects" className={isActive('/projects')} onClick={handleLinkClick}>Projects</Link>
          <Link to="/participate" className={isActive('/participate')} onClick={handleLinkClick}>Participate</Link>
          <Link to="/gallery" className={isActive('/gallery')} onClick={handleLinkClick}>Gallery</Link>
          <Link to="/donate" className={`donate-btn ${isActive('/donate')}`} onClick={handleLinkClick}>Donate</Link>
        </nav>
      </div>
    </header>
  );
};

export default Navbar; 