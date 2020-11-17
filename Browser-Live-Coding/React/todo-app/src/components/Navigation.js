import React from 'react'
import logo from "../images/logo.png"
import {Link} from "react-router-dom"

export default function Navigation() {
    return (
       <nav>

           <div className="left">
               <Link to="/"> 
                    <img src={logo} alt="logo image"/>
               </Link>
           </div>

           <div className="right">
               <Link to="/about">About</Link>
           </div>

       </nav>
    )
}



