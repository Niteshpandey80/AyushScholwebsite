import React from 'react';
import dire from './../../assets/HadSir.png';
import pric from '../../assets/Maaam.png';
import './Introduction.css';

const Introduction = () => {
  return (
    <div className='introduction'>
      <h1 className="section-title">Our School Management</h1>
      <div className="intro-cards">
        <div className="intro-card">
          <div className="profile-img" style={{ backgroundImage: `url(${dire})` }}></div>
          <h2>Rambhajan Rajpal</h2>
          <p>Post: Director</p>
        </div>
        <div className="intro-card">
          <div className="profile-img" style={{ backgroundImage: `url(${pric})` }}></div>
          <h2>Bhagwati Barman</h2>
          <p>Post: Headmaster</p>
        </div>
      </div>
    </div>
  );
};

export default Introduction;
