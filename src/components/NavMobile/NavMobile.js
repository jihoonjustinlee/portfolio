import React from 'react'
import './NavMobile.css'

function scrollTo(element){
    const e = document.getElementById(element)
    e.scrollIntoView()
}

function NavMobile(){
    return(
        <div className="nav-mobile">
            <div className="nav-mobile-open-button"></div>
            <div className="navbar"></div>
        </div>
    )
}

export default NavMobile