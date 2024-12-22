import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { WelcomePage } from './WelcomePage';
import Login from './login';
import Signup from './signup'; 
import Home from './Home';
import Profile from './Profile';
import Settings from './Settings';
import About from './About';
import Emergency from './Emergency';
import Flood from './guidelines/flood';
import InsideHousePage from './guidelines/insidehousepage';
import OutsideHousePage from './guidelines/outsidehousepage';

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<WelcomePage />} />
        <Route path="/signup" element={<Signup />} />
        <Route path="/login" element={<Login />} />
        <Route path="/home" element={<Home />} />
        <Route path="/profile" element={<Profile />} />
        <Route path="/settings" element={<Settings />} />
        <Route path="/about" element={<About />} />
        <Route path="/emergency" element={<Emergency />} />
        <Route exact path="/flood" element={<Flood />} />
        <Route exact path="/inside" element={<InsideHousePage/>}  />
        <Route exact path="/outside" element={<OutsideHousePage />}  />
        <Route path="/fetchUserData" component={Profile} />
        <Route path="/updateUserData" component={Settings} />
      </Routes>
    </Router>
  );
}

export default App;
