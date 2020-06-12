import React from 'react'
import './ProjectContainer.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faGithub } from '@fortawesome/free-brands-svg-icons'
import ProjectDescCard from '../ProjectDescCard/ProjectDescCard'
import ProjectShare from '../ProjectShare/ProjectShare'
import Bubble from '../Bubble/Bubble'

function ProjectContainer(props){
    const bubbles = props.tools.map((tool, idx)=>{
        return <Bubble key={idx} text={tool}></Bubble>
    })

    return(
        <div className={`project-container${props.reverse ? ' reverse' : ''}`}>
            <div className="left">
                <img src={props.image}/>
                <FontAwesomeIcon icon={faGithub} className="github"/>
            </div>
            <div className="right">
                <div className="right-first">
                    <div className="header">Personal Project</div>
                    <div className="project-name">{props.name}</div>
                </div>
                <ProjectDescCard desc={props.desc}></ProjectDescCard>
                <div className="bubbles-container">
                    { bubbles }
                </div>
                <ProjectShare></ProjectShare>
            </div>
        </div>
    )
}

export default ProjectContainer