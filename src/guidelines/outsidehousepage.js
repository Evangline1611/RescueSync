import React from 'react';
import './guide.css';
import { Link } from 'react-router-dom';

const OutsideHousePage = () => {
  return (
    <div>
      <header>
        <h1>Outside House Guidelines for Flood</h1>
      </header>
      <div className="home-button-container">
        <Link to="/home" className="home-button">Back to home👈</Link>
      </div>
      {/*<div className="video-container">
  <h3>Video Guidelines:</h3>
  <video width="560" height="315" controls>
    <source src="file:///C:/Users/fazli/OneDrive/Documents/RescueSync/Flood%20guidelines.mp4" type="video/mp4" />
    
  </video>
  </div>*/}
  <video controls>
          <source src="../videos/flood.mp4" type="video/mp4" />
          Your browser does not support the video tag.
        </video>

      <section>
        {/* Guidelines for outside the house */}
        <p>Guidelines for outside the house go here...</p>
        <div>
          <h3 className="dos-heading">DO'S:</h3>
          <ul className="dos-list">
            <li>Switch off electrical and gas appliances, and turn off services off at the mains.</li>
            <li>Carry your emergency kit and let your friends and family know where you are going.</li>
            <li>Avoid contact with flood water it may be contaminated with sewage,oil,chemicals or other substances.</li>
            <li>If you have to walk in standing water, use a pole or stick to ensure that you do not step into deep water, open manholes or ditches.</li>
            <li>Stay away from power lines electrical current can travel through water, Report power lines that are down to the power company.</li>
            <li>Look before you step-after a flood, the ground and floors are covered with debris, which may include broken bottles, sharp objects, nails etc.Floors and stairs covered with mud and debris can be slippery.</li>
            <li>Listen to the radio or television for updates and information.</li>
            <li>If the ceiling is wet shut off electricity. Place a bucket underneath the spot and poke a small hole into the ceiling to relieve the pressure.</li>
            <li>Use buckets, clean towels and mops to remove as much of the water from the afflicted rooms as possible.</li>
            <li>Place sheets of aluminum foil between furniture wet carpet.</li>
         </ul>
        </div>
        <div>
          <h3 className="donts-heading">DONT'S:</h3>
          <ul className="donts-list">
            <li>Don’t walk through flowing water – currents can be deceptive, and shallow, fast moving water can knock you off your feet.</li>
            <li>Don’t swim through fast flowing water – you may get swept away or struck by an object in the water.</li>
            <li>Don’t drive through a flooded area – You may not be able to see abrupt drop – offs and only half a meter of flood water can carry a car away. Driving through flood water can also cause additional damage to nearby property.</li>
            <li>Don’t eat any food that has come into contact with flood water.</li>
            <li>Don’t reconnect your power supply until a qualified engineer has checked it. Be alert for gas leaks – do not smoke or use candles, lanterns, or open flames.</li>
            <li>Don’t scrub or brush mud and other deposits from materials.</li>
            <li>Never turn on ceiling fixtures if ceiling is wet. Stay away from ceilings those are sagging.</li>
            <li>Never use TVs, VCRS, CRT terminals or other electrical equipment while standing on wet floors, especially concrete.</li>
            <li>Don’t attempt to remove standing water using your vacuum cleaner.</li>
            <li>Don’t remove standing water in a basement too fast. If the pressure is relieved too quickly it may put undue stress on the walls.</li>
          </ul>
        </div>
      </section>
    </div>
  );
};

export default OutsideHousePage;