import React, { useEffect, useState } from 'react'
import MobileNav from "./MobileNav.jsx"
import Nav from "./Nav.jsx";
import { IoMoon, IoSunny } from "react-icons/io5";

function Header({link}) {

   const [theme , setTheme] = useState(localStorage.getItem("dark") ? localStorage .getItem("dark") : "light")

   useEffect( ()=> {
      if(theme === "dark"){
      document.documentElement.classList.add("dark");
      localStorage.setItem("mode" , "dark");
      }else {
         document.documentElement.classList.remove("dark");
         localStorage.setItem("mode" , "light")
      }
   }, [theme])

  
  return (
    <div className='bg-green-100 py-3 sm:py-4 shadow-md fixed w-full z-10 dark:bg-primary dark:text-secondary' >
      <div className='container flex items-center justify-between w-full'>
         <div className='text-2xl font-semibold text-red-400'>
            Portfolio</div>

         {/* navMobile */}

        <MobileNav link={link}/>


         {/* nav */}
   
            <Nav link={link}/>
        
        {/* darkmode */}

        <div className='hidden sm:flex'>
            {
               theme === "dark" ? 
               <IoMoon className='text-xl'
               onClick={()=> setTheme('light')}
               />
               :
               <IoSunny  className='text-xl'
               onClick={()=> setTheme("dark")}
               />
            }
        </div>
      </div>
    </div>
  )
}

export default Header