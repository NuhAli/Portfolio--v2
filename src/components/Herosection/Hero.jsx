import React from 'react'
import Particles from 'react-particles-js'
import {params} from './Heroparticles'
import { FaGithub, FaLinkedinIn, FaTwitterSquare } from 'react-icons/fa'
import { ImCircleDown } from 'react-icons/im'
import './Hero.scss'

const Hero = () => {
    return (
        <header id="header" className="header">
            <Particles
                    params={params}
            />
            <div className="overlay">
                <div className="content-area">
                    <div className="header__banner">
                        <h1 className="main-title">
                            I'm Nuh  Ali.
                        </h1>
                        <h4 className="main-text">
                            I'm an ambitious, commercially focused website developer and experienced project manager, with a
                            wealth of transferable skills and a passion for digital innovation, I'm seeking an entry-level
                            role as a Frontend Developer.
                        </h4>
                        <div className="external-links">
                            <a href="https://github.com/NuhAli" target="_blank" rel="noreferrer" >
                                <FaGithub className="icon" />
                            </a>
                            <a href="https://www.linkedin.com/in/nuh-ali-80a2121b2/" target="_blank" rel="noreferrer" >
                                <FaLinkedinIn className="icon" />
                            </a>
                            <a href="https://twitter.com/NuhAli58506544" target="_blank" rel="noreferrer">
                                <FaTwitterSquare className="icon" />
                            </a>
                        </div>
                    </div>
                    <a href="#about-me" className="down-icon">
                        <ImCircleDown />
                    </a>
                </div>
            </div>
        </header>
    )
}

export default Hero
