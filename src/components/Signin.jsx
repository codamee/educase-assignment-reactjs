import React from 'react'

const Signin = () => {
    return (
        <div className='h-screen flex flex-col justify-center items-center'>
            <div className='w-full md:w-100 bg-blue-50 h-full xl:h-[90%] flex flex-col justify-between gap-10 p-8 sm:rounded-xl'>
                <div className='flex flex-col gap-8'>
                    <h2 className='text-2xl text w-[60%] font-bold'>Signin to  your PopX account</h2>
                    <p className='text-gray-600'>Join PopX today and take control of your digital presence</p>
                    <form action="" className='flex flex-col gap-6 '>

                        <div className='relative'>
                            <label htmlFor="email" className='text-[#9e72fc] text-[14px] -top-2.5 left-3 font-semibold absolute bg-blue-50 px-1'>Email Address <span className='text-red-500 '>*</span></label>
                            <input className='border px-4 py-2 w-full rounded-md' type="email" name="email" id="email" required placeholder='example@com' />
                        </div>
                        <div className='relative'>
                            <label htmlFor="password" className='text-[#9e72fc] text-[14px] -top-2.5 left-3 font-semibold absolute bg-blue-50 px-1'>Password <span className='text-red-500 '>*</span></label>
                            <input className='border px-4 py-2 w-full rounded-md' type="password" name="password" id="password" minLength="3" required />
                        </div>

                        <button className='px-4 py-2 rounded-md text-slate-100 font-semibold  bg-[#6c25ff] cursor-pointer'>Login</button>
                    </form>
                </div>
            </div>
        </div>
    )
}

export default Signin