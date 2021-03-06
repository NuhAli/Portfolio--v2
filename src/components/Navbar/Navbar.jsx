import React, { useState } from 'react'
import Data from './Data'
import {FaBars,FaTimes} from 'react-icons/fa'
import './Navbar.scss'


const Navbar = () => {
    // State Area 
    const [clicked,setClicked] = useState(false)

    const handleClick = () => {
        setClicked(!clicked)
    }
    // State Area ends
    const navItems = Data.map(item => {
        return (
            <a href={item.path}
                key={item.id}
                onClick={()=>{setClicked(false)}}
            >
                <li className={item.className}>
                    {item.name}
                </li>
            </a>
        )
    })

    return (
        <nav className="nav">
            <div className="nav__icon">
                {
                    clicked? 
                        <FaTimes onClick={handleClick} />:
                        <FaBars onClick={handleClick} />
                }
            </div>
            <div className={clicked ? "nav__container active": "nav__container"}>
                <ul className="nav__menu">
                    {
                        navItems
                    }
                </ul>
            </div>
        </nav>
    )
}

export default Navbar
