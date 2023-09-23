// Logo.js
import React from 'react';

function Logo() {
  // Replace 'logo.png' with the actual filename of your logo image
  const logoPath = 'law.png';

  const logoStyle = {
    maxWidth: '100px', // Adjust the maximum width as needed
    maxHeight: '40px', // Adjust the maximum height as needed
    margin: '0 10px', // Add margin around the logo
    padding: '10px', // Add padding around the logo
  };

  return (
    <div className="logo">
      <img src={logoPath} alt="Logo" style={logoStyle} />
    </div>
  );
}

export default Logo;
