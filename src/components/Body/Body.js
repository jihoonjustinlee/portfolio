import React from 'react'
import Home from '../Home/Home'
import About from '../About/About'
import Work from '../Work/Work'
import Project from '../Project/Project'
import Contact from '../Contact/Contact'
import SocialContainer from '../SocialContainer/SocialContainer'
import './Body.css'

function Body(){
    return(
        <div className="body">
            <Home></Home>
            <About></About>
            <Work></Work>
            <Project></Project>
            <Contact></Contact>
            <SocialContainer></SocialContainer>
        </div>
    )
}

export default Body