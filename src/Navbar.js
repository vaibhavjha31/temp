// Navbar.js
import React from 'react';
import Logo from './Logo';
import CompanyName from './CompanyName';
import LoginButton from './LoginButton';
import './Navbar.css'; // Import the CSS for Navbar

function Navbar() {
  return (
    <div className="navbar">
      <div className="left-section">
        <Logo />
        <CompanyName name="LegalHub" />
      </div>
      <div className="right-section">
        <LoginButton />
      </div>
    </div>
  );
}

export default Navbar;
