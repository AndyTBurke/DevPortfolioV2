import React from "react"
import '../styles/TootCard.css'
import mastodon_boost_icon from "../assets/mastodon_boost_icon.png"
import comment_icon from "../assets/comment_icon.png"
import favorite_icon from "../assets/favorite_icon.png"
import link_icon from "../assets/link_icon.png"

export default function TootCard(props) {
    const tootTime = new Date(props.timestamp)
    const tootImages = props.tootMedia.length > 0 ? 
        props.tootMedia
            .reduce((acc, image) => image.type === "image" 
                ? [...acc, <img className="toot-image" src={image.url} />] 
                : acc, []) 
        : null

    return (
    <div className="toot-container">
        <p className="toot-time">{tootTime.toLocaleString("en-US", { hour12: false })}</p>
        
        <h4 className="toot-content">{<div dangerouslySetInnerHTML={{__html: props.content}} />}</h4>
        {tootImages}
        <div className="toot-info-div">
            <p>
                <img src={mastodon_boost_icon} className="mastodon-icon" /> {props.boostCount}
            </p>
            <p>
                <img src={comment_icon} className="mastodon-icon" /> 
                <a href={props.repliesCount > 0 && props.tootUrl}>
                    {props.repliesCount}
                </a>
            </p>
            <p>
                <img src={favorite_icon} className="mastodon-icon" /> {props.favoritesCount}
            </p>  
            <p>
                <a href={props.tootUrl}>
                    <img src={link_icon} className="mastodon-icon" />
                </a>
            </p>    
        </div>
    </div>
    )
}