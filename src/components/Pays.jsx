import React from 'react'
import Header from "./Header"
import { Link,useParams } from "react-router-dom"

export default function Pays({actualObj, darkMode, setDarkMode, data}) {
    let currencie;
    let tabLanguages = [];
    let borderCountries = [];
    
    //! Empechez le refresh de la page et récupère l'objet d'une meilleure manière ?
        const {pays} = useParams(); //Dépends du chemin "/country:pays";

        actualObj = data.find((e) => e.name.common === pays);

        if(!actualObj){
            return <div className='h-screen w-screen flex justify-center items-center text-4xl bg-red-100'>
                        Loading..
                    </div>
        }
    //! -------------------------------------------------------------------------------
    //! Currencies / Languages / BorderCountries
    for (let element in actualObj.currencies) {
        currencie = element;
    }
    
    let recupLanguages = () => {
        for (let element in actualObj.languages) {
            tabLanguages.push(actualObj.languages[element]);
        }
    }

    borderCountries = data.filter(country => actualObj.borders ? actualObj.borders.includes(country.cca3) : "").map(country => country.name.common);
    //! -------------------------------------------------------------------------------
    
    return (
        <div className='Pays w-screen h-screen overflow-x-hidden'>
            {recupLanguages()}
            <Header setDarkMode={setDarkMode} darkMode={darkMode} />
            <div className={darkMode ? 'w-[100%] h-[90.25vh] bg-[#1e1c1f] text-white' : 'w-[100%] h-[90.25vh] bg-gray-100'}>
                <div className='w-[80%] m-auto pt-7'>
                    <Link to={"/"}><button className={darkMode ? "bg-black text-white rounded-lg shadow-xl px-6 py-3" : "bg-white rounded-lg shadow-xl px-6 py-3"}>
                        Back
                    </button></Link>
                </div>
                <div className='flex gap-14 h-[60%] w-[80%] m-auto mt-24'>
                    <div className='w-1/2 mt-5'>
                        <img src={actualObj.flags.svg} className="h-[100%] w-[100%]" />
                    </div>
                    <div className='w-1/2 mt-5'>
                        <p className='text-4xl font-semibold'>{actualObj.name.common}</p>
                        <div className=' w-[100%] h-[220px] mt-8 flex'>
                            <div className='h-[85%] w-1/2  flex flex-col gap-4 text-lg'>
                                <p>
                                    <span className='font-semibold'>Native name :</span>&nbsp;{actualObj.name.common}
                                </p>
                                <p>
                                    <span className='font-semibold'>Population :</span>&nbsp;{actualObj.population}
                                </p>
                                <p>
                                    <span className='font-semibold'>Region :</span>&nbsp;{actualObj.continents}
                                </p>
                                <p>
                                    <span className='font-semibold'>Sub Region :</span>&nbsp;{actualObj.subregion}
                                </p>
                                <p>
                                    <span className='font-semibold'>Capital :</span>&nbsp;{actualObj.capital}
                                </p>
                            </div>
                            <div className='h-[85%] w-1/2 flex flex-col gap-4 text-lg'>
                                <p>
                                    <span className='font-semibold'>Top Level Domain :</span>&nbsp;{actualObj.tld[0]}
                                </p>
                                <p>
                                    <span className='font-semibold'>Currencies :</span>&nbsp;{actualObj.currencies[currencie].name}
                                </p>
                                <p>
                                    <span className='font-semibold'>languages :</span>&nbsp;
                                    {
                                        tabLanguages.map((element,index) => {
                                            return <span key={index}>{element}, &nbsp;</span>
                                        })
                                    }
                                </p>
                            </div>
                        </div>
                        <div>
                            <p>
                                <span className='font-semibold'>Border Countries :</span>&nbsp;
                                <div className='flex gap-5 mt-3 flex-wrap'>
                                    {
                                        actualObj.borders ? borderCountries.map((element, index) => {
                                                                return (
                                                                    <Link to={`/country/${element}`} 
                                                                            key={index} 
                                                                            className="bg-white rounded px-6 py-2 shadow-lg">
                                                                        {element}
                                                                    </Link>
                                                                )
                                                                }) 
                                                        : ""
                                    }
                                </div>
                            </p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}


