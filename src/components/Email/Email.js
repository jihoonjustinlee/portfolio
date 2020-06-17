import React from 'react'
import './Email.css'
import { CSSTransition } from 'react-transition-group'

class Email extends React.Component{
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

    render(){
        return(
            <div className="fixed-email-container">
                <CSSTransition timeout={1300} in={this.state.mounted}>
                    <a href="mailto:jihoonjustinlee1@gmail.com" className="fixed-email">jihoonjustinlee1@gmail.com</a>
                </CSSTransition>
                <CSSTransition timeout={1200} in={this.state.mounted}>
                    <div className="vertical-line"></div>
                </CSSTransition>
            </div>
        )
    }
}


export default Email