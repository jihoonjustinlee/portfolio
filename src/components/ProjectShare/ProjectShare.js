import React from 'react'
import './ProjectShare.css'
import { faGithub } from '@fortawesome/free-brands-svg-icons'
import { faExternalLinkAlt } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

function onClickHandler(url){
    window.open(url)
}

function ProjectShare(props){
    return(
        <div className="project-share-container">
            <FontAwesomeIcon icon={faGithub} className="share-icon" onClick={()=>onClickHandler(props.github_url)}/>
            {props.external_url == "" ? null : <FontAwesomeIcon icon={faExternalLinkAlt} className="share-icon" onClick={()=>onClickHandler(props.external_url)}/>}
            
        </div>
    )
}

export default ProjectShare