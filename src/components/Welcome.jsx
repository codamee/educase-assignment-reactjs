import React from 'react'
import { NavLink } from 'react-router-dom'

const Welcome = () => {
  return (
    <div className='sm:flex-row flex flex-col justify-between h-screen '>
      <div className='md:flex-1 lg:h-full'>
        <img src="/kevin-matos-Nl_FMFpXo2g-unsplash.jpg" alt="bg" className='w-full max-[380px]:h-100 h-full  sm:h-full object-cover' />
      </div>
      <div className='flex flex-col justify-center items-center h-full bg-blue-50 lg:rw-125'>
        <div className='lg:w-[60%] w-full gap-6 flex flex-col justify-center lg:bg-slate-200 p-5 rounded-xl shadow-md'>
          <div className='flex flex-col gap-4'>
            <h1 className='text-2xl font-bold'>Welcome to PopX</h1>
            <p className='text-mauve-500 text-[1.1rem] sm:w-full w-[75%]'> Join PopX today and take control of your digital presence.</p>
          </div>
          <div className=' font-semibold flex flex-col gap-2 w-full'>
            <NavLink to='/create' className="">
              <button className='px-4 py-2 rounded-md text-slate-100  bg-[#6c25ff] cursor-pointer w-full'>Create Account</button>
            </NavLink>
            <NavLink to='/sigin'>
              <button className='px-4 py-2 rounded-md text-slate-900 bg-[#cebafb] cursor-pointer w-full'>Already Registered? Login</button>
            </NavLink>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Welcome