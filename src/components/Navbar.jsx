import React from "react"
import logo from "../assets/react-logo.png"

export default function Navbar(){
    return(  
            <nav className="navigation">
                <img src={logo} className="logo"/>
                <h2 className="nav-heading">ReactFacts</h2>
                <h3>React Course - Project 1</h3>
            </nav>
        
    )
}


