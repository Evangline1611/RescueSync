import React from 'react';
import './WelcomePage.css';
import { NavLink } from "react-router-dom";
import logo from './images/logo.jpg';

export const WelcomePage = () => {
  return (
    <div className="container" style={{ backgroundColor: '#000000' }}>
      <div className="logo-container">
        <img src={logo} alt="Logo" />
      </div>
      <div className="welcome-container" style={{ backgroundColor: '#000000' }}>
        <h1 className="title">Welcome to RescueSync</h1>
        <br />
        <p className="subtitle">Your emergency response companion</p>
        <br />
        <NavLink to="/signup">Sign-up</NavLink>
        <br />
        <NavLink to="/login">Login</NavLink>
      </div>
    </div>
  );
}

export default WelcomePage;
