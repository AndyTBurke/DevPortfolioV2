import React from "react"
import {NavLink} from "react-router-dom"
import oops_renie from "../assets/oops_renie.png"
import "../styles/NotFound.css"

export default function NotFound() {
    return (
        <div className="not-found-page">
            <h1>This page doesn't exist!</h1>
            <img src={oops_renie} />
            <h3>Oh no!</h3>
            <NavLink to="/" className="not-found-return-home">GO HOME!</NavLink>
        </div>
        
    )
}