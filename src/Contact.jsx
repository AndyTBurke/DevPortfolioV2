import React from "react"
import './styles/Contact.css'
import email_icon from "./assets/email_icon.png"
import linkedin_logo from "./assets/linkedin_logo.png"
import mastodon_logo from "./assets/mastodon_logo.png"
import {NavLink} from "react-router-dom"

export default function Contact() {

    return (
        <div className="contact-container">
            <h2>CONTACT ME</h2>
            <div className="contact-icon-container">
                <a href="mailto: andrewtburke@gmail.com">
                    <img src={email_icon} className="contact-images"/>
                    email
                </a>
                <a href="https://www.linkedin.com/in/andrew-burke-mke/">
                    <img src={linkedin_logo} className="contact-images" />
                    LinkedIn
                </a>
                <NavLink to="/mastodon">
                    <img src={mastodon_logo} className="contact-images" />
                    Mastodon
                </NavLink>
            </div>
        </div>
    )
}