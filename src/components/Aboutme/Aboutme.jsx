import React from 'react'
import { FaDownload } from 'react-icons/fa'
import Particles from 'react-particles-js'
import { params } from './Animationparams'
import './Aboutme.scss'
import { data } from './Aboutmedata'

const Aboutme = () => {

    return (
        <section id="about-me">
            <Particles
                params={params}
            />
            <div className="overlay">
                <div className="container">
                    <div className="image-area">
                        <img src={data.img} alt="Nuh Ali" />
                    </div>
                    <div className="text-area">
                        <div className="about-me-text">
                            <h2 className="title">
                                About Me
                        </h2>
                            <p className="main-text">
                                {
                                    data.text
                                }
                            </p>
                        </div>
                        <div className="contact-details">
                            <div className="details">
                                <h2 className="title">
                                    Contact Details
                            </h2>
                                <ul>
                                    <li>Phone Number: 07534651923</li>
                                    <li>Email Address: Nuh_Mali@hotmail.co.uk</li>
                                </ul>
                            </div>
                            <div className="resume">
                                <a
                                    href="https://docs.google.com/document/d/1JWwHpDpFMV63NybFhADgri3Q_fPhAMjQnZWnk7_kPA4/edit?usp=sharing"
                                    rel="noreferrer"
                                    target="_blank"
                                    className="download"
                                >
                                    <FaDownload /> My Resume
                            </a>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default Aboutme
