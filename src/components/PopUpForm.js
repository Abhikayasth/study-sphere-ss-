// PopUpForm.js
import React from "react";
import { useNavigate } from "react-router-dom";
import "./PopUpForm.css";

function PopUpForm({ onClose }) {
  const navigate = useNavigate(); // initialize useNavigate

  const handleAdminLogin = () => {
    navigate("/Login"); // redirect to admin login page
  };

  const handleAdminRegistration = () => {
    navigate("/adminregister"); // redirect to admin registration page
  };

  const handleStudentLogin = () => {
    navigate("/Login1"); // redirect to student login page
  };

  const handleStudentRegistration = () => {
    navigate("/studentregister"); // redirect to student registration page
  };

  return (
    <div className="popup-form">
      <button className="close-button" onClick={onClose}>
        X
      </button>
      <form>
        <h2>Confirmation Page:</h2>
        <h3>For Admin:</h3>
        <h4>If you are new, Then,, Click Here!</h4>
        <button type="button" onClick={handleAdminRegistration}>
          Admin Register
        </button>
        <h4>If you have an already account, Then,, Click Here!</h4>
        <button type="button" onClick={handleAdminLogin}>
          Admin Login
        </button>
        
        <h3>For Student:</h3>
        <h4>If you are new, Then,, Click Here!</h4>
        <button type="button" onClick={handleStudentRegistration}>
          Student Register
        </button>
        <h4>If you have an already account, Then,, Click Here!</h4>
        <button type="button" onClick={handleStudentLogin}>
          Student Login
        </button>
      </form>
    </div>
  );
}

export default PopUpForm;
