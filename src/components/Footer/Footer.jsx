import React from 'react'
import { ImCircleUp } from 'react-icons/im'
import { FaGithub, FaLinkedinIn, FaSkype, FaTwitterSquare } from 'react-icons/fa'
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
                    <a href="https://www.google.com">
                        <FaGithub className="icon" />
                    </a>
                    <a href="www.google.com">
                        <FaLinkedinIn className="icon" />
                    </a>
                    <a href="www.google.com">
                        <FaSkype className="icon" />
                    </a>
                    <a href="www.google.com">
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
