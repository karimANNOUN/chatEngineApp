import React from 'react'
import { Link } from 'react-router-dom'
import NotFound from '../assets/PageNotFound.jpg'
export const PageNotFound = () => {
  return (
    <main>
      <section className='flex flex-col  justify-center px-2'>
        <div className='flex flex-col  items-center my-4'>
        <p className={ 'my-6 text-2xl text-gray-700 font-bold dark:text-white'}> 404 ,oops! </p>
         
         <div className='max-w-lg'>
         <img className='rounded' src={NotFound} alt=' 404 !! NotFound'/>
         </div>

        </div>

        <div className='flex justify-center my-4 '>
         <Link to="/">
         <button>Back to Home</button>
         
         </Link>
        </div>
      </section>
    </main>
   
  )
}
