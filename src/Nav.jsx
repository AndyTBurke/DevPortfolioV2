import React from "react"
import {NavLink} from "react-router-dom"

const navStyle = {
    width: "45rem",
    padding: ".2em 1em",
    borderRadius: "20px",
    color: "#213547",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    margin: "1em 0"
}

const navLinkStyle = {
    margin: "1em 2em",
    background: "#213547",
    color: "white",
    padding: ".5em 1em",
    borderRadius: "10px"
}

export default function Nav() {
    return (
        <nav style={navStyle}>
            <NavLink style={navLinkStyle} to="">About</NavLink>
            <NavLink style={navLinkStyle} to="">Projects</NavLink>
            <NavLink style={navLinkStyle} to="">Contact</NavLink>
        </nav>
    )
}