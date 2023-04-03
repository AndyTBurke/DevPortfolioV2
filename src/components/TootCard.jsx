import React from "react"
import '../styles/TootCard.css'

export default function TootCard(props) {

    const tootTime = new Date(props.timestamp)

    return (
    <div className="toot-container">
        <p className="toot-time">{tootTime.toLocaleString("en-US", { hour12: false })}</p>
        <h4 className="toot-content">{<div dangerouslySetInnerHTML={{__html: props.content}} />}</h4>
        <div className="toot-info-div">
            
            <p>Boosts: {props.boostCount}</p>
            <p>Replies: {props.repliesCount}</p> 
                
        </div>
    </div>
    )
}