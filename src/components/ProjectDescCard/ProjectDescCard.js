import React from 'react'
import './ProjectDescCard.css'

function ProjectDescCard(props){
    return(
        <div className="project-desc-card">
            {props.desc}
        </div>
    )
}

export default ProjectDescCard