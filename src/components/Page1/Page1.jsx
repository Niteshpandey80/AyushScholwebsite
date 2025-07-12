import React from 'react';
import './Page1.css';
import left_div from '../../assets/left-div1.png';

const Page1 = () => {
  return (
    <div className='page1' id="about">
      <div className='text'>
        <p>WHAT WE OFFER</p>
        <h1>Primary With Upper Primary</h1>
      </div>
      <div className='upper-div'>
        <div className='left-div1'>
          <img src={left_div} alt='' />
        </div>
        <div className='right-div1'>
          <p>
            Our private primary school fosters a nurturing and inclusive environment where children thrive academically, socially, and emotionally.
          </p>
          <p>
            With experienced teachers, small class sizes, and engaging curricula, we emphasize creativity, critical thinking, and character development.
          </p>
          <p>
            Extracurricular activities, modern facilities, and a focus on individual growth ensure every child’s unique potential is nurtured effectively.
          </p>
        </div>
      </div>
      <div className='down-div'>
        <div className='left-div2'>
          <img src={left_div} alt='' />
        </div>
        <div className='right-div2'>
          <p>
            Our faculty comprises experienced, passionate, and dedicated educators who prioritize individual attention, innovative teaching methods, and holistic development.
          </p>
        </div>
      </div>
    </div>
  );
};

export default Page1;