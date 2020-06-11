import React from 'react'
import './Bubble.css'

function Bubble(props){
    return(
        <div className="bubble">
            {props.text}
        </div>
    )
}

export default Bubble