import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import './Nav.css';
import logo from '../../assets/aaush.png';

const Nav = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => setIsOpen(!isOpen);

  return (
    <nav className='navbar'>
      <div className='navbar-container'>
        <a href="#home">
          <img src={logo} alt='Logo' className='navbar-logo' />
        </a>

        <button 
          className={`navbar-toggle ${isOpen ? 'active' : ''}`} 
          onClick={toggleMenu}
          aria-label="Menu"
        >
          <span className='navbar-toggle-icon'></span>
          <span className='navbar-toggle-icon'></span>
          <span className='navbar-toggle-icon'></span>
        </button>

        <div className={`navbar-menu ${isOpen ? 'active' : ''}`}>
          <a href="#home" className='navbar-item'>HOME</a>
          <a href="#about" className='navbar-item'>ABOUT</a>
          <a href="#contact" className='navbar-item'>CONTACT</a>
            <a href="/details.pdf" target="_blank" rel="noopener noreferrer">
  <button className='navbar-button'>Details</button>
</a> </div>
      </div>
    </nav>
  );
};

export default Nav;
