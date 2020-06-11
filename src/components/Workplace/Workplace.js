import React from 'react'
import './Workplace.css'
import { faAngleRight } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import Bubble from '../Bubble/Bubble'

function Workplace(props){
    const duties = props.duties.map((duty, idx)=>{
        return (
            <div className="duty">
                <FontAwesomeIcon icon={faAngleRight} className="arrow"/>
                {duty}
            </div>)
    })

    const bubbles = props.tools.map((tool, idx)=>{
        return <Bubble text={tool}></Bubble>
    })

    return(
        <div className="workplace">
            <div className="title">{props.title} @ {props.place}</div>
            <div className="date">{props.date}</div>
            <div className="duty-container">
                { duties }
            </div>
            <div className="bubbles-container">
                { bubbles }
            </div>
        </div>
    )
}

export default Workplace