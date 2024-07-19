import React from 'react';
import { CiInstagram } from "react-icons/ci";
import { CiFacebook } from "react-icons/ci";
import { IoLogoYoutube } from "react-icons/io5";

function Footer() {
  return (
    <div className=' dark:bg-primary dark:text-secondary'>

      <div className="container flex items-center justify-between  dark:bg-[#191919] py-6">
        <div className='font-semibold text-xl'>Portfolio</div>

        <div className='flex gap-3'>
        <CiFacebook className='text-2xl'/>
        <CiInstagram className='text-2xl'/>
        <IoLogoYoutube className='text-2xl'/>
        </div>

        <div className='sm:hidden'>
          💖 by Sai
        </div>
      </div>
    </div>
  )
}

export default Footer