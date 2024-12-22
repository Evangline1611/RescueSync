import React from 'react';
import { Link } from 'react-router-dom'; // Import Link from react-router-dom
import './flood.css';

const Flood = () => {
  return (
    <div>
      <header>
        <h1 className='header'>Flood Guidelines</h1>
      </header>
      <section>
      <h2 className='doesanddonts' style={{ display: 'inline-block', textAlign: 'center', color: '#f1e696' }}>Do's and Dont's During Flood</h2>
        <br></br>
      </section>
      <div className="home-button-container">
        <Link to="/home" className="home-button">Back to home👈</Link>
      </div>
      {/* Buttons with image backgrounds */}
      <div className="button-container">
        <Link to="/inside">
          <button className="inside-button">
          <span className="button-text">Inside House</span>
          </button>
        </Link>
        <Link to="/outside">
          <button className="outside-button">
          <span className="button-text">Outside House</span>
          </button>
        </Link>
      </div>
    </div>
  );
};

export default Flood;
