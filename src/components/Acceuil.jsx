import React from 'react'
import Header from "./Header"
import Navigation from "./Navigation"
import Container from "./Container"
import { useState } from "react"

export default function Acceuil({actualObj, setActualObj}) {
    const [valueTask, setValueTask] = useState("");
    return (
        <div className='Acceuil h-screen w-screen bg-slate-100 overflow-x-hidden'>
            <Header />
            <Navigation valueTask={valueTask} setValueTask={setValueTask} />
            <Container actualObj={actualObj} setActualObj={setActualObj} valueTask={valueTask} />
        </div>
    )
}
