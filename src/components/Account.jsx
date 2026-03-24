import React, { useState, useEffect } from 'react'
import { useNavigate } from 'react-router-dom'

const Account = () => {
    const [data, setData] = useState(null)
    const navigate = useNavigate()

    useEffect(() => {
        const savedData = localStorage.getItem("popx_user");
        if (savedData) {
            setData(JSON.parse(savedData));
        } else {
            navigate('/');
        }
    }, [navigate])

    const handleSignout = () => {
        localStorage.removeItem("isLoggedIn");
        localStorage.removeItem("popx_user")
        navigate('/');
    }
    if (!data) {
        return (
            <div className="h-screen flex items-center justify-center bg-blue-50">
                <p className="text-[#6c25ff] font-bold animate-pulse">Loading Profile...</p>
            </div>
        );
    }


    return (
        <div className='h-dvh  justify-center flex flex-col items-center md:py-10'>
            <div className='w-full max-w-md bg-blue-100 h-screen md:h-auto md:min-h-150 shadow-lg md:rounded-xl overflow-hidden flex flex-col'>
                <div className=' px-5 py-6 border-b border-slate-400'>
                    <h2 className='text-xl font-semibold text-gray-800'>Account Settings</h2>
                </div>

                <div className='p-5'>
                    <div className='flex items-center gap-4 mb-8'>
                        <div className='relative'>
                            <img
                                src='https://images.unsplash.com/photo-1534528741775-53994a69daeb?q=80&w=764&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D'
                                alt="profile"
                                className='rounded-full w-20 h-20 object-cover border-2 border-purple-100'
                            />
                            <div className='absolute bottom-0 right-0 bg-[#6c25ff] p-1.5 rounded-full border-2 border-white'>
                                <svg xmlns="http://www.w3.org/2000/svg" className="h-3 w-3 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 9a2 2 0 012-2h.93a2 2 0 001.664-.89l.812-1.22A2 2 0 0110.07 4h3.86a2 2 0 011.664.89l.812 1.22A2 2 0 0018.07 7H19a2 2 0 012 2v9a2 2 0 01-2 2H5a2 2 0 01-2-2V9z" />
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 13a3 3 0 11-6 0 3 3 0 016 0z" />
                                </svg>
                            </div>
                        </div>
                        <div className='flex-1'>
                            <p className='font-bold text-lg text-gray-900 leading-tight'>{data.fullname || 'Johny'}</p>
                            <p className='text-gray-500 text-sm'>{data.email || 'guest@example.com'}</p>
                        </div>
                        <button
                            onClick={handleSignout}
                            className='text-xs font-bold text-red-500 uppercase tracking-wider hover:underline'>
                            Sign out
                        </button>
                    </div>

                    <div className='mb-8'>
                        <h3 className='text-sm font-bold text-gray-600 mb-2'>About me</h3>
                        <p className='text-sm text-gray-800 leading-relaxed'>
                            <q>Almost everything worthwhile carries with it some sort of risk, whether it’s starting a new business, whether it’s leaving home, whether it’s getting married, or whether it’s flying into space.</q> -Chris Hadfield
                        </p>
                    </div>

                    <div className='border-t border-b border-slate-400 py-6'>
                        <div className='flex flex-col gap-4'>
                            <div>
                                <p className='text-xs text-gray-400 font-bold uppercase tracking-widest mb-1'>Phone Number</p>
                                <p className='text-gray-800 font-medium'>{data.phno || 'Not provided'}</p>
                            </div>
                            <div>
                                <p className='text-xs text-gray-400 font-bold uppercase tracking-widest mb-1'>Agency Status</p>
                                <p className='text-gray-800 font-medium capitalize'>{data.isAgency || 'No'}</p>
                            </div>
                            {data.company && (
                                <div>
                                    <p className='text-xs text-gray-400 font-bold uppercase tracking-widest mb-1'>Company</p>
                                    <p className='text-gray-800 font-medium'>{data.company}</p>
                                </div>
                            )}
                        </div>
                    </div>
                </div>

                <div className='mt-auto p-5'>
                    <p className='text-center text-[10px] text-gray-300 uppercase tracking-[3px]'>PopX Account Dashboard</p>
                </div>
            </div>
        </div>
    )
}

export default Account