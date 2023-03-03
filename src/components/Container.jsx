import React from 'react'
import Card from "./Card"
import { useEffect,useState } from 'react'

export default function Main({actualObj, setActualObj, valueTask}) {
    const [data,setData] = useState([])
    const [sortedData,setSortedData] = useState([])

    async function fetchDataJSON() {
        const response = await fetch("https://restcountries.com/v3.1/all");
        const data = await response.json();
        setData(data);
        setSortedData(data.sort(compare));
        // console.log(data);
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
        if (valueTask != "") {
            let test = data
            test = test.filter(task => task.name.common.toUpperCase().startsWith(valueTask.toUpperCase()));
            setSortedData(test);         
        }
    }, [valueTask]);
    
    return (
        <div className='Main w-[80%] h-[100px] m-auto mt-10 flex gap-7 justify-center flex-wrap'>
            {
                sortedData.map((element,index)=>{
                    return      <Card 
                                    key={index} 
                                    pays={element.name.common} 
                                    capital={element.capital} 
                                    region={element.continents} 
                                    img={element.flags.svg} 
                                    population={element.population}
                                    setActualObj={setActualObj}
                                    element={element}
                                />
                                {/* Des que je rajoute Link Probleme */}
                })
            }
        </div>
    )
}
