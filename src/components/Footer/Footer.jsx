import React from 'react';
import './Footer.css';

const Footer = () => {
  return (
    <footer className='footer'>
      <p>&copy; {new Date().getFullYear()} Maa Sharda Shishu Mandir Barhi. All rights reserved.</p>
    </footer>
  );
};

export default Footer;