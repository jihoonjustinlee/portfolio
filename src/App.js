import React from 'react'
import Navbar from './components/Navbar/Navbar'
import NavMobile from './components/NavMobile/NavMobile'
import Body from './components/Body/Body'


class App extends React.Component{
    constructor(props){
        super(props)
        this.state = {
            isMobile: false
        }
    }

    toggleNavType(){
        const screenWidth = document.body.clientWidth
        if (screenWidth > 721){
            this.setState({
                isMobile: false
            })
        } else{
            this.setState({
                isMobile: true
            })
        }
    }

    componentDidMount(){
        window.addEventListener('resize', () => this.toggleNavType())
        this.toggleNavType()
    }

    render(){
        return(
            <div className="app">
                <Navbar></Navbar>
                <Body></Body>
            </div>
        )
    }
}
export default App