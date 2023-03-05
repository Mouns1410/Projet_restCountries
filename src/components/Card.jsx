import React from 'react'
import { Link } from "react-router-dom"

export default function Card({setActualObj, element, darkMode}) {
    return (
        <div onClick={()=>{setActualObj(element);}}
            className={darkMode ? 'Card w-[23%] h-[400px] shadow-xl rounded-md bg-black text-white' : 'Card w-[23%] h-[400px] shadow-xl rounded-md bg-white'}>
            <Link to={"/country/:pays"}>
                <div className='h-[45%] w-[100%]'>
                    <img src={element.flags.svg} className='h-[100%] w-[100%] rounded-t-md' />
                </div>
                <div className='w-[100%] flex flex-col gap-7 py-5 px-3'>
                    <div>
                        <p className='font-semibold text-xl'>{element.name.common}</p>
                    </div>
                    <div className='flex flex-col gap-1'>
                        <p>
                            <span className='font-semibold'>Population :</span>&nbsp;{element.population}
                        </p>
                        <p>
                            <span className='font-semibold'>Region :</span>&nbsp;{element.continents}
                        </p>
                        <p>
                            <span className='font-semibold'>Capital :</span>&nbsp;{element.capital}
                        </p>
                    </div>
                </div>
            </Link>
        </div>
    )
}
