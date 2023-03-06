import React from 'react'
import "./Navigation.css"

export default function Navigation({nameCountry, setNameCountry, setRegionSelected, regionSelected}) {
    return (
        <div className='Navigation'>
            <div className='w-[80%] h-[100px] m-auto flex items-center'>
                <div className='w-1/2 flex justify-start'>
                    <div className="flex items-center pointer-events-none">
                        <svg aria-hidden="true" className="relative left-12 w-5 h-5 dark:text-black" xmlns="http://www.w3.org/2000/svg"><path fillRule="evenodd" d="M8 4a4 4 0 100 8 4 4 0 000-8zM2 8a6 6 0 1110.89 3.476l4.817 4.817a1 1 0 01-1.414 1.414l-4.816-4.816A6 6 0 012 8z" clipRule="evenodd"></path></svg>
                    </div>
                    <input 
                            value={nameCountry}
                            onChange={(e) => {
                                setNameCountry(e.target.value);
                            }}
                            type="text"
                            className='py-3 px-20 shadow-xl focus:outline-none' 
                            placeholder='Search for a country' 
                    />
                </div>
                <div className='w-1/2 flex justify-end rightInput'>
                    <p>{regionSelected}</p>
                    <div className="dropdown-content">
                            <p onClick={() => { setRegionSelected("All regions")}}>All regions</p> 
                            <p onClick={() => { setRegionSelected("Africa")}}>Africa</p>
                            <p onClick={() => { setRegionSelected("America")}}>America</p>
                            <p onClick={() => { setRegionSelected("Asia")}}>Asia</p>
                            <p onClick={() => { setRegionSelected("Europe")}}>Europa</p>
                            <p onClick={() => { setRegionSelected("Oceania")}}>Oceania</p>
                    </div>
                </div>  
            </div>
        </div>
    )
}
