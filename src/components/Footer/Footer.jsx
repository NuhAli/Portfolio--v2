import React from 'react'
import { ImCircleUp } from 'react-icons/im'
import { FaGithub, FaLinkedinIn, FaTwitterSquare } from 'react-icons/fa'
import './Footer.scss'

const Footer = () => {
    return (
        <footer>
            <div className="circle">
                <a href="#header" className="top-icon">
                    <ImCircleUp />
                </a>
            </div>
            <div className="container">
                <div className="external-links">
                    <a href="https://github.com/NuhAli" target="_blank" rel="noreferrer">
                        <FaGithub className="icon" />
                    </a>
                    <a href="https://www.linkedin.com/in/nuh-ali-80a2121b2/" target="_blank" rel="noreferrer">
                        <FaLinkedinIn className="icon" />
                    </a>
                    <a href="https://twitter.com/NuhAli58506544" target="_blank" rel="noreferrer">
                        <FaTwitterSquare className="icon" />
                    </a>
                </div>
                <div className="credits">
                    <p>
                        Site developed by Nuh Ali using React.js
                    </p>
                </div>
            </div>
        </footer>
    )
}

export default Footer
