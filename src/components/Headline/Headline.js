import React from 'react'
import './Headline.css'

function Headline(props){
    return(
        <div className="headline">
            <h1 className="text">
                <span className="number">{props.number}</span>
                {props.title}
            </h1>
            <div className="horizontal-line"></div>
        </div>
    )
}

export default Headline