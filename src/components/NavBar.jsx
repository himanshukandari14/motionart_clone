// src/components/NavBar.js
import React from 'react';
import logo from '../assets/MotionArtEffect-logo.png';


const NavBar = () => {
  return (
    <div className=' w-full h-[100px] flex justify-between items-center '>
      <img src={logo} alt="Motion Art Effect Logo" className='h-[52] w-[220] ' />
      <a href='https://codecanyon.net/item/motion-art-for-elementor-wordpress-plugin/48826891'>
        <button className='h-[54px] w-[187
        .59px] hover:bg-transparent hover:text-white border-[2px] transition duration-200  border-white md:block hidden bg-white rounded-lg p-t-[16px] p-b-[16px] pl-[35px] pr-[35px]'>Purchase now</button>
      </a>
        

    </div>
  );
}

export default NavBar;
