import React from 'react';
import browsers from '../assets/browsers.png';

const Support = () => {
  return (
    <div className='w-full md:w-full bg-gradient-to-b from-darkStart to-darkEnd rounded-3xl text-center flex flex-col gap-7 justify-center items-center py-10 px-5 md:px-0'>
      <h1 className='text-[25px] capitalize text-white'>Supported by all browsers</h1>
      <div>
        <p className='text-[18px] text-white'>Rest assured, Motion Art is designed to be compatible</p>
        <p className='text-[18px] text-white'>with all major web browsers.</p>
      </div>
      {/* icons */}
      <img src={browsers} alt="Supported Browsers" />
    </div>
  );
}

export default Support;
