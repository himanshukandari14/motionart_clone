import React from 'react'
import r1 from '../assets/r1.png'
import r2 from '../assets/r2.png'
import r3 from '../assets/r3.png'
import ratings from '../assets/star.png'
const Reviews = () => {
  return (
    <div className='w-full text-white gap-16  min-h-[300px] flex flex-col justify-center items-center font-semibold'>
    <h1 className='text-[22px]'>Trusted by thousands of users around the world</h1>
      <div className=' w-full flex justify-between flex-wrap'>
      {/* rev box */}
        <div className='w-[300px]  flex text-[#c8c8c8]'>
        <div className='w-[40%] '>
             <img src={r1} alt="" height={88} width={88} />
        </div>
        <div className='flex flex-col w-full justify-center items-center gap-3'>
            <img src={ratings} alt="" />
             <p>4.5 Score, 9 Reviews</p>
        </div>
           
        </div>
         <div className='w-[300px]  flex text-[#c8c8c8] '>
        <div className='w-[40%] '>
             <img src={r2} alt="" height={88} width={88} />
        </div>
        <div className='flex flex-col w-full justify-center items-center gap-3'>
           <img src={ratings} alt="" />
             <p>4.5 Score, 9 Reviews</p>
        </div>
           
        </div>
         <div className='w-[300px]  flex text-[#c8c8c8]'>
        <div className='w-[40%] '>
             <img src={r3} alt="" height={88} width={88} />
        </div>
        <div className='flex flex-col w-full justify-center items-center gap-3'>
            <img src={ratings} alt="" />
             <p>4.5 Score, 9 Reviews</p>
        </div>
           
        </div>
         
      </div>
    </div>
  )
}

export default Reviews
