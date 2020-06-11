import React from 'react'
import './Home.css'
import Button from '../Button/Button'

function Home(){
    return(
        <div id="home" className="section-container">
            <div className="box">
                <p className="firacode">Hi, my name is</p>
                <h1 className="headline-primary">Justin Lee.</h1>
                <h1 className="headline-secondary">I build things for the web.</h1>
                <p className="description">I'm a junior software engineer based in New Brunswick, Canada specializing in building (also designing) high-quality web applications.</p>
                <Button text="Get in touch"></Button>
            </div>
        </div>
    )
}

export default Home