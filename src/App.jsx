import React from 'react';
import Navbar from './components/Navbar';
import LoginSignup from './pages/LoginSignup';
import HomePage from './pages/HomePage';
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
      </Routes>
    </Router>
  
  );
}

export default App;

