import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom'; 
import axios from 'axios';

import userImage from './images/user.jpg';
import passwordImage from './images/password.jpg';
import logo from './images/logo.jpg';
import emailImage from './images/email.png';
import nameImage from './images/name.png';
import mobileImage from './images/mobile.png';
import addressImage from './images/address.jpg';

import './signup.css';

const Signup = () => {
  const [fullName, setFullName] = useState('');
  const [userName, setUserName] = useState('');
  const [userPassword, setUserPassword] = useState('');
  const [userEmail, setUserEmail] = useState('');
  const [mobileNumber, setMobileNumber] = useState('');
  const [userAddress, setUserAddress] = useState('');
  
  const navigate = useNavigate()
  const handleSubmit = (e) => {
    e.preventDefault();
  
    // Password validation checks
    const passwordRegex = /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z]).{6,}$/;
    if (!passwordRegex.test(userPassword)) {
      alert("Password must contain at least one uppercase letter, one lowercase letter, one digit, and be at least 6 characters long.");
      return;
    }
  
    axios.post('http://localhost:3001/signup', { 
      fullName, 
      userName, 
      userPassword, 
      userEmail, 
      mobileNumber, 
      userAddress,
      personOneName: "",
      personOneEmail: "",
      personOneMobileNumber: 0,
      personTwoName: "",
      personTwoEmail: "",
      personTwoMobileNumber: 0
    })
      .then(result => {
        console.log(result);
        navigate('/login');
      })
      .catch(err => console.log(err));
};
  

  return (
    <div className='container'>
      <div className='image-container'>
        <img src={logo} alt="Logo con" />
      </div>
      <div className='content-container'>
        <div className='form'>
          <div className='header'>
            <div className='text'><h3 style={{ color: '#f1e696' }} ><b>SIGNUP</b></h3></div>
            <p><b>Create your own account!!</b></p>
          </div>
          <br></br>
          <form onSubmit={handleSubmit}>
            <div className='inputs'>
              <div className='input'>
                <input type="text" placeholder='Name' style={{ backgroundImage: `url(${nameImage})`, backgroundSize: '20px 20px', backgroundRepeat: 'no-repeat', backgroundPosition: 'left center', paddingLeft: '30px', height: '25px' }} onChange={(e) => setFullName(e.target.value)} />
              </div>
              <br></br>
              <div className='input'>
                <input type="text" placeholder='UserName' style={{ backgroundImage: `url(${userImage})`, backgroundSize: '20px 20px', backgroundPosition: 'left center', backgroundRepeat: 'no-repeat', paddingLeft: '30px', height: '25px' }} onChange={(e) => setUserName(e.target.value)} />
              </div>
              <br></br>
              <div className='input'>
                <input type="tel" placeholder='Mobile Number' style={{ backgroundImage: `url(${mobileImage})`, backgroundSize: '20px 20px', backgroundRepeat: 'no-repeat', backgroundPosition: 'left center', paddingLeft: '30px', height: '25px' }} onChange={(e) => setMobileNumber(e.target.value)} />
              </div>
              <br></br>
              <div className='input'>
                <input type="email" placeholder='Email' style={{ backgroundImage: `url(${emailImage})`, backgroundSize: '20px 20px', backgroundRepeat: 'no-repeat', backgroundPosition: 'left center', paddingLeft: '30px', height: '25px' }} onChange={(e) => setUserEmail(e.target.value)} />
              </div>
              <br></br>
              <div className='input'>
                <input type="text" placeholder='Address' style={{ backgroundImage: `url(${addressImage})`, backgroundSize: '20px 20px', backgroundRepeat: 'no-repeat', backgroundPosition: 'left center', paddingLeft: '30px', height: '25px' }} onChange={(e) => setUserAddress(e.target.value)} />
              </div>
              <br></br>
              <div className='input'>
                <input type="password" placeholder='Password' style={{ backgroundImage: `url(${passwordImage})`, backgroundSize: '20px 20px', backgroundRepeat: 'no-repeat', backgroundPosition: 'left center', paddingLeft: '30px', height: '25px' }} onChange={(e) => setUserPassword(e.target.value)} />
              </div>
              <br></br>
              <div className='input'>
                <input type="password" placeholder='Confirm Password' style={{ backgroundImage: `url(${passwordImage})`, backgroundSize: '20px 20px', backgroundRepeat: 'no-repeat', backgroundPosition: 'left center', paddingLeft: '30px', height: '25px' }} />
              </div>
            </div>
            <br></br>
            <div className='submits'>
              <div className='submit'>
                <button type="submit" className="login-button"><b>SignUp</b></button>
              </div>
            </div>
          </form>
          <br></br>
          <div className='login-text'>
            <p><b>Already have an account?</b> <Link to="/login" className="login-button"><b>Login</b></Link></p>
          </div>
        </div>
        <br></br>
        <div >
          <Link to="/" className="signup-button" align="center">Back to home👈</Link>
        </div>
      </div>
    </div>
  );
}

export default Signup;
