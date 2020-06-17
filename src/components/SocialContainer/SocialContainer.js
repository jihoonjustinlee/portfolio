import React from 'react'
import './SocialContainer.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faLinkedin, faGithub, faFacebook } from '@fortawesome/free-brands-svg-icons'
import { CSSTransition } from 'react-transition-group'

class SocialContainer extends React.Component{
    constructor(props){
        super(props)
        this.state = {
            mounted: false
        }
    }

    componentDidMount(){
        this.setState({
            mounted: true
        })
    }

    onClickHandler(url){
        window.open(url)
    }

    render(){
        return(
            <div className="social-container">
                <CSSTransition className="social-container-icon" timeout={1200} in={this.state.mounted}>
                    <FontAwesomeIcon icon={faGithub} onClick={()=>this.onClickHandler('https://github.com/jihoonjustinlee')}/>
                </CSSTransition>
                <CSSTransition className="social-container-icon" timeout={1100} in={this.state.mounted}>
                    <FontAwesomeIcon icon={faLinkedin} onClick={()=>this.onClickHandler('https://www.linkedin.com/in/jihoonjustinlee/')}/>
                </CSSTransition>
                <CSSTransition className="social-container-icon" timeout={1000} in={this.state.mounted}>
                    <FontAwesomeIcon icon={faFacebook} onClick={()=>this.onClickHandler('https://www.facebook.com/justin.lee.754')}/>
                </CSSTransition>
            </div>
        )
    }
}

// function onClickHandler(url){
//     window.open(url);
// }

// function SocialContainer(){
//     return(
//         <div className="social-container">
//             <FontAwesomeIcon icon={faGithub} onClick={()=>onClickHandler('https://github.com/jihoonjustinlee')}/>
//             <FontAwesomeIcon icon={faLinkedin} onClick={()=>onClickHandler('https://www.linkedin.com/in/jihoonjustinlee/')}/>
//             <FontAwesomeIcon icon={faFacebook} onClick={()=>onClickHandler('https://www.facebook.com/justin.lee.754')}/>
//         </div>
//     )
// }

export default SocialContainer