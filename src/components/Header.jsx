import React from 'react'

export default function Header() {
    return (
        <div className='Header bg-white h-24 w-screen'>
            <div className='w-[80%] h-[100%] m-auto flex items-center'>
                <div className='w-1/2'>
                    <p className='font-semibold text-3xl'>Where in the world ?</p>
                </div>
                <div className='w-1/2 flex justify-end'>
                <button className="bg-black text-white py-2 px-4 rounded">
                    Dark mode
                </button>
                </div>
            </div>
        </div>
    )
}
