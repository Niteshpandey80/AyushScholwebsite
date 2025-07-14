import React from 'react';
import './Main.css';
import { FaArrowDownLong } from "react-icons/fa6";

const Main = () => {
  return (
    <div className='main' id="home">
      <div className='main-text'>
        <h1>MAA SHARDA SHISHU</h1>
        <h1 className='bro'>MANDIR BARHI</h1>
        <button className='btn'>EXPLORE MORE <span className="arrow-icon"><FaArrowDownLong /></span></button>
      </div>
    </div>
  );
};
export default Main ; 