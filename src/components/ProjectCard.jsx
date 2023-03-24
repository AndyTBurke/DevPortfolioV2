import React from "react"
import '../styles/ProjectCard.css'

export default function ProjectCard(props) {
    return (
        <div className="project-card-container">
            <h3>{props.projectName}</h3>
            <div className="project-details">
                <a href={props.projectLiveLink}>
                    <img src={props.projectImg} />
                </a>
                <p>{props.projectDescription}</p>
            </div>
            <div className="button-div">
                <a href={props.projectLiveLink}>
                    <button className="defaultButton">LIVE PROJECT</button>
                </a>
                <a href={props.projectGitLink}>
                    <button className="defaultButton">VIEW CODE</button>
                </a>
            </div>
    </div>
    )
}