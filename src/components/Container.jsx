import React from 'react'
import Card from "./Card"
import { useEffect,useState } from 'react'

export default function Main({setActualObj, nameCountry, darkMode, regionSelected}) {
    const [data,setData] = useState([])
    const [sortedData,setSortedData] = useState([])

    async function fetchDataJSON() {
        const response = await fetch("https://restcountries.com/v3.1/all");
        const data = await response.json();
        setData(data);
        setSortedData(data.sort(compare));
    }

    function compare(a, b) {
        if (a.name.common < b.name.common) {
            return -1;
        }
        if (a.name.common > b.name.common) {
            return 1;
        }
        return 0;
    }
    useEffect(() => {
        fetchDataJSON()
    }, []);
    
    useEffect(() => {
        setSortedData(data)
        if (nameCountry != "") {
            let dataFiltredBySearch = data
            dataFiltredBySearch = dataFiltredBySearch.filter(country => country.name.common.toUpperCase().startsWith(nameCountry.toUpperCase()));
            setSortedData(dataFiltredBySearch);         
        }
    }, [nameCountry]);

    useEffect(()=> {
        setSortedData(data)
        let dataFiltredByRegion = data
        if (regionSelected == "All regions") {
            setSortedData(data)
            console.log("Toute les regions")
        } else if (regionSelected != "All regions") {
            dataFiltredByRegion = dataFiltredByRegion.filter(country => country.region.includes(regionSelected));
            setSortedData(dataFiltredByRegion); 
        }
    }, [regionSelected])
    
    return (
        <div className='Main w-[80%] h-[100px] m-auto mt-10 flex gap-7 justify-center flex-wrap'>
            {
                sortedData.map((element,index)=>{
                    return      <Card 
                                    key={index} 
                                    darkMode={darkMode}
                                    setActualObj={setActualObj}
                                    element={element}
                                />
                })
            }
        </div>
    )
}
