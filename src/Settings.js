import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import './Settings.css';

const Settings = () => {
  const [userData, setUserData] = useState({
    fullName: '',
    userName: '',
    userEmail: '',
    mobileNumber: '',
    userAddress: '',
    personOne: { name: '', email: '', mobileNumber: '' },
    personTwo: { name: '', email: '', mobileNumber: '' }
  });

  const [isEditing, setIsEditing] = useState(false);
  const [addingPersonOne, setAddingPersonOne] = useState(false);
const [addingPersonTwo, setAddingPersonTwo] = useState(false);
const [newPersonOne, setNewPersonOne] = useState({ name: '', email: '', mobileNumber: '' });
const [newPersonTwo, setNewPersonTwo] = useState({ name: '', email: '', mobileNumber: '' });


  useEffect(() => {
    fetchUserDataFromDatabase()
      .then(data => setUserData(data))
      .catch(error => console.error('Error fetching user data:', error));
  }, []);

  const fetchUserDataFromDatabase = async () => {
    try {
      const response = await fetch('http://localhost:3001/fetchUserData');
      if (!response.ok) {
        throw new Error('Failed to fetch user data');
      }
      const data = await response.json();
      return data[0]; // Assuming there is only one user, adjust if necessary
    } catch (error) {
      console.error('Error fetching user data:', error);
      throw error;
    }
  };

  const handleEdit = () => {
    setIsEditing(true);
  };

  const handleSave = async () => {
    try {
      const response = await fetch('http://localhost:3001/updateUserData', {
        method: 'PUT',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify(userData)
      });
      if (!response.ok) {
        throw new Error('Failed to update user data');
      }
      setIsEditing(false);
    } catch (error) {
      console.error('Error updating user data:', error);
    }
  };
  

  const handleCancelEdit = () => {
    fetchUserDataFromDatabase()
      .then(data => setUserData(data))
      .catch(error => console.error('Error fetching user data:', error));
    setIsEditing(false);
  };

  const handleChange = (field, value) => {
    setUserData(prevState => ({
      ...prevState,
      [field]: value,
      personOne: { ...prevState.personOne }, // Keep the existing personOne details
      personTwo: { ...prevState.personTwo }  // Keep the existing personTwo details
    }));
  };  

  const handleSavePersonOne = async () => {
    try {
      const response = await fetch('http://localhost:3001/updateUserData', {
        method: 'PUT',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify({ _id: userData._id, personOneName: newPersonOne.name, personOneEmail: newPersonOne.email, personOneMobileNumber: newPersonOne.mobileNumber })
      });
      if (!response.ok) {
        throw new Error('Failed to update user data');
      }
      setAddingPersonOne(false);
    } catch (error) {
      console.error('Error updating user data:', error);
    }
  };
  
  const handleSavePersonTwo = async () => {
    try {
      const response = await fetch('http://localhost:3001/updateUserData', {
        method: 'PUT',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify({ _id: userData._id, personTwoName: newPersonTwo.name, personTwoEmail: newPersonTwo.email, personTwoMobileNumber: newPersonTwo.mobileNumber })
      });
      if (!response.ok) {
        throw new Error('Failed to update user data');
      }
      setAddingPersonTwo(false);
    } catch (error) {
      console.error('Error updating user data:', error);
    }
  };  

  return (
    <div className="settings-container">
      <div className="home-button-container">
        <Link to="/home" className="home-button">Back to home👈</Link>
      </div>
      <h1>Settings</h1>
      {isEditing ? (
        <>
          <div className="form-group">
            <label htmlFor="fullName">Full Name:</label>
            <input
              type="text"
              id="fullName"
              value={userData.fullName}
              onChange={(e) => handleChange('fullName', e.target.value)}
            />
          </div>
          <div className="form-group">
            <label htmlFor="userName">User Name:</label>
            <input
              type="text"
              id="userName"
              value={userData.userName}
              onChange={(e) => handleChange('userName', e.target.value)}
            />
          </div>
          <div className="form-group">
            <label htmlFor="userEmail">Email:</label>
            <input
              type="email"
              id="userEmail"
              value={userData.userEmail}
              onChange={(e) => handleChange('userEmail', e.target.value)}
            />
          </div>
          <div className="form-group">
            <label htmlFor="mobileNumber">Mobile Number:</label>
            <input
              type="tel"
              id="mobileNumber"
              value={userData.mobileNumber}
              onChange={(e) => handleChange('mobileNumber', e.target.value)}
            />
          </div>
          <div className="form-group">
            <label htmlFor="userAddress">Address:</label>
            <input
              type="text"
              id="userAddress"
              value={userData.userAddress}
              onChange={(e) => handleChange('userAddress', e.target.value)}
            />
          </div>
          <div className="button-group">
            <button onClick={handleSave}>Save</button>
            <button onClick={handleCancelEdit}>Cancel</button>
          </div>
        </>
      ) : (
        <>
          <div className="form-group">
            <label>Full Name:</label>
            <div>{userData.fullName}</div>
          </div>
          <div className="form-group">
            <label>User Name:</label>
            <div>{userData.userName}</div>
          </div>
          <div className="form-group">
            <label>Email:</label>
            <div>{userData.userEmail}</div>
          </div>
          <div className="form-group">
            <label>Mobile Number:</label>
            <div>{userData.mobileNumber}</div>
          </div>
          <div className="form-group">
            <label>Address:</label>
            <div>{userData.userAddress}</div>
          </div>
          <div className="button-group">
            <button onClick={handleEdit}>Edit</button>
          </div>
        </>
      )}
      <div className="button-group">
      <button onClick={() => setAddingPersonOne(true)}>Add Trusted Person One</button>
      <button onClick={() => setAddingPersonTwo(true)}>Add Trusted Person Two</button>
    </div>
    {addingPersonOne && (
      <div>
        <h2>Add Trusted Person One</h2>
        <div className="form-group">
          <label htmlFor="personOneName">Name:</label>
          <input
            type="text"
            id="personOneName"
            value={newPersonOne.name}
            onChange={(e) => setNewPersonOne({ ...newPersonOne, name: e.target.value })}
          />
        </div>
        <div className="form-group">
          <label htmlFor="personOneEmail">Email:</label>
          <input
            type="email"
            id="personOneEmail"
            value={newPersonOne.email}
            onChange={(e) => setNewPersonOne({ ...newPersonOne, email: e.target.value })}
          />
        </div>
        <div className="form-group">
          <label htmlFor="personOneMobileNumber">Mobile Number:</label>
          <input
            type="tel"
            id="personOneMobileNumber"
            value={newPersonOne.mobileNumber}
            onChange={(e) => setNewPersonOne({ ...newPersonOne, mobileNumber: e.target.value })}
          />
        </div>
        <div className="button-group">
          <button onClick={handleSavePersonOne}>Save Person One</button>
          <button onClick={() => setAddingPersonOne(false)}>Cancel</button>
        </div>
      </div>
    )}
    {addingPersonTwo && (
      <div>
        <h2>Add Trusted Person Two</h2>
        <div className="form-group">
          <label htmlFor="personTwoName">Name:</label>
          <input
            type="text"
            id="personTwoName"
            value={newPersonTwo.name}
            onChange={(e) => setNewPersonTwo({ ...newPersonTwo, name: e.target.value })}
          />
        </div>
        <div className="form-group">
          <label htmlFor="personTwoEmail">Email:</label>
          <input
            type="email"
            id="personTwoEmail"
            value={newPersonTwo.email}
            onChange={(e) => setNewPersonTwo({ ...newPersonTwo, email: e.target.value })}
          />
        </div>
        <div className="form-group">
          <label htmlFor="personTwoMobileNumber">Mobile Number:</label>
          <input
            type="tel"
            id="personTwoMobileNumber"
            value={newPersonTwo.mobileNumber}
            onChange={(e) => setNewPersonTwo({ ...newPersonTwo, mobileNumber: e.target.value })}
          />
        </div>
        <div className="button-group">
          <button onClick={handleSavePersonTwo}>Save Person Two</button>
          <button onClick={() => setAddingPersonTwo(false)}>Cancel</button>
        </div>
      </div>
    )}
    </div>
  );
};

export default Settings;