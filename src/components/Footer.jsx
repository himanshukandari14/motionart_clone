import React from 'react';

const Footer = () => {
  return (
    <div className='w-full h-[52.39px] flex flex-col md:flex-row items-center justify-between text-[10px] md:text-[14px] text-white bg-gradient-to-r from-customOrange to-customBlue px-4 md:px-8'>
      <div>© 2023 Copywrite. All rights reserved by QodeMatrix</div>
      <div className='flex mt-2 md:mt-0'>
        <div className='mx-2'>Documentation</div>
        <div className='mx-2'>Support</div>
      </div>
    </div>
  );
}

export default Footer;
