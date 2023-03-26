import React from "react"
import profile_img from "./assets/profile_img.png"
import './styles/Hero.css'

export default function Hero() {

    return (
        <div className="hero-container">
            <img src={profile_img} style={{width: "230px"}} />
            <h1 className="hero-title">
                Hello! My name is <span style={{display: "inline-block"}}><span className="hero-name">Andrew Burke</span>,</span> and I make web apps.
            </h1>
        </div>
    )
}