import React from 'react';
import lady from "../assets/portfolio_2/lady.png"

function Hero() {
  return (
    <div className='pt-14 dark:bg-primary dark:text-secondary' id='home'>
      
      <div className="container py-2">
         
         {/* images & details */}
         <div className='grid place-items-center text-center grid-cols-1 sm:grid-cols-2 sm:text-start'>
            {/* image */}
            <div>
               <img src={lady} alt="not found" 
               className='w-[220px] h-full sm:w-[350px]'
               />
            </div>

            {/* deatils */}
            <div>
               <p className='text-red-600 font-medium mt-3'>Hello I'm Angela</p>

               <h1 className='font-semibold text-4xl py-3'>Visual Designer</h1>

               <p className='text-gray-600 text-sm max-w-[500px]'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Nemo nulla, culpa unde modi quia itaque asperiores harum nam quas facilis laboriosam ad. Quasi repellendus at blanditiis veniam, vitae soluta sit?</p> 
               <button className='px-6 py-2 mt-3 bg-red-600 font-medium rounded-md cursor-pointer'>ABOUT ME</button>
            </div>
         </div>
      </div>
   
      </div>
  )
}

export default Hero