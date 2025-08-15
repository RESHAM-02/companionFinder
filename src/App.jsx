import React from 'react';
import Navbar from './components/Navbar';
import LoginSignup from './pages/LoginSignup';
import HomePage from './pages/HomePage';
import HowItWorks from './components/HowItWorks';
import Map from './pages/Map'; 
import './styles/App.css';
import './styles/Chat.css';
import './styles/Navbar.css';

import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
// ...existing code...
function App() {
    return (
    <Router>
      <Navbar />
      <Routes>
        <Route path="/home" element={<HomePage />} />
        <Route path="/login" element={<LoginSignup />} />
        <Route path="/how-it-works" element={<HowItWorks />} />
        <Route path="/direct-to-map" element={<Map />} />
      </Routes>
    </Router>
  
  );
}

export default App;

