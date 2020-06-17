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
            <CSSTransition timeout={1300} in={this.state.mounted}>
                <a href="mailto:jihoonjustinlee1@gmail.com" className="fixed-email">jihoonjustinlee1@gmail.com</a>
            </CSSTransition>
        )
    }
}


export default Email