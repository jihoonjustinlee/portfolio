import React from 'react'
import './Navbar.css'
import Button from '../Button/Button'

function scrollTo(element){
    const e = document.getElementById(element)
    e.scrollIntoView()
}

function Navbar(props){
    return(
        <nav>
            <ul>
                <div className="left">
                    <li onClick={() => scrollTo('home')}>Justin Lee</li>
                </div>
                <div className="right">
                    <li onClick={() => scrollTo('about')}>01. About Me</li>
                    <li onClick={() => scrollTo('work')}>02. Experience</li>
                    <li onClick={() => scrollTo('project')}>03. Projects</li>
                    <li onClick={() => scrollTo('contact')}>04. Contact</li>
                    <Button text="Resume"></Button>
                </div>
            </ul>
        </nav>
    )
}

export default Navbar