import React from 'react'
import img1 from '../../assets/compp.jpg';
import img2 from '../../assets/complab.jpg';
import playg from '../../assets/playground.jpg';
import './Computer.css';

const Computer = () => {
  return (
      <div className="computer-lab-wrapper">
      <h1 className="computer-lab-heading">Holistic Development</h1>
      <span className="heading-underline" />
      
      <div className="lab-circles">
        <div className="lab-profile">
          <img src={img1} alt="Lab 1" className="lab-photo" />
          <div className="lab-bubble">
            <h3>Modern Infrastructure</h3>
            <p>Well-equipped lab setup</p>
          </div>
        </div>

        <div className="lab-profile">
          <img src={img2} alt="Lab 2" className="lab-photo" />
          <div className="lab-bubble">
            <h3>Interactive Learning</h3>
            <p>Digital teaching experience</p>
          </div>
        </div>

        <div className="lab-profile">
          <img src={playg} alt="Playground" className="lab-photo" />
          <div className="lab-bubble">
            <h3>Outdoor Activities</h3>
            <p>Playground for physical growth</p>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Computer
