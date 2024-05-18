import React from 'react';
import '../App.css';

const HeroSection = () => {
  return (
    <div className='w-full h-auto min-h-[65vh] flex flex-col md:flex-row gap-9 mt-10 p-4 md:p-0'>
      <div className='w-full md:w-[11%] h-full text-gradient text-[18px] flex flex-col items-start md:items-start'>
        <p className='text-center md:text-left'>
          Transform Your Website
        </p>
        <p className='text-gradient text-center md:text-left'>With Motion Art Effect</p>
      </div>
      <div className='w-full md:w-[60%] text-white h-full flex flex-col items-center md:items-center '>
        <div>
          <h1 className='text-[32px] md:text-[65px] text-center md:text-left '>
            <span>Attract Your</span> <br />
            <span>Visitors Attention</span> <br />
            <span>With Colorful</span>
            <br />
            <span className='text-gradient'>Motion Art Effect</span>
          </h1>
        </div>
        <div className='w-full h-auto flex items-center px-4 md:px-[13%] text-[16px] md:text-[18px] text-[#9E99AF] text-center md:text-left'>
          Unleash the power of creativity with Motion Art for Elementor - your ultimate solution for seamlessly integrating captivating animations into your website.
        </div>
      </div>
    </div>
  );
};

export default HeroSection;
