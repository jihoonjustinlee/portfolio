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
                    <li onClick={() => scrollTo('about')}>About</li>
                    <li>Projects</li>
                    <li>Work</li>
                    <li>Contact</li>
                    <Button text="Resume"></Button>
                </div>
            </ul>
        </nav>
    )
}

export default Navbar