import React, { useState } from 'react'
import './Navbar.css'
import Button from '../Button/Button'
import logo from './logo.svg'
import png from './portfolio.png'

class Navbar extends React.Component{
    constructor(props){
        super(props)
        this.state = {
            isMobile: false,
            mobileNavShown: false,
            lastScrollPos: 0
        }
    }

    changeNavStyle(){
        const navBar = document.getElementById('navbar')
        if (this.state.lastScrollPos > window.scrollY){
            navBar.style.top = '0'
            if (window.scrollY > 0){
                navBar.style.boxShadow = "0px 5px 10px 1px #0000007a"
            } else{
                navBar.style.boxShadow = 'initial'
            }
        } else{
            if (window.scrollY > 50){
                navBar.style.top = '-100px'
            }
        }
        this.setState({
            lastScrollPos: window.scrollY
        })
    }

    scrollTo(element){
        const e = document.getElementById(element)
        const body = document.getElementsByTagName('body')[0]
        e.scrollIntoView()
        this.setState({
            mobileNavShown: false
        }, ()=>{
            if (this.state.isMobile){
                body.style.overflow = 'initial'
            }
        })
    }

    toggleNavType(){
        const screenWidth = document.body.clientWidth
        if (screenWidth > 721){
            this.setState({
                isMobile: false,
                mobileNavShown: false
            })
        } else{
            this.setState({
                isMobile: true
            })
        }
    }

    toggleMobileNav(){
        const body = document.getElementsByTagName('body')[0]
        this.setState(prev => ({
            mobileNavShown: !prev.mobileNavShown
        }), ()=>{
            if (this.state.mobileNavShown){
                body.style.overflow = 'hidden'   
            } else{
                body.style.overflow = 'initial'
            }
        })
    }

    componentDidMount(){
        this.toggleNavType()
        window.addEventListener('resize', () => this.toggleNavType())
        window.addEventListener('scroll', () => this.changeNavStyle())
    }

    render(){
        return(
            <nav id="navbar">
                <ul>
                    <div className="left">
                        <img src={logo} className="logo" onClick={() => this.scrollTo('home')}/>
                    </div>
                    <div className="right">
                        { this.state.isMobile ? <div className={`navbar-mobile-toggle-button${this.state.mobileNavShown ? ' opened' : ''}`} onClick={() => this.toggleMobileNav()}>
                            <div className="toggle-button-bar top"></div>
                            <div className="toggle-button-bar middle"></div>
                            <div className="toggle-button-bar bottom"></div>
                        </div> : <div className="navbar-desktop">
                            <li onClick={() => this.scrollTo('about')}>01. About Me</li>
                            <li onClick={() => this.scrollTo('work')}>02. Experience</li>
                            <li onClick={() => this.scrollTo('project')}>03. Project</li>
                            <li onClick={() => this.scrollTo('contact')}>04. Contact</li>
                            <Button text="Resume" a_href={png}></Button>
                        </div>}
                    </div>
                </ul>
                { this.state.isMobile && this.state.mobileNavShown ? 
                    <div className="navbar-mobile">
                        <div className="navbar-mobile-container">
                            <div className="navbar-mobile-container-options">
                                <div className="option" onClick={() => this.scrollTo('about')}>01. About Me</div>
                                <div className="option" onClick={() => this.scrollTo('work')}>02. Experience</div>
                                <div className="option" onClick={() => this.scrollTo('project')}>03. Project</div>
                                <div className="option" onClick={() => this.scrollTo('contact')}>04. Contact</div>
                            </div>
                        </div>
                    </div> : null}
            </nav>
        )
    }
}


// let lastScrollPos = 0

// window.addEventListener('scroll', function(){
//     const navBar = document.getElementById('navbar')
//     if (lastScrollPos > window.scrollY){
//         navBar.style.top = '0'
//         if (window.scrollY > 0){
//             navBar.style.boxShadow = "0px 5px 10px 1px #0000007a"
//         } else{
//             navBar.style.boxShadow = 'initial'
//         }
//     } else{
//         if (window.scrollY > 50){
//             navBar.style.top = '-100px'
//         }
//     }
//     lastScrollPos = window.scrollY
// })

// function scrollTo(element){
//     const e = document.getElementById(element)
//     e.scrollIntoView()
// }

// function Navbar(props){
//     return(
//         <nav id="navbar">
//             <ul>
//                 <div className="left">
//                     <img src={logo} className="logo" onClick={() => scrollTo('home')}/>
//                 </div>
//                 <div className="right">
//                     <li onClick={() => scrollTo('about')}>01. About Me</li>
//                     <li onClick={() => scrollTo('work')}>02. Experience</li>
//                     <li onClick={() => scrollTo('project')}>03. Project</li>
//                     <li onClick={() => scrollTo('contact')}>04. Contact</li>
//                     <Button text="Resume" a_href={png}></Button>
//                 </div>
//             </ul>
//         </nav>
//     )
// }

export default Navbar