import React, { useEffect, useState } from 'react'
import { ToastContainer, toast } from 'react-toastify';
import { useNavigate } from 'react-router-dom'



const Create = () => {
    const navigate = useNavigate();
    const [formData, setFormData] = useState({
        fullname: '',
        phno: '',
        email: '',
        password: '',
        company: '',
        isAgency: ''
    });

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData({ ...formData, [name]: value });
        console.log(formData);
    }
    const handleForm = (e) => {
        if (!formData.fullname || !formData.email || !formData.password) {
            toast.error('Please fill in all required fields! ❌');
            return;
        }
        localStorage.setItem("popx_user", JSON.stringify(formData));
        toast.success('🦄 Account created successfully');
        setTimeout(() => {
            navigate('/account');
        }, 1000);
        setFormData({
            fullname: '',
            phno: '',
            email: '',
            password: '',
            company: '',
            isAgency: ''
        });
    };
    return (
        <>
            <ToastContainer
                position="top-right"
                autoClose={5000}
                hideProgressBar={false}
                newestOnTop={false}
                closeOnClick={false}
                rtl={false}
                pauseOnFocusLoss
                draggable
                pauseOnHover
                theme="light"
            // transition={Bounce}
            />
            <div className='h-dvh flex flex-col justify-center items-center'>
                <div className=' w-full md:w-100 bg-blue-50 h-full xl:h-[90%] flex flex-col justify-between gap-10 p-8 sm:rounded-xl shadow-lg '>
                    <div className='flex flex-col gap-8'>
                        <h2 className='text-2xl w-1/2 font-bold'>Create your PopX account</h2>
                        <form action="" id='create-form' className='flex flex-col gap-6 '>
                            <div className='relative'>
                                <label htmlFor="fullname" className='text-[#9e72fc] text-[14px] -top-2.5 left-3 font-semibold absolute bg-blue-50 px-1'>Full name <span className='text-red-500 '>*</span></label>
                                <input onChange={handleChange} value={formData.fullname} className='border px-4 py-2 w-full rounded-md' type="text" name="fullname" id="fullname" required placeholder='John Doe' />
                            </div>
                            <div className='relative'>
                                <label htmlFor="phno" className='text-[#9e72fc] text-[14px] -top-2.5 left-3 font-semibold absolute bg-blue-50 px-1'>Phone number <span className='text-red-500 '>*</span></label>
                                <input onChange={handleChange} value={formData.phno} className='border px-4 py-2 w-full rounded-md' type="number" name="phno" id="phno" required placeholder='+91 98572 41652' />
                            </div>
                            <div className='relative'>
                                <label htmlFor="email" className='text-[#9e72fc] text-[14px] -top-2.5 left-3 font-semibold absolute bg-blue-50 px-1'>Email Address <span className='text-red-500 '>*</span></label>
                                <input onChange={handleChange} value={formData.email} className='border px-4 py-2 w-full rounded-md' type="email" name="email" id="email" required placeholder='example@com' />
                            </div>
                            <div className='relative'>
                                <label htmlFor="password" className='text-[#9e72fc] text-[14px] -top-2.5 left-3 font-semibold absolute bg-blue-50 px-1'>Password <span className='text-red-500 '>*</span></label>
                                <input onChange={handleChange} value={formData.password} className='border px-4 py-2 w-full rounded-md' type="password" name="password" id="password" required />
                            </div>
                            <div className='relative'>
                                <label htmlFor="company" className='text-[#9e72fc] text-[14px] -top-2.5 left-3 font-semibold absolute bg-blue-50 px-1'>Company Name <span className='text-red-500 '>*</span></label>
                                <input onChange={handleChange} value={formData.company} className='border px-4 py-2 w-full rounded-md' type="text" name="company" id="company" required placeholder='Educase' />
                            </div>
                            <div className='flex flex-col gap-3'>
                                <p>Are you an Agency?<span className='text-red-500'>*</span></p>
                                <div className='flex  gap-6'>
                                    <div className='flex gap-2 cursor-pointer'>
                                        <input type="radio" name="isAgency" id="yes" className='w-5 ' required value="yes" checked={formData.isAgency === "yes"} onChange={handleChange} />
                                        <label htmlFor="yes" className='cursor-pointer'>Yes</label>
                                    </div>
                                    <div className='flex gap-2 cursor-pointer'>
                                        <input type="radio" name="isAgency" id="no" className='w-5 ' required value="no" checked={formData.isAgency === "no"} onChange={handleChange} />
                                        <label htmlFor="no" className='cursor-pointer'>No</label>
                                    </div>
                                </div>
                            </div>
                        </form>
                    </div>
                    <button onClick={handleForm} form='create-form' type='submit' className='px-4 py-2 rounded-md text-slate-100  bg-[#6c25ff] cursor-pointer font-semibold'>Create Account</button>
                </div>
            </div>
        </>
    )
}

export default Create