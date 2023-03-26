import React from "react"
import turkey_timer_project from "./assets/turkey_timer_project.png"
import ProjectCard from "./components/ProjectCard.jsx"
import { projectData } from "./data/projectData.js"

export default function Hero() {

    const containerStyle = {
        background: "#C7E3F7",
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

    const projectCards = projectData.map(project => (
        <ProjectCard 
            projectName={project.projectName}
            projectDescription={project.projectDescription}
            projectImg={project.projectImg}
            projectLiveLink={project.projectLiveLink}
            projectGitLink={project.projectGitLink}
        />
    )
    )

    return (
        <div style={containerStyle}>
            <h2>PROJECTS</h2>
            {projectCards}
        </div>
    )
}