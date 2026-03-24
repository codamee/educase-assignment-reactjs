import React from 'react'
import { useState } from 'react'

const Account = () => {
    const [data, setData] = useState("")
    const handleData=(params) => {
        const savedData = localStorage.getItem("popx_user");
        if (savedData) {
            const registeredUser = JSON.parse(savedData);
            setData(registeredUser)
        }
    }
    return (
        <div className='w-full md:w-100 bg-blue-100 h-screen'>
            <div className='text-xl p-5 border-b border-b-gray-500 font-semibold'>Account Settings</div>
        </div>
    )
}

export default Account