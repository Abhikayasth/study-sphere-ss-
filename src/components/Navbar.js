// Navbar.js
import React from 'react';
import { useNavigate } from 'react-router-dom';
import './Navbar.css';
import AdminRegistration from './AdminRegistration'; // import AdminRegistration

function Navbar() {
  const navigate = useNavigate();

  const handleAdminRegistration = () => {
    navigate('/adminregister'); // redirect to admin registration page
  };

  const handleStudentRegistration = () => {
    navigate('/studentregister'); // redirect to student registration page
  };

  const handleHome = () => {
    navigate('/Home'); // redirect to home page
  };

  const handleAbout_Us = () => {
    navigate('/About_us'); // redirect to about us page
  };

  return (
    <nav className='navbar'>
      <div className="navbar-left">
        <h1>Study Sphere</h1>
      </div>
      <div className="navbar-right">
        <button onClick={handleHome} className="navbar-link">Home</button> 
        <button onClick={handleAdminRegistration} className="navbar-link">Admin Register</button>
        <button onClick={handleStudentRegistration} className="navbar-link">Student Register</button>
        <button onClick={handleAbout_Us} className="navbar-link">About Us</button>
      </div>
      <div style={{clear: 'both'}}></div>
    </nav>
  );
}

export default Navbar;
