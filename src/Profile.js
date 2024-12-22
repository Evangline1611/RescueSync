import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import './Profile.css';

const Profile = () => {
  const [userData, setUserData] = useState({});
  const [personOne, setPersonOne] = useState({});
  const [personTwo, setPersonTwo] = useState({});

  useEffect(() => {
    fetchUserDataFromDatabase();
  }, []);

  const fetchUserDataFromDatabase = async () => {
    try {
      const response = await fetch('http://localhost:3001/fetchUserData');
      if (!response.ok) {
        throw new Error('Failed to fetch user data');
      }
      const data = await response.json();
      if (data.length > 0) {
        setUserData(data[0]);
        if (data[0].personOneName) {
          setPersonOne({
            name: data[0].personOneName,
            email: data[0].personOneEmail,
            mobileNumber: data[0].personOneMobileNumber
          });
        }
        if (data[0].personTwoName) {
          setPersonTwo({
            name: data[0].personTwoName,
            email: data[0].personTwoEmail,
            mobileNumber: data[0].personTwoMobileNumber
          });
        }
      }
    } catch (error) {
      console.error('Error fetching user data:', error);
    }
  };

  return (
    <div className="profile-container">
      <div className="home-button-container">
        <Link to="/home" className="home-button">Back to home👈</Link>
      </div>
      <h1>User Profile</h1>
      <div className="user-info">
        <p><strong>Full Name:</strong> {userData.fullName}</p>
        <p><strong>User Name:</strong> {userData.userName}</p>
        <p><strong>Email:</strong> {userData.userEmail}</p>
        <p><strong>Mobile Number:</strong> {userData.mobileNumber}</p>
        <p><strong>Address:</strong> {userData.userAddress}</p>
      </div>

      {personOne.name!=="" && (
        <div className="person-info">
          <h2>Person One</h2>
          <p><strong>Name:</strong> {personOne.name}</p>
          <p><strong>Email:</strong> {personOne.email}</p>
          <p><strong>Mobile Number:</strong> {personOne.mobileNumber}</p>
        </div>
      )}

      {personTwo.name!=="" && (
        <div className="person-info">
          <h2>Person Two</h2>
          <p><strong>Name:</strong> {personTwo.name}</p>
          <p><strong>Email:</strong> {personTwo.email}</p>
          <p><strong>Mobile Number:</strong> {personTwo.mobileNumber}</p>
        </div>
      )}
    </div>
  );
};

export default Profile;
