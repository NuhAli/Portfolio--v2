import React, {useState} from 'react'
import Data from './Data'
import {Link} from 'react-router-dom'
import {FaBars,FaTimes} from 'react-icons/fa'
import './Navbar.scss'


const Navbar = () => {

    const [clicked,setClicked] = useState(false)

    const handleClick = () => {
        setClicked(!clicked)
    }

    const navItems = Data.map(item => {
        return (
            <Link
                key={item.id}
                to={item.path}
            >
                <li
                    className={item.className}
                >
                    {item.name}
                </li>
            </Link>
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
            <div className={clicked?"nav__container active": "nav__container"}>
                <ul  className="nav__menu">
                    {
                        navItems
                    }
                </ul>
            </div>
        </nav>
    )
}

export default Navbar
