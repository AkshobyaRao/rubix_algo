"use client"
import "./globals.scss";
import Data from "./plls.json"
import { useState } from "react";
import Navbar from "./navbar"
export default function Home() {
    const [width, setWidth] = useState(10)
    const categories = Object.keys(Data)
    function increaseProgress(key){
        setWidth(width + 15)
        setCompleted(prevState => ({
            ...prevState,
            [key]:true
        }))
    }
    const [completed, setCompleted] = useState(false)
    return (
        <main>
            <Navbar width2={width + 'px'}/>
            <section className="pll_algs">
                <h1 className="plls_algs_title">PLL Algorithms</h1>
                {categories.map(category => (
                    <div key={category} className="cards_container_pll">    
                        <h2 className="title_type">{category}</h2>
                        <section className="flex_container">
                            {Object.entries(Data[category]).map(([key, values]) => (
                                <div key={key} id="pll_seperate_container" className={completed[key] ?"completed pll_seperate_container" :"pll_seperate_container" }>
                                    <h3>{key}</h3>
                                    <p><strong>Main:</strong> {values.main}</p>
                                    <p><strong>Alternate:</strong> {values.alt}</p>
                                    <div className="buttons_container">
                                        {completed[key] ? <button id="add_to_complete_disabled" className="add_to_complete_disabled">Done</button> : <button id="add_to_complete" className="add_to_complete" onClick={() => increaseProgress(key)}>Done</button>}
                                        <button id="add_to_pause" className="add_to_pause" onClick={() => increaseProgress(key)}>Pause</button>
                                        {/* <button id="add_to_complete" className="add_to_complete" onClick={() => increaseProgress(key)}>+</button> */}
                                    </div>
                                </div>
                            ))} 
                        </section>
                    </div>
                ))}
            </section> 
        </main>
       
    );

}
 