import React from 'react'
import './Button.css'

function Button(props){
    return(
        <a className="button" href={props.a_href} target="_blank">{props.text}</a>
    )
}

export default Button