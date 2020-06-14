import React from 'react'
import Button from '../Button/Button'
import Headline from '../Headline/Headline'
import './Contact.css'

function Contact(){
    return(
        <div id="contact" className="section-container">
            <div className="box">
                <Headline number="04. " title="Get In Touch"></Headline>
                <p className="description">I'm currently looking for new opportunities. If you have a work for me or just want to say hello, please contact me!</p>
                <Button text="Contact Justin" a_href="mailto:jihoonjustinlee1@gmail.com"></Button>
            </div>
        </div>
    )
}

export default Contact