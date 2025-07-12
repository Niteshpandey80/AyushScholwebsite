import React from 'react';
import './Page2.css';
import img1 from '../../assets/bro.jpg';
import img2 from '../../assets/bro1.jpg';
import img3 from '../../assets/bro2.jpg';
import img4 from '../../assets/bro3.jpg';

const Page2 = () => {
  const images = [img1, img2, img3, img4];

  return (
    <div className='page2'>
      <div className='text2'>
        <p>GALLERY</p>
        <h1>SCHOOL ACTIVITY PICTURES</h1>
      </div>

      <div className='gallery'>
        {images.map((img, index) => (
          <div className='img-box' key={index}>
            <img src={img} alt={`School Activity ${index + 1}`} />
          </div>
        ))}
      </div>
    </div>
  );
};

export default Page2;
