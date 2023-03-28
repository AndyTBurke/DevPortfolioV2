import React from "react"
import './styles/Projects.css'
import ProjectCard from "./components/ProjectCard.jsx"
import { projectData } from "./data/projectData.js"

export default function Hero() {

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
        <div className="project-main-container">
            <h2>PROJECTS</h2>
            {projectCards}
        </div>
    )
}