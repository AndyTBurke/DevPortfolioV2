import React from "react"
import oops_renie from "../assets/oops_renie.png"
import "../styles/NotFound.css"

export default function NotFound() {
    return (
        <div className="not-found-page">
            <h1>404</h1>
            <img src={oops_renie} />
            <h3>Uh oh! This page doesn't exist!</h3>
        </div>
        
    )
}