import React from 'react';

const Hero = () => {
  return (
    <div className="hero-section">
      <div className="hero-text">
        <h1>Find Your Perfect Companion</h1>
        <h4>Connect with like-minded adventurers for your next trek.</h4>
        
        <div className="search-box">
          <div className="search-field">
            <label>Destination</label>
            <input type="text" placeholder="Where to?" />
          </div>
          <div className="search-field">
            <label>Dates</label>
            <input type="text" placeholder="Select dates" />
          </div>
          <button className="search-btn">Find Companions</button>
        </div>
      </div>
      <div className="hero-image">
        <img  className="image"
          src="/images/companions.jpg" 
          alt="Group of hikers" 
        />
      </div>
    </div>
  );
};

export default Hero;