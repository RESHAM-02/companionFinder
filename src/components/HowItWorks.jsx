import React from 'react';

const PopularDestinations = () => {
  return (
    <div className="destinations-section">
      <div className="section-header">
        <h2>Popular Trekking Destinations</h2>
        <p>Explore hiking locations where you can find companions</p>
      </div>
      
      <div className="destinations-grid">
        <div className="destination-card">
          <div className="card-image">
            <img 
            src="/images/annapurna1.jpg" 
            alt="Annapurna circut trek" />

            <img
            src="/images/annapurna2.jpg" 
            alt="Annapurna circut trek" />
          
          </div>
          <div className="card-content">
            <h3>Annapurna Basecamp Trek</h3>
            <p className="description">15-day trek to Annapurna circuit</p>
            <div className="card-footer">
              <span>12 companions available</span>
              <button>View</button>
            </div>
          </div>
        </div>
        {/* Repeat for other destination cards */}
      </div>
    </div>
  );
};

export default PopularDestinations;
