import React from "react"
import react_logo from "./assets/react_logo.svg"
import css_logo from "./assets/css_logo.png"
import html_logo from "./assets/html_logo.png"
import javascript_logo from "./assets/javascript_logo.png"
import python_logo from "./assets/python_logo.png"
import './styles/WhatIKnow.css'

export default function WhatIKnow() {

    return (
        <div className="containerStyle">
            <img src={html_logo} className="imgStyle" />
            <img src={css_logo} className="imgStyle" />
            <img src={javascript_logo} className="imgStyle" title="JavaScript" />
            <img src={react_logo} className="imgStyle" title="React" />
            <img src={python_logo} className="imgStyle" title="Python" />
        </div>
    )
}