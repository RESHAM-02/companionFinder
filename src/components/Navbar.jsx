import React from 'react';
import { Link } from "react-router-dom";
import { useNavigate } from 'react-router-dom';
import { BsChatDotsFill } from "react-icons/bs";
import { FaCircleUser } from "react-icons/fa6";
import { FaRegUserCircle } from "react-icons/fa";

const Navbar = () => {

    const navigate = useNavigate();

  const handleProfileClick = () => {
    navigate('/login');  //  Redirect to login/signup page
  };
   const handleHomePage = () => {
    navigate('/home');  //  Redirect to home page
  };
  const handleMap = () => {
    navigate('/direct-to-map'); // Redirect to map page
  };    
  
  return (
    <div className="navbar">
      <div className="navbar-brand">
        <img 
          src="https://placehold.co/40x40" 
          alt="Logo" 
          className="logo"
        />
        <span className="brand-name">CompanionFinder</span>
      </div>
      <div className="nav-links">
        <a href="#" className="nav-link active"onClick={handleHomePage}>Home</a>
        <a href="#" className="nav-link">Find Companions</a>
        <a href="#" className="nav-link">Trails</a>
        <Link to="/how-it-works" className="nav-link">About</Link>
        <Link to="/direct-to-map" className="nav-link"onClick={handleMap}>Open Map</Link>
        <a href="#" className="chat">Chat<BsChatDotsFill className="chat-icon" /> </a>
      </div>
      <div className="signin-btn"
        onClick={handleProfileClick}>
          <FaRegUserCircle className="log-icon"/>
      </div>
    </div>
  );
};

export default Navbar;
