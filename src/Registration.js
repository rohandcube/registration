// src/Registration.js
import React, { useState } from 'react';
import { FaEye, FaEyeSlash } from 'react-icons/fa';
import './Registration.css';

const Registration = () => {
  const [passwordVisible, setPasswordVisible] = useState(false);
  const [agreeTerms, setAgreeTerms] = useState(false);

  const togglePasswordVisibility = () => {
    setPasswordVisible(!passwordVisible);
  };

  const handleAgreeTermsChange = (e) => {
    setAgreeTerms(e.target.checked);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Add form submission logic here, including validation
    if (agreeTerms) {
      // Proceed with form submission
      console.log('Form submitted successfully');
    } else {
      alert('Please agree to the terms and conditions.');
    }
  };

  return (
    <div className="registration-container">
      <div className="registration-box">
        <h2>Registration Form</h2>
        <form onSubmit={handleSubmit}>
          <input type="text" placeholder="Name" required className="input-field" />
          <input type="email" placeholder="Email address" required className="input-field" />
          <input type="text" placeholder="Country" required className="input-field" />
          <input type="tel" placeholder="Phone" required className="input-field" />
          <div className="password-container">
            <input
              type={passwordVisible ? "text" : "password"}
              placeholder="Password"
              required
              className="input-field"
            />
            <span className="password-toggle-icon" onClick={togglePasswordVisibility}>
              {passwordVisible ? <FaEye /> : <FaEyeSlash />}
            </span>
          </div>
          <div className="agree-terms">
            <input
              type="checkbox"
              id="agreeTerms"
              checked={agreeTerms}
              onChange={handleAgreeTermsChange}
            />
            <label htmlFor="agreeTerms" style={{color: '#ff3385'}}>I agree to all terms and conditions </label>
          </div>
          <button type="submit" className="create-account-button">CREATE ACCOUNT</button>
        </form>
        <p>Already have an account? <a href="/login">Sign in</a></p>
      </div>
    </div>
  );
};

export default Registration;
