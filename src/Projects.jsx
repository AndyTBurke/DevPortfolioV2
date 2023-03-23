import React from "react"
import turkey_timer_project from "./assets/turkey_timer_project.png"

export default function Hero() {

    const containerStyle = {
        background: "#ADD8E6",
        width: "45rem",
        padding: ".2em 1em",
        borderRadius: "20px",
        color: "#213547",
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        alignItems: "center",
        margin: "1em 0"
    }

    const projectContainerStyle = {
        display: "flex",
        flexDirection: "column",
        width: "100%",
        justifyContent: "center",
        alignItems: "center"
    }

    const projectCardStyle = {
        display: "flex",
        width: "100%",
        alignItems: "center",
        justifyContent: "space-around"
    }

    const projectImgStyle = {
        height: "275px",
        borderRadius: "20px",
        margin: "0 1em"
    }

    const projectDescriptionStyle = {
        padding: "1.2em",
        lineHeight: "1.2em",
        fontSize: "1.1em"
    }

    const projectTitle = {
        margin: ".1em",
        textDecoration: "underline"
    }

    return (
        <div style={containerStyle}>
            <h2>PROJECTS</h2>
            <div style={projectContainerStyle}>
                <h3 style={projectTitle}>TURKEY TIMER</h3>
                <div style={projectCardStyle}>
                    <img src={turkey_timer_project} style={projectImgStyle} />
                    <p style={projectDescriptionStyle}>Turkey Timer is a React-based front-end web project that estimates the cooking time for a turkey based on input such as weight, cooking method, and stuffing/frozen status. The tool is designed to help users better plan their Thanksgiving meals, by reducing the stress of keeping track of multiple recipes at once. The project was inspired by my experience of spatchcocking a turkey, and the difficulty of remembering how long it takes to cook.</p>
                </div>
                <h4>
                   LIVE PROJECT || VIEW CODE
                </h4>
            </div>
            <div style={projectContainerStyle}>
                project 2
            </div>
            <div style={projectContainerStyle}>
                project 3
            </div>
        </div>
    )
}