import React from 'react';
import section from '../assets/motionarteffect-img10.png';
import page from '../assets/motionarteffect-img11.png';

const Use = () => {
  return (
    <div className='w-full text-white min-h-[80vh] flex flex-col mt-10 mb-16'>
      <h1 className='text-[40px] text-center'>Apply On Any Section Or Enable <br />
        <span>
          For Whole Page
        </span>
      </h1>
      {/* image div */}
      <div className='flex flex-col md:flex-row h-auto md:h-[600px] w-full p-5 gap-5 text-white'>
        <div className='h-full w-full md:w-[50%]'>
          <div className='bg-gradient-to-b px-6 from-darkStart to-darkEnd flex flex-col justify-start items-center h-full rounded-3xl'>
            <div className='text-[#9992AB] flex flex-col gap-2'>
              <h1 className='text-[25px] text-white w-full text-start'>Apply On Section</h1>
              <div className='text-[18px]'>
                <p>Apply on section is a game-changer, offering an unparalleled way to</p>
                <p>manage applications directly from your website. </p>
              </div>
            </div>
            <img src={page} height={353.11} width={546} alt="" className='mt-6' />
          </div>
        </div>
        <div className='h-full w-full md:w-[50%] mt-11 md:mt-0'>
          <div className='bg-gradient-to-b px-6 from-darkStart to-darkEnd rounded-3xl flex flex-col justify-center items-center h-full mt-16'>
            <div className='text-[#9992AB] flex flex-col gap-2'>
              <h1 className='text-[25px] text-white w-full text-start'>Apply On Section</h1>
              <div className='text-[18px]'>
                <p>Apply on section is a game-changer, offering an unparalleled way to</p>
                <p>manage applications directly from your website. </p>
              </div>
            </div>
            <img src={section} height={353.11} width={546} className='mt-5' alt="" />
          </div>
        </div>
      </div>
    </div>
  );
}

export default Use;
