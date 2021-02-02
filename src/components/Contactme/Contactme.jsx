import React from 'react'
import { useForm } from 'react-hook-form'
import Particles from 'react-particles-js'
import { params } from './Animationparams'
import { TwitterFollowButton, TwitterTweetEmbed } from "react-twitter-embed";
import sendForm from './Sendform';
import './Contactme.scss'


const Contactme = () => {

    const { register, handleSubmit,reset } = useForm({
        defaultValues: {
            name: "",
            contactNumber: "",
            email: "",
            company: "",
            message: ""
        }
    })
    
    const submit = (data) => {
        sendForm.submitForm(data)
        reset({})
    }

    return (
        <section id="contact-me" className="contact-me">
            <Particles
                params={params}
            />
            <div className="overlay">
                <div className="container">
                    <div className="social-media">
                        <div className="section-title">
                            <h2>Contact Me</h2>
                            <h5>Follow me on Twitter to keep up to date with my latest works and projects...</h5>
                        </div>
                        <div className="twitter-feed">
                            <TwitterFollowButton
                                screenName={'NuhAli58506544'}
                            />
                            <TwitterTweetEmbed
                                tweetId="1355470877463359489"
                            />
                        </div>
                    </div>
                    <div className="form-area">
                        <form onSubmit={handleSubmit(submit)} >
                            <div className="row">
                                <input
                                    type="text"
                                    name="name"
                                    placeholder="Full Name"
                                    autoComplete="off"
                                    ref={register}
                                    required
                                />
                                <input
                                    type="tel"
                                    name="contactNumber"
                                    placeholder="Phone Number"
                                    autoComplete="off"
                                    ref={register}
                                    required
                                />
                            </div>
                            <div className="row">
                                <input
                                    type="email"
                                    name="email"
                                    placeholder="Email Address"
                                    autoComplete="off"
                                    ref={register}
                                    required
                                />
                                <input
                                    type="text"
                                    name="company"
                                    placeholder="Company name"
                                    autoComplete="off"
                                    ref={register}
                                    required
                                />
                            </div>
                            <div className="row">
                                <textarea
                                    name="message"
                                    id=""
                                    cols="30"
                                    rows="13"
                                    placeholder="Message..."
                                    autoComplete="off"
                                    ref={register}
                                    required
                                >
                                </textarea>
                            </div>
                            <div className="row">
                                <button className="submit" type="submit">Send Message</button>
                            </div>
                        </form>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default Contactme
