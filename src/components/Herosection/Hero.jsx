import React from 'react'
import { FaGithub, FaLinkedinIn, FaSkype, FaTwitterSquare } from 'react-icons/fa'
import { ImCircleDown } from 'react-icons/im'
import './Hero.scss'

const Hero = () => {
    return (
        <header className="header">
            <div className="overlay">
                <div className="content-area">
                    <div className="header__banner">
                        <h1 className="main-title">
                            I'm Nuh  Ali.
                        </h1>
                        <h4 className="main-text">
                            I'm an ambitious, commercially focused website developer and experienced project manager, with a
                            wealth of transferable skills and a passion for digital innovation, I'm seeking an entry-level
                            role as a Front-End Developer.
                        </h4>
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
                    </div>
                    <div className="down-icon">
                        <ImCircleDown />
                    </div>
                </div>
            </div>
        </header>
    )
}

export default Hero
