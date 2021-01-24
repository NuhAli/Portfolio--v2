import React from 'react'
import { FaDownload } from 'react-icons/fa'
import './Aboutme.scss'
import { data } from './Aboutmedata'

const Aboutme = () => {
    return (
        <section id="about-me">
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
                        </div>
                        <div className="resume">
                            <a href="https://www.google.com" download>
                                <button>
                                    <FaDownload /> Download My Resume
                                </button>
                            </a>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default Aboutme