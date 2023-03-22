import React from "react"
import profile_img from "./assets/profile_img.png"

export default function Hero() {

    const containerStyle = {
        background: "#ADD8E6",
        width: "45rem",
        padding: ".2em 1em",
        borderRadius: "20px",
        color: "#213547",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        margin: "1em 0"
    }

    return (
        <div style={containerStyle}>
            <img src={profile_img} style={{width: "230px"}} />
            <h1>Hello! My name is <span style={{display: "inline-block"}}>Andrew Burke,</span> and I make web apps.</h1>
        </div>
    )
}