import React from 'react';
import logo from './images/logo.jpg';
import './About.css';
import { Link } from 'react-router-dom';

const About = () => {
  return (
    <div className="about-container">
      <h1>About Us</h1>
      <img src={logo} alt="Logo" />
      <h2>RescuSync</h2>
      <p>Real-Time Emergency Response and Guidance System</p>
      <h2>Contact Us</h2>
      <p>Email: contactus@gmail.com</p>
      <p>Phone: 123-456-7890</p>
      <h2>How to Use the App</h2>
      <ol>
        <li>Download and install the app from the app store.</li>
        <li>Create an account or log in if you already have one.</li>
        <li>Explore the app features and settings.</li>
        <li>Follow the guidelines for different emergency situations.</li>
        <li>Contact emergency services if needed.</li>
      </ol>
      <div className="home-button-container">
        <Link to="/home" className="home-button">Back to home👈</Link>
      </div>
    </div>
  );
}

export default About;
