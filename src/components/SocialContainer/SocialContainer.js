import React from 'react'
import './SocialContainer.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faLinkedin, faGithub, faFacebook } from '@fortawesome/free-brands-svg-icons'

function onClickHandler(url){
    window.open(url);
}

function SocialContainer(){
    return(
        <div className="social-container">
            <FontAwesomeIcon icon={faGithub} onClick={()=>onClickHandler('https://github.com/jihoonjustinlee')}/>
            <FontAwesomeIcon icon={faLinkedin} onClick={()=>onClickHandler('https://www.linkedin.com/in/jihoonjustinlee/')}/>
            <FontAwesomeIcon icon={faFacebook} onClick={()=>onClickHandler('https://www.facebook.com/justin.lee.754')}/>
        </div>
    )
}

export default SocialContainer