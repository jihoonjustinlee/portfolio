import React from 'react'
import './About.css'
import Headline from '../Headline/Headline'
import self_portrait from './300.png'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faAngleRight } from '@fortawesome/free-solid-svg-icons'

function About(){
    return(
        <div id="about" className="section-container">
            <div className="box">
                <Headline number="01. " title="About Me"></Headline>
                <div className="about-me">
                    <div className="description">
                        <p style={{'marginTop': '0'}}>Hi there! I am Justin, a software engineer based in New Brunswick, Canada who enjoys creating user-friendly websites that are pixel perfect and visually fun to look at.</p>
                        <p>After graduating from <span className="highlight">University of New Brunswick</span> in 2019, I decided to join the development team at <span className="highlight">University of Frederiction</span>, working on different tasks on a daily basis but primarily focusing on creating web-based MBA courses.</p>
                        <p>As a junior engineer, I am still learning new things everyday, focusing on having as much exposures to modern technologies that are used in building full stack websites as well as mobile applications.</p>
                        <p>Here are some of the technologies that I've used recently.</p>
                        <div className="tech-grid">
                            <div><FontAwesomeIcon icon={faAngleRight} className="arrow"/>Python</div>
                            <div><FontAwesomeIcon icon={faAngleRight} className="arrow"/>Java</div>
                            <div><FontAwesomeIcon icon={faAngleRight} className="arrow"/>Javascript</div>
                            <div><FontAwesomeIcon icon={faAngleRight} className="arrow"/>HTML</div>
                            <div><FontAwesomeIcon icon={faAngleRight} className="arrow"/>CSS</div>
                            <div><FontAwesomeIcon icon={faAngleRight} className="arrow"/>Sass</div>
                            <div><FontAwesomeIcon icon={faAngleRight} className="arrow"/>React.js</div>
                            <div><FontAwesomeIcon icon={faAngleRight} className="arrow"/>Vue.js</div>
                            <div><FontAwesomeIcon icon={faAngleRight} className="arrow"/>Django</div>
                            <div><FontAwesomeIcon icon={faAngleRight} className="arrow"/>MongoDB</div>
                            <div><FontAwesomeIcon icon={faAngleRight} className="arrow"/>SQLite</div>
                        </div>
                    </div>
                    <div className="image-container">
                        <div className="underlying-background"></div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default About