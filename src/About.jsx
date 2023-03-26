import React from "react"
import react_logo from "./assets/react_logo.svg"
import css_logo from "./assets/css_logo.png"
import html_logo from "./assets/html_logo.png"
import javascript_logo from "./assets/javascript_logo.png"
import python_logo from "./assets/python_logo.png"
import './styles/About.css'

export default function About() {

    const aboutMetext = `I have passion for creating beautiful and responsive web applications 
        using React, HTML, CSS, and JavaScript. I also have some experience with back-end 
        technologies such as MongoDB, Express, and Node, as well as Google's Firebase platform. 
        My journey as a programmer began in high school with BASIC, which I used to create programs for my TI-83 
        graphing calculator. Since then, I've continued to expand my skills, including learning Python
        and some of its more popular libraries like Tensor Flow and Pandas. I earned a bachelor's degree in 
        Physiology, which provided me with a strong foundation in critical thinking and problem-solving. 
        With this background, I approach coding challenges with a detail-oriented and analytical mindset. 
        I'm excited to continue building innovative and user-friendly web applications!`

    return (
        <div className="about-me-container">
            <h2>About Me</h2>
            <p>{aboutMetext}</p>
            <div className="about-me-icons">
                <img src={html_logo} className="imgStyle" />
                <img src={css_logo} className="imgStyle" />
                <img src={javascript_logo} className="imgStyle" title="JavaScript" />
                <img src={react_logo} className="imgStyle" title="React" />
                <img src={python_logo} className="imgStyle" title="Python" />
            </div>
        </div>
    )
}