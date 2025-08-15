import React from 'react';

const HowItWorks = () => {
  return (
    <div className="how-it-works">
      <div className="section-header">
        <h2>How the system Works</h2>
        <p>Your adventure starts with just a few simple steps</p>
      </div>
      
      <div className="steps-container">
        <div className="step-card">
          <div className="step-number">1</div>
          <h3>Choose Your Trek</h3>
          <p>Select hiking routes worldwide or create your own trip plan.</p>
        </div>
        {/* Repeat for other steps */}
      </div>
    </div>
  );
};

export default HowItWorks;

