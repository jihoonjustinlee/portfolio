import React from 'react'
import './Footer.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faLinkedin, faGithub, faFacebook } from '@fortawesome/free-brands-svg-icons'

function onClickHandler(url){
    window.open(url)
}

function Footer(){
    return(
        <div className="footer">
            <div className="text">
                Justin Lee | Software Engineer
            </div>
            <div className="social-icons">
                <FontAwesomeIcon icon={faGithub} className="social-icon" onClick={() => onClickHandler('https://github.com/jihoonjustinlee')}/>
                <FontAwesomeIcon icon={faLinkedin} className="social-icon" onClick={() => onClickHandler('https://www.linkedin.com/in/jihoonjustinlee/')}/>
                <FontAwesomeIcon icon={faFacebook} className="social-icon" onClick={()=> onClickHandler('https://www.facebook.com/justin.lee.754')}/>
            </div>
            <a className="text email" href="mailto:jihoonjustinlee1@gmail.com">
                jihoonjustinlee1@gmail.com
            </a>
        </div>
    )
}

export default Footer