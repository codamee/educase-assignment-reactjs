import { useState, React } from 'react';
import { useNavigate } from 'react-router-dom'
import { ToastContainer, toast } from 'react-toastify';


const Signin = () => {
    const navigate = useNavigate();
    const [loginData, setLoginData] = useState({
        email: '',
        password: ''
    });
    const handleChange = (e) => {
        const { name, value } = e.target;
        setLoginData({ ...loginData, [name]: value });
    };
    const handleLogin = (e) => {
        e.preventDefault();
        const savedData = localStorage.getItem("popx_user");
        if (savedData) {
            const registeredUser = JSON.parse(savedData);
            const isEmailValid = loginData.email === registeredUser.email;
            const isPasswordValid = loginData.password === registeredUser.password;
            if (isEmailValid && isPasswordValid) {
                localStorage.setItem("isLoggedIn", "true");
                navigate('/account');
            } else {
                toast('🤷‍♀️ Wrong email or Password ! Try again', {
                    position: "top-right",
                });
            }
        } else {
            toast('👤 No Account found create an Account!', {
                position: "top-right",
                autoClose: 5000,
                hideProgressBar: false,
                closeOnClick: true,
            });
        }
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
            <div className='h-screen flex flex-col justify-center items-center'>
                <div className='w-full md:w-100 shadow-lg bg-blue-50 h-full xl:h-[90%] flex flex-col justify-between gap-10 p-8 sm:rounded-xl'>
                    <div className='flex flex-col gap-6'>
                        <h2 className='text-2xl text w-[60%] font-bold'>Signin to  your PopX account</h2>
                        <p className='text-gray-600'>Join PopX today and take control of your digital presence</p>
                        <form action="" className='flex flex-col gap-6 '>

                            <div className='relative'>
                                <label htmlFor="email" className='text-[#9e72fc] text-[14px] -top-2.5 left-3 font-semibold absolute bg-blue-50 px-1'>Email Address <span className='text-red-500 '>*</span></label>
                                <input onChange={handleChange} value={loginData.email} className='border px-4 py-2 w-full rounded-md' type="email" name="email" id="email" required placeholder='example@com' />
                            </div>
                            <div className='relative'>
                                <label htmlFor="password" className='text-[#9e72fc] text-[14px] -top-2.5 left-3 font-semibold absolute bg-blue-50 px-1'>Password <span className='text-red-500 '>*</span></label>
                                <input onChange={handleChange} value={loginData.password} className='border px-4 py-2 w-full rounded-md' type="password" name="password" id="password" minLength="3" required />
                            </div>

                            <button onClick={handleLogin} className='px-4 py-2 rounded-md text-slate-100 font-semibold  bg-[#6c25ff] cursor-pointer'>Login</button>
                        </form>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Signin