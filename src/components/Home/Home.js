import React from 'react'
import './Home.css'
import Button from '../Button/Button'
import { CSSTransition } from 'react-transition-group'

class Home extends React.Component{
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
            <div id="home" className="section-container">
                <div className="box">
                    <CSSTransition timeout={200} in={this.state.mounted}>
                        <p className="firacode">Hi, my name is</p>
                    </CSSTransition>
                    <CSSTransition timeout={300} in={this.state.mounted}>
                        <h1 className="headline-primary">Justin Lee.</h1>
                    </CSSTransition>
                    <CSSTransition timeout={400} in={this.state.mounted}>
                        <h1 className="headline-secondary">I build things for the web.</h1>
                    </CSSTransition>
                    <CSSTransition timeout={500} in={this.state.mounted}>
                        <p className="description">I'm a software engineer based in New Brunswick, Canada specializing in building (also designing) high-quality web applications.</p>
                    </CSSTransition>
                    <CSSTransition timeout={600} in={this.state.mounted}>
                        <Button text="Get in touch" a_href="mailto:jihoonjustinlee1@gmail.com"></Button>
                    </CSSTransition>
                </div>
            </div>
        )
    }
}

export default Home