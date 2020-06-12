import React from 'react'
import './ProjectShare.css'
import { faGithub } from '@fortawesome/free-brands-svg-icons'
import { faExternalLinkAlt } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

function ProjectShare(props){
    return(
        <div className="project-share-container">
            <FontAwesomeIcon icon={faGithub} className="share-icon"/>
            <FontAwesomeIcon icon={faExternalLinkAlt} className="share-icon"/>
        </div>
    )
}

export default ProjectShare