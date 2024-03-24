// App.js
import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import StudentRegistration from '../src/components/StudentRegistration.js';
import Home from '../src/components/Home.js';
import AboutUs from '../src/components/AboutUs.js';
import LandingPage from './components/LandingPage.js';
import AdminLogin from './components/AdminLogin.js';
import AdminRegistration from './components/AdminRegistration.js';
import StudentLogin from './components/StudentLogin.js';
import AdminPanel from './components/AdminPanel.js'; // import AdminPanel

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<LandingPage />} />
        <Route path="/home" element={<Home />} />
    
        <Route path="/About_us" element={<AboutUs />} />

        <Route path="/Login" element={<AdminLogin />} />
        <Route path="/Login1" element={<StudentLogin />} />
    
        <Route path="/Login" element={<AdminLogin />} />
        <Route path="/adminregister" element={<AdminRegistration />} />
        <Route path="/Login1" element={<StudentLogin />} />
        <Route path="/studentregister" element={<StudentRegistration />} />

        <Route path="/admin_panel" element={<AdminPanel />} /> {/* Add this line */}
      </Routes>
    </Router>
  );
}

export default App;
