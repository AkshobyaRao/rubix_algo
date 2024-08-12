"use client"; // Ensure this code is executed on the client-side
import "./globals.scss";
import { useEffect } from "react";

export default function Home({width2}) {
        // useEffect(() => {
        //     // Ensure this runs after the component has mounted
        //     const progressElement = document.getElementById("progress");
        //     if (progressElement) {
        //         progressElement.style.width = width2;
        //     }
        // }, []); 
        const progressElement = document.getElementById("progress");
        if (progressElement) {
                progressElement.style.width = width2;
        }
        return (
        <nav className="navbar_main">
            <span className="temp_logo">
                🚀
            </span>
            <ul className="main_contents">
                <div className="progress_bar">
                </div>
                <div className="progress" id="progress">
                </div>
                <li>
                    Algorithms
                </li>
                <li>
                    Timer 🔒
                </li>
                <li>
                    Courses 🔒    
                </li>
            </ul>
        </nav>   
  );
}
