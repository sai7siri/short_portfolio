import React from 'react'

function Contact({link}) {
  return (
    <section className='pt-4 dark:bg-primary dark:text-secondary' id='contact'>
      <div className="container">
         <div className='flex flex-col gap-4 sm:flex-row sm:gap-0 items-center justify-around py-16 dark:bg-[#404040]'>
            <div>
               <p className='font-bold text-xl'>Let's work together on your nect project</p>
               <h5 className='text-sm'>Lorem ipsum dolor sit amet consectetur adipisicing elit.</h5>
            </div>
            <button className='py-1 px-5 rounded-sm bg-red-600 text-secondary '>Contact</button>
         </div>

         <div  className='flex gap-3 justify-center py-7'>
            {
               link.map( (p)=> <p key={p.id} className='text-xs font-medium '>{p.name}</p>)
            }
         </div>
      </div>

    </section>
  )
}

export default Contact