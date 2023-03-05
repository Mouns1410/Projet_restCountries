import React from 'react'
import { useState } from 'react'

export default function Navigation({valueTask, setValueTask, darkMode}) {
    return (
        <div className='Navigation'>
            <div className='w-[80%] h-[100px] m-auto flex items-center'>
                <div className='w-1/2 flex absolut justify-start'>
                    <div className=" flex items-center pl-3 pointer-events-none">
                        <svg aria-hidden="true" className="relative left-12 w-5 h-5 dark:text-black" xmlns="http://www.w3.org/2000/svg"><path fillRule="evenodd" d="M8 4a4 4 0 100 8 4 4 0 000-8zM2 8a6 6 0 1110.89 3.476l4.817 4.817a1 1 0 01-1.414 1.414l-4.816-4.816A6 6 0 012 8z" clipRule="evenodd"></path></svg>
                    </div>
                    <input 
                            value={valueTask}
                            onChange={(e) => {
                                setValueTask(e.target.value);
                            }}
                            type="text"
                            className='py-3 px-20 shadow-xl focus:outline-none' 
                            placeholder='Search for a country' 
                    />
                </div>
                <div className='w-1/2 flex justify-end'>
                    <div>
                        <select className='py-3 px-5 shadow-xl'>
                            <option value="1">All regions</option>
                            <option value="2">Africa</option>
                            <option value="3">America</option>
                            <option value="4">Asia</option>
                            <option value="5">Europa</option>
                            <option value="6">Oceania</option>
                        </select>
                    </div>
                </div>  
            </div>
        </div>
    )
}
