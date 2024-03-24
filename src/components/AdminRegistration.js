// AdminRegistration.js
import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import Navbar from './Navbar'; // import Navbar
import './AdminRegistration.css';

function AdminRegistration() {
  const navigate = useNavigate();
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    password: '',
    phone_no: '',
    subject: '',
    year: '',
    semester: ''
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
    // If registration is successful, navigate to the admin panel
    navigate('/admin_panel');
  };

  return (
    <div className="container">
      <section>
        <Navbar />  
      </section> 
      <section className='form_section'>
        <form onSubmit={handleSubmit} className="form-content">
          <h2>Admin Registration</h2>
          <label htmlFor="name">Name:</label>
        <input type="text" id="name" name="name" value={formData.name} onChange={handleChange} required />
        
        <label htmlFor="email">Email:</label>
        <input type="email" id="email" name="email" value={formData.email} onChange={handleChange} required />
        
        <label htmlFor="password">Password:</label>
        <input type="password" id="password" name="password" value={formData.password} onChange={handleChange} required />
        
        <label htmlFor="phone_no">Phone No:</label>
        <input type="phone_no" id="phone_no" name="phone_no" value={formData.phone_no} onChange={handleChange} required />

        <label htmlFor="subject">Subject:</label>
        <input type="text" id="subject" name="subject" value={formData.subject} onChange={handleChange} required />

        <label htmlFor="year">Year Of Teaching:</label>
        <input type="year" id="year" name="year" value={formData.year} onChange={handleChange} required />

        <label htmlFor="semester">Semester of Teaching:</label>
        <input type="semester" id="semester" name="semester" value={formData.semester} onChange={handleChange} required />

          <button type="submit">Register</button>
        </form>
      </section>
      {/*<footer className="footer">
        <p>© 2024 Our Education Platform</p>
      </footer>*/}
    </div>
  );
}

export default AdminRegistration;

