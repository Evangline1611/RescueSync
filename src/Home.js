import React, { useState } from 'react';
import { Link } from 'react-router-dom'; 
import logo from './images/logo.jpg';
import './Home.css';
import fireImage from './images/fire.jpg';
import floodImage from './images/flood.jpeg';
import earthquakeImage from './images/earthquake.jpg';

const categories = [
    { id: 1, name: 'Fire', description: 'Guidelines for fire emergencies', image: fireImage },
    { id: 2, name: 'Flood', description: 'Guidelines for flood emergencies', image: floodImage },
    { id: 3, name: 'Earthquake', description: 'Guidelines for earthquake emergencies', image: earthquakeImage }
  ];

const HomePage = () => {
  const [searchQuery, setSearchQuery] = useState('');
  
  const handleSearch = () => {
    console.log('Searching for:', searchQuery);
  };

  const filteredCategories = categories.filter(category =>
    category.name.toLowerCase().includes(searchQuery.toLowerCase())
  );

  return (
    <div className="home-container">
      <div className="home-header">
        <div className="menu-bar">
          <img src={logo} alt="Logo" />
          <Link to="/profile">Profile</Link>
          <Link to="/settings">Settings</Link>
          <Link to="/about">About</Link>
        </div>
      </div>
      <div className="search-bar">
        <input
          type="text"
          placeholder="Search..."
          value={searchQuery}
          onChange={(e) => setSearchQuery(e.target.value)}
        />
        <button onClick={handleSearch}>🔍Search</button>
      </div>
      <div className="categories">
        <h2>Emergency Situations</h2>
        <ul>
          {filteredCategories.map(category => (
            <li key={category.id}>
              <Link to={`/${category.name.toLowerCase()}`}>
                <img src={category.image} alt={category.name} />
                <h3>{category.name}</h3>
              </Link>
              <p>{category.description}</p>
            </li>
          ))}
        </ul>
      </div>
      <div className="emergency-call">
        <Link to="/emergency">📞Emergency Call</Link>
      </div>
    </div>
  );
}

export default HomePage;