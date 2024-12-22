import React, {useState} from 'react';
import './Emergency.css';
import { Link } from 'react-router-dom';

const Emergency = () => {
  const emergencyServices = [
    { name: 'Evangline', number: '7305550106' },
    { name: 'Brother', number: '6382972931' },
    { name: 'National Emergency Number', number: '112' },
    { name: 'Police', number: '100 or 112' },
    { name: 'Fire', number: '101' },
    { name: 'Ambulance', number: '102' },
    { name: 'Disaster Management Services', number: '108' },
    { name: 'Women Helpline', number: '1091' },
    { name: 'Women Helpline - Domestic Abuse', number: '181' },
    { name: 'Air Ambulance', number: '9540161344' },
    { name: 'Aids Helpline', number: '1097' },
    { name: 'Anti Poison (New Delhi)', number: '1066 or 011-1066' },
    { name: 'Disaster Management (N.D.M.A)', number: '1078, 01126701728' },
    { name: 'EARTHQUAKE / FLOOD / DISASTER (N.D.R.F Headquaters)', number: '011-24363260 9711077372' },
    { name: 'Deputy Commissioner Of Police – Missing Child And Women', number: '1094' },
    { name: 'Railway Enquiry', number: '139' },
    { name: 'Senior Citizen Helpline', number: '14567' },
    { name: 'Medical Helpline', number: '108' },
    { name: 'Railway Accident Emergency Service', number: '1072' },
    { name: 'Road Accident Emergency Service', number: '1073' },
    { name: 'Road Accident Emergency Service On National Highway For Private Operators', number: '1033' },
    { name: 'ORBO Centre, AIIMS (For Donation Of Organ) Delhi', number: '1060' },
    { name: 'Kisan Call Centre', number: '18001801551' },
    { name: 'Relief Commissioner For Natural Calamities', number: '1070' },
    { name: 'Children In Difficult Situation', number: '1098' },
    { name: 'National Poisons Information Centre - AIIMS NEW DELHI (24*7)', number: '1800116117, 011-26593677, 26589391' },
    { name: 'Poison Information Centre (CMC, Vellore)', number: '18004251213' },
    { name: 'Tourist Helpline', number: '1363 or 1800111363' },
    { name: 'LPG Leak Helpline', number: '1906' },
    { name: 'KIRAN MENTAL HEALTH Helpline', number: '18005990019' },
    { name: 'CYBER CRIME HELPLINE', number: '155620' },
    { name: 'COVID 19 HELPLINE', number: '011-23978046 OR 1075' },
  ];

  const [searchQuery, setSearchQuery] = useState('');
  const filteredServices = emergencyServices.filter(service =>
    service.name.toLowerCase().includes(searchQuery.toLowerCase())
  );

  const handleSearch = (e) => {
    setSearchQuery(e.target.value);
  };

  const makeCall = (phoneNumber) => {
    window.open(`tel:${phoneNumber}`);
  };

  return (
    <div className="emergency-container">
      <h1>Emergency Services</h1>
      <div className="search-bar">
      <input
        type="text"
        placeholder="Search..."
        value={searchQuery}
        onChange={handleSearch}
      />
        <button onClick={handleSearch}>🔍Search</button>
      </div>
      <div className="home-button-container">
        <Link to="/home" className="home-button">Back to home👈</Link>
      </div>
      <div className="card-container">
        {filteredServices.map((service, index) => (
          <div className="card" key={index}>
            <h3>{service.name}</h3>
            <p>{service.number}</p>
            <button onClick={() => makeCall(service.number)}>📱 Call 📞</button>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Emergency;
