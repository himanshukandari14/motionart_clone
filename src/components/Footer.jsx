import React from 'react';
import { Link } from 'react-router-dom';

const Footer = () => {
  return (
    <div className='w-full h-[52.39px] flex flex-col md:flex-row items-center justify-between text-[10px] md:text-[14px] text-white bg-gradient-to-r from-customOrange to-customBlue px-4 md:px-8'>
      <div>© 2023 Copywrite. All rights reserved by QodeMatrix</div>
      <div className='flex mt-2 md:mt-0'>
      <Link href='https://qodematrix.com/docs/motion-art-for-elementor/'>
        <div className='mx-2'>Documentation</div>
      </Link>
        
       <Link href='https://support.qodematrix.com/login'>
        <div className='mx-2'>Support</div>
      </Link>
      </div>
    </div>
  );
}

export default Footer;
