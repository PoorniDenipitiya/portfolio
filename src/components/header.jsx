import React, { useState } from 'react';
import './header.css';  // Importing the Header-specific CSS

const CustomHeader = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
  };

  return (
    <header className="custom-header">
      <div className="logo">
        <a href="#logo">
          POORNI.
        </a>
        </div>
      <div className={`nav-menu ${menuOpen ? 'open' : ''}`}>
        <ul>
          <li><a href="#education">Education</a></li>
          <li><a href="#skills">Skills</a></li>
          <li><a href="#projects">Projects</a></li>
          <li><a href="#highlights">Highlights</a></li>
          <li><a href="#contact">Contact</a></li>
        </ul>
      </div>
      <div className="menu-icon" onClick={toggleMenu}>
        <div className={`bar ${menuOpen ? 'open' : ''}`}></div>
        <div className={`bar ${menuOpen ? 'open' : ''}`}></div>
        <div className={`bar ${menuOpen ? 'open' : ''}`}></div>
      </div>
    </header>
  );
};

export default CustomHeader;
