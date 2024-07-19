import React from 'react'
import { FaCameraRetro } from "react-icons/fa";
import { GiNotebook } from "react-icons/gi";
import { SlNote } from "react-icons/sl";

function Skills() {

   const info = [
      {
         id: 1,
         logo : ( <FaCameraRetro  className='text-3xl '/>),
         name : "UI DESIGN",
         text : 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Dolore, assumenda.'
      },
      {
         id:2,
         logo : (
            <GiNotebook className='text-3xl'/>
         ),
         name : "Product Design",
         text : 'Lorem ipsum dolor sit amet consectetur adipisicing elit. after the designer '
      },
      {
         id:3,
         logo : (
            <SlNote className='text-3xl' />
         ),
         name : "Branding",
         text : "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Dolore, assumenda."
      },
      
   ]

  return (
    <div className='dark:bg-primary dark:text-secondary' id='about'>
      <div className="container sm:w-[80%] ">
         <div className='grid items-center grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4 py-6 '>
            {
               info.map( (p)=> (
                  <div key={p.id} className='border p-3'>
                       <p className='text-red-500'>{p.logo}</p> 
                        <p className='font-bold'>{p.name}</p>
                        <p className='text-sm text-gray-600 mb-2'>{p.text}</p>
                        <p>Learn More</p>
                  </div>
               ))
            }
         </div>
      </div>
    </div>
  )
}

export default Skills;