// AdminRegistration.js
import React, { useState } from 'react';
import Navbar from './Navbar'; // import Navbar
import './AdminLogin.css';

function StudentLogin() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    password: '',
  });

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Handle form submission logic here
  };

  return (
  
    <div className="container">
    <section>
    <Navbar />  
    </section> 
    <section className='form_section'>
       <form onSubmit={handleSubmit} className="form-content">
        <h2>Student Login</h2>
        
        <label htmlFor="name">Name:</label>
        <input type="text" id="name" name="name" value={formData.name} onChange={handleChange} required />
        
        <label htmlFor="email">Email:</label>
        <input type="email" id="email" name="email" value={formData.email} onChange={handleChange} required />
        
        <label htmlFor="password">Password:</label>
        <input type="password" id="password" name="password" value={formData.password} onChange={handleChange} required />
        
       
        <button type="submit">Register</button>
      </form>
      
      </section>
      {/*<footer className="footer">
        <p>© 2024 Our Education Platform</p>
      </footer>*/}
    </div>
  );
}

export default StudentLogin;
