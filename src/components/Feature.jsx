import React from 'react';
import stick from '../assets/motionarteffect-img5.png';

const Feature = () => {
  return (
    <div className='w-full flex flex-col md:flex-row min-h-[300px] text-white mt-[10%]'>
      <div className='w-full md:w-[60%] text-[40px] space-y-4 px-4 md:px-0'>
        <h1>Turn Your Cursor Into A Colorful <br />
         <span>Magic Wand & Charm Your Visitors</span>  </h1>
       
        <p className='text-[18px]'>Motion Art for Elementor is a groundbreaking plugin that empowers you to effortlessly infuse your website with visually stunning motion art elements.</p>
        <button className='bg-gradient-to-r from-customOrange to-customBlue rounded-3xl text-[20px] py-3 px-6'>
            Purchase From Envato
        </button>
      </div>
      <div className='w-full md:w-[40%] flex justify-center items-center'>
        <img src={stick} alt="Motion Art Feature" className='w-full md:w-auto' />
      </div>
    </div>
  );
}

export default Feature;
