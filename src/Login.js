// src/Login.js
import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { FaEye, FaEyeSlash, FaUser, FaLock } from 'react-icons/fa';
import './Login.css';

const Login = () => {
  const [passwordVisible, setPasswordVisible] = useState(false);
  const navigate = useNavigate();

  const handleCreateAccount = () => {
    navigate('/register');
  };

  const togglePasswordVisibility = () => {
    setPasswordVisible(!passwordVisible);
  };

  return (
    <div className="login-container">
      <div className="login-box">
        <div className="header">
          <h2>Welcome To the website</h2>
          <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
          <button className="create-account" onClick={handleCreateAccount}>CREATE ACCOUNT</button>
        </div>
        <div className="user-login">
          <h3>USER LOGIN</h3>
          <div className="input-container">
            <div className="input-field">
              <FaUser style={{ position: 'absolute', marginLeft: '10px', marginTop: '10px' }} />
              <input type="text" placeholder="Username" className="input-field" style={{ paddingLeft: '40px' }} />
            </div>
            <div className="password-container">
              <FaLock style={{ position: 'absolute', marginLeft: '10px', marginTop: '10px' }} />
              <input
                type={passwordVisible ? "text" : "password"}
                placeholder="Password"
                className="input-field"
                style={{ paddingLeft: '40px' }}
              />
              <span className="password-toggle-icon" onClick={togglePasswordVisibility}>
                {passwordVisible ? <FaEye /> : <FaEyeSlash />}
              </span>
            </div>
          </div>
          <div className="options">
            <label style={{ color: '#ff3385'}}>
              <input type="checkbox"/>
              Remember
            </label>
            <a href="/" className="forgot-password">Forgot password?</a>
          </div>
          <button className="login-button">LOGIN</button>
        </div>
      </div>
    </div>
  );
};

export default Login;
