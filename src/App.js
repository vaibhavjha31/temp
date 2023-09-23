import React from 'react';
import './App.css';
import Navbar from './Navbar';
import Footer from './Footer';

function App() {
  return (
    <div className="App">
      <Navbar />
      <h2>Find your Lawyer with us!</h2>
      <p></p>
      {/* Add the rest of your content here */}
      <Footer />
       {/* Include the Footer component */}
    </div>
  );
}

export default App;
