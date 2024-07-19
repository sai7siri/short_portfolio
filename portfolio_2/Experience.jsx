import React from 'react'

function Experience() {
  return (
    <div className='dark:bg-primary dark:text-secondary'>

      <div className='container w-[70%] sm:w-full py-6 sm:py-12'>

      <div className='grid items-center grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-7 sm:gap-4 '>
         {/* first */}
         <div className='py-12 sm:py-0 h-full text-center font-bold dark:bg-[#101010] flex flex-col items-center justify-center md:border'>
    
            <p className='text-2xl'>12 </p>
            <span>Years Experience</span> 
         </div>

         {/* second */}
         <div className='flex flex-col gap-2 text-center '>
            <div className='dark:bg-[#242222]  py-4 md:border'>
            <p className='font-bold'>60+</p>
               <p className='text-sm font-medium'>Happy Clients</p>
              
            </div>
            <div className='dark:bg-[#242222] py-4 md:border'>
            <p className='font-bold' >120+</p>
            <p className='text-sm font-medium' >Completed Projects</p>
            </div>
         </div>

         {/* third */}
         <div className='flex flex-col gap-2 text-center'>
         <div className='dark:bg-[#242222] py-4 md:border'>

            <p className='font-bold'>70+</p>
            <p className='text-sm font-medium'>Happy Clients</p>
              
            </div>
            <div className='dark:bg-[#242222] py-4 md:border'>
            <p className='font-bold' >140+</p>
            <p className='text-sm font-medium' >Completed Projects</p>
            </div>
         </div>
      </div>

      </div>
    

    </div>
  )
}

export default Experience