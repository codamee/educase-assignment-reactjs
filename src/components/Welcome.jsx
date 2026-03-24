import React from 'react'

const Welcome = () => {
  return (
    <div className='sm:flex justify-between h-screen '>
      <div className='flex-1 h-full'>
        <img src="/smartschwarz-building-5535464.jpg" alt="" className='w-full h-full object-cover'/>
      </div>
      <div className='flex flex-col justify-center items-center h-full bg-blue-50 w-125'>
        <div className='w-[60%] gap-5 flex flex-col justify-center bg-slate-200 p-5 rounded-xl'>
          <div className='flex flex-col gap-2'>
            <h1 className='text-2xl font-bold'>Welcome to PopX</h1>
            <p className='text-mauve-500'> Join PopX today and take control of your digital presence.</p>
          </div>
          <div className='text-sm font-semibold flex flex-col gap-2'>
            <button className='px-4 py-2 rounded-md text-slate-100  bg-[#6c25ff] cursor-pointer'>Create Account</button>
            <button className='px-4 py-2 rounded-md text-slate-900 bg-[#cebafb] cursor-pointer'>Already Registered? Login</button>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Welcome