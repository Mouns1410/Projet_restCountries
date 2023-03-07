import React from 'react'
import Header from "./Header"
import Navigation from "./Navigation/Navigation"
import Container from "./Container"
import { useState } from "react"

export default function Acceuil({actualObj, setActualObj, darkMode, setDarkMode, data, setData}) {
    const [nameCountry, setNameCountry] = useState("");
    const [regionSelected, setRegionSelected] = useState("All regions")

    return (
        <div className={darkMode ? "Acceuil h-screen w-screen bg-[#1e1c1f] overflow-x-hidden" : 'Acceuil h-screen w-screen bg-slate-100 overflow-x-hidden'}>
            <Header setDarkMode={setDarkMode} darkMode={darkMode} />
            <Navigation nameCountry={nameCountry} setNameCountry={setNameCountry} setRegionSelected={setRegionSelected} regionSelected={regionSelected} />
            <Container data={data} setData={setData} regionSelected={regionSelected} darkMode={darkMode} actualObj={actualObj} setActualObj={setActualObj} nameCountry={nameCountry} />
        </div>
    )
}
