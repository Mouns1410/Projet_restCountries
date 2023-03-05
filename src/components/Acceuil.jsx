import React from 'react'
import Header from "./Header"
import Navigation from "./Navigation"
import Container from "./Container"
import { useState } from "react"

export default function Acceuil({actualObj, setActualObj, darkMode, setDarkMode}) {
    const [valueTask, setValueTask] = useState("");
    return (
        <div className={darkMode ? "Acceuil h-screen w-screen bg-[#1e1c1f] overflow-x-hidden" : 'Acceuil h-screen w-screen bg-slate-100 overflow-x-hidden'}>
            <Header setDarkMode={setDarkMode} darkMode={darkMode} />
            <Navigation valueTask={valueTask} setValueTask={setValueTask} />
            <Container darkMode={darkMode} actualObj={actualObj} setActualObj={setActualObj} valueTask={valueTask} />
        </div>
    )
}
