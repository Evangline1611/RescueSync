import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
import './login.css';

import user from './images/user.jpg';
import password from './images/password.jpg';
import logo from './images/logo.jpg';

const Login = () => {
  const [userName, setUserName] = useState('');
  const [userPassword, setUserPassword] = useState(''); // Fixed: Changed setPassword to setUserPassword
  const navigate = useNavigate();

  const handleLogin = () => {
    alert(`User Login Successful!`);
  };

  const handleRecovery = () => {
    alert('Reach Us 📩contactus@gmail.com');
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    axios.post('http://localhost:3001/login', { userName, userPassword })
      .then(result => {
        console.log(result);
        if (result.data === "Success") {
          navigate('/home');
        }
        // Redirect user to another page after successful login
        else if (result.data==="no record existed"){
          alert("User record not found😢");
        }
        else if(result.data==="password is incorrect"){
          alert("Incorrect password😢")
        }
      })
      .catch(err => console.log(err));
  };

  return (
    <div className='container'>
      <div className='image-container'>
        <img src={logo} alt="Logo" />
      </div>
      <div className='login-container'>
        <div className='form'>
          <div className='header'>
            <div className='text'><h3 style={{ color: '#f1e696' }} ><b>LOGIN</b></h3></div>
            <p><b>Login to continue!!</b></p>
          </div>
          <br></br>
          <form onSubmit={handleSubmit}>
            <div className='inputs'>
              <div className='input'>
                <input type="text" placeholder='UserName' value={userName} onChange={(e) => setUserName(e.target.value)} style={{ backgroundImage: `url(${user})`, backgroundSize: '20px 20px', backgroundPosition: 'left center', backgroundRepeat: 'no-repeat', paddingLeft: '30px', height: '25px' }} />
              </div>
              <br></br>
              <div className='input'>
                <input type="password" placeholder='Password' value={userPassword} onChange={(e) => setUserPassword(e.target.value)} style={{ backgroundImage: `url(${password})`, backgroundSize: '20px 20px', backgroundRepeat: 'no-repeat', backgroundPosition: 'left center', paddingLeft: '30px', height: '25px' }} />
              </div>
            </div>
            <br></br>
            <div className='forgotpassword'><b>Forgot Password? 🤔 <span onClick={handleRecovery}>Click Here!</span></b></div>
            <br></br>
            <div className='remember-me'>
              <label htmlFor="remember"><b>Remember me</b></label>
              <input type="checkbox" id="remember" />
            </div>
            <div className='submits'>
              <div className='submit'>
                <button type="submit" onClick={handleLogin}><b>Login</b></button>
              </div>
            </div>
          </form>
          <br></br>
          <div className='signup-text'>
            <p><b>Don't have an account?</b><br /><br /><Link to="/signup" className="signup-button"><b>Sign Up</b></Link> </p>
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

export default Login;
