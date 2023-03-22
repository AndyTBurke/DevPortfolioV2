import React from "react"
import react_logo from "./assets/react_logo.svg"
import css_logo from "./assets/css_logo.png"
import html_logo from "./assets/html_logo.png"
import javascript_logo from "./assets/javascript_logo.png"
import python_logo from "./assets/python_logo.png"

export default function WhatIKnow() {

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
            <img src={html_logo} style={imgStyle} />
            <img src={css_logo} style={imgStyle} />
            <img src={javascript_logo} style={imgStyle} title="JavaScript" />
            <img src={react_logo} style={imgStyle} title="React" />
            <img src={python_logo} style={imgStyle} title="Python" />
        </div>
    )
}