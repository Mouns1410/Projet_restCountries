import React from 'react'

export default function Header({setDarkMode, darkMode}) {
    return (
        <div className={darkMode ? "Header bg-black text-white h-20 w-screen" : "Header bg-white h-20 w-screen"}>
            <div className='w-[80%] h-[100%] m-auto flex items-center'>
                <div className='w-1/2'>
                    <p className='font-semibold text-3xl'>Where in the world ?</p>
                </div>
                <div className='w-1/2 flex justify-end'>
                    <button onClick={()=>{setDarkMode(!darkMode)}} 
                            className={darkMode ? "bg-white text-black py-2 px-4 rounded" : "bg-black text-white py-2 px-4 rounded"}>
                        {darkMode ? <div className='flex items-center'><i className="fa-solid fa-sun text-xl"></i> &nbsp; Light mode</div> : <div className='flex items-center'><i className="fa-solid fa-moon text-xl"></i> &nbsp; Dark mode</div>}
                    </button>
                </div>
            </div>
        </div>
    )
}
