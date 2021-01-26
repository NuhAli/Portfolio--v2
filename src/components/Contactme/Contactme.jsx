import React from 'react'
import Particles from 'react-particles-js'
import {params} from './Animationparams'
import './Contactme.scss'

const Contactme = () => {
    return (
        <section className="bottom-hero">
            <Particles
                    params={params}
            />
            <div className="overlay">
                <div className="container">
                    <div className="form-area">
                        <form action="" >
                            <div className="row">
                                <input
                                    type="text"
                                    name="name" 
                                    placeholder="Full Name"
                                    autoComplete="off"
                                    required
                                />
                                <input 
                                    type="tel" 
                                    name="contactNumber" 
                                    placeholder="Phone Number"
                                    autoComplete="off"
                                    required
                                />
                            </div>
                            <div className="row">
                                <input
                                    type="email"
                                    name="email" 
                                    placeholder="Email Address"
                                    autoComplete="off"
                                    required
                                />
                                <input
                                    type="text" 
                                    name="Company" 
                                    placeholder="Company name"
                                    autoComplete="off"
                                    required
                                />
                            </div>
                            <div className="row">
                                <textarea
                                    name=""
                                    id="" 
                                    cols="30"
                                    rows="10" 
                                    placeholder="Message..."
                                    autoComplete="off"
                                    required
                                >
                                </textarea>
                            </div>
                        </form>
                    </div>
                    <div className="social-media">
                        <div className="section-title">
                            <h2>Contact Me</h2>
                            <h5>Follow me on my social media to keep up to date on my latest projects</h5>
                        </div>
                        <div className="twitter-feed">

                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default Contactme
