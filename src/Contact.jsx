import React from "react"
import email_icon from "./assets/email_icon.png"
import linkedin_logo from "./assets/linkedin_logo.png"
import mastodon_logo from "./assets/mastodon_logo.png"

export default function Contact() {

    const containerStyle = {
        background: "#d3e9f2",
        width: "45rem",
        padding: ".7em 1em",
        borderRadius: "20px",
        color: "#213547",
        display: "flex",
        justifyContent: "space-around",
        alignItems: "center",
    }

    const imgStyle = {
        height: "75px"
    }

    return (
        <div style={containerStyle}>
            <a href="mailto: andrewtburke@gmail.com">
                <img src={email_icon} style={imgStyle} />
            </a>
            <a href="https://www.linkedin.com/in/andrew-burke-mke/">
                <img src={linkedin_logo} style={imgStyle} />
            </a>
            <a href="https://techhub.social/@andyb">
                <img src={mastodon_logo} style={imgStyle} />
            </a>
        </div>
    )
}