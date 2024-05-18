import React from 'react';
import moon from '../assets/moon.png';
import like from '../assets/like.png';
import fast from '../assets/fast.png';

const Features = () => {
  return (
    <div className='min-h-[90vh] w-full flex flex-col justify-center items-center gap-7 text-center'>
      <div className='text-[40px] text-white'>
        <h1>An All-Round Plugin With</h1>
        <h1>Powerful Features</h1>
      </div>
      <div className='text-[18px] text-[#9992AB]'>
        <p>Whether you're a seasoned web designer or just starting out, Motion Art for</p>
        <p>Elementor seamlessly integrates with the Elementor platform, providing you</p>
        <p>with a seamless and intuitive experience.</p>
      </div>
      {/* cards */}
      <div className='flex flex-col md:flex-row gap-7 '>
        <div className='h-[377px] md:w-[419.98px] w-full bg-gradient-to-b from-darkStart to-darkEnd rounded-3xl flex flex-col text-start text-white'>
          <img src={fast} alt="" height={188} width={188} />
          <div className='w-full px-10'>
            <h1 className='text-[25px]'>Light Weight</h1>
            <p className='text-[18px]'>Motion Art for Elementor is designed to</p>
            <p className='text-[18px]'>be lightweight.</p>
          </div>
        </div>
        <div className='h-[377px] md:w-[419.98px] w-full bg-gradient-to-b from-darkStart to-darkEnd rounded-3xl flex flex-col text-start text-white'>
          <img src={like} alt="" height={188} width={188} />
          <div className='w-full px-10'>
            <h1 className='text-[25px]'>100% Responsive</h1>
            <p className='text-[18px]'>Create a consistent visual experience</p>
            <p className='text-[18px]'>across all devices.</p>
          </div>
        </div>
        <div className='h-[377px] md:w-[419.98px] w-full bg-gradient-to-b from-darkStart to-darkEnd rounded-3xl flex flex-col text-start text-white'>
          <img src={moon} alt="" height={188} width={188} />
          <div className='w-full px-10'>
            <h1 className='text-[25px]'>User Friendly Interface</h1>
            <p className='text-[18px]'>Ensure a smooth experience for both</p>
            <p className='text-[18px]'>applicants and administrators.</p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Features;
