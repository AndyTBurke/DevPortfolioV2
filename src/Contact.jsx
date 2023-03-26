import React from "react"
import './styles/Contact.css'
import email_icon from "./assets/email_icon.png"
import linkedin_logo from "./assets/linkedin_logo.png"
import mastodon_logo from "./assets/mastodon_logo.png"

export default function Contact() {

    return (
        <div className="contact-container">
            <h2>Contact Me</h2>
            <div className="contact-icon-container">
                <a href="mailto: andrewtburke@gmail.com">
                    <img src={email_icon} className="contact-images"/>
                    email
                </a>
                <a href="https://www.linkedin.com/in/andrew-burke-mke/">
                    <img src={linkedin_logo} className="contact-images" />
                    LinkedIn
                </a>
                <a href="https://techhub.social/@andyb">
                    <img src={mastodon_logo} className="contact-images" />
                    Mastodon
                </a>
            </div>
        </div>
    )
}