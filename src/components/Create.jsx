import React from 'react'

const Create = () => {
  return (
    <div className='h-screen flex flex-col justify-center items-center'>
            <div className=' w-full bg-blue-50 h-full xl:h-[90%] flex flex-col justify-between gap-10 p-8 sm:rounded-xl'>
                <div className='flex flex-col gap-8'>
                    <h2 className='text-2xl w-1/2 font-semibold'>Create your PopX account</h2>
                    <form action="" className='flex flex-col gap-6 '>
                        <div className='relative'>
                            <label htmlFor="fullname" className='text-[#9e72fc] text-[14px] -top-2.5 left-3 font-semibold absolute bg-blue-50 px-1'>Full name <span className='text-red-500 '>*</span></label>
                            <input className='border px-4 py-2 w-full rounded-md' type="text" name="fullname" id="fullname" required placeholder='John' />
                        </div>
                        <div className='relative'>
                            <label htmlFor="phno" className='text-[#9e72fc] text-[14px] -top-2.5 left-3 font-semibold absolute bg-blue-50 px-1'>Phone number <span className='text-red-500 '>*</span></label>
                            <input className='border px-4 py-2 w-full rounded-md' type="tel" name="phno" id="phno" required placeholder='Doe' />
                        </div>
                        <div className='relative'>
                            <label htmlFor="email" className='text-[#9e72fc] text-[14px] -top-2.5 left-3 font-semibold absolute bg-blue-50 px-1'>Email Address <span className='text-red-500 '>*</span></label>
                            <input className='border px-4 py-2 w-full rounded-md' type="email" name="email" id="email" required placeholder='example@com' />
                        </div>
                        <div className='relative'>
                            <label htmlFor="password" className='text-[#9e72fc] text-[14px] -top-2.5 left-3 font-semibold absolute bg-blue-50 px-1'>Password <span className='text-red-500 '>*</span></label>
                            <input className='border px-4 py-2 w-full rounded-md' type="password" name="password" id="password" required  />
                        </div>
                        <div className='relative'>
                            <label htmlFor="company" className='text-[#9e72fc] text-[14px] -top-2.5 left-3 font-semibold absolute bg-blue-50 px-1'>Company Name <span className='text-red-500 '>*</span></label>
                            <input className='border px-4 py-2 w-full rounded-md' type="text" name="company" id="company" required placeholder='Google' />
                        </div>
                        <div className='flex flex-col gap-3'>
                            <p>Are you an Agency?<span className='text-red-500'>*</span></p>
                            <div className='flex  gap-6'>
                                <div className='flex gap-2 cursor-pointer'>
                                    <input type="radio" name="agency" id="yes" className='w-5 ' />
                                    <label htmlFor="yes" className='cursor-pointer'>Yes</label>
                                </div>
                                <div className='flex gap-2 cursor-pointer'>
                                    <input type="radio" name="agency" id="no" className='w-5 ' />
                                    <label htmlFor="no" className='cursor-pointer'>No</label>
                                </div>
                            </div>
                        </div>
                    </form>
                </div>
                <button  className='px-4 py-2 rounded-md text-slate-100  bg-[#6c25ff] cursor-pointer font-semibold'>Create Account</button>
            </div>
        </div>  
  )
}

export default Create