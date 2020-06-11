import React from 'react'
import './WorkplaceChoose.css'

function WorkplaceChoose(props){
    return(
        <div className={`work-choose${props.selected ? ' active' : ''}`} onClick={()=>props.showWorkPlace(props.idx)}>
            <div className={`left-border-highlight${props.selected ? ' active' :''}`}></div>
            <div className={`text${props.selected ? ' active' : ''}`}>{props.place}</div>
        </div>
    )
}

export default WorkplaceChoose