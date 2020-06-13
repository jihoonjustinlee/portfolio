import React from 'react'
import Headline from '../Headline/Headline'
import './Work.css'
import WorkplaceChoose from '../WorkplaceChoose/WorkplaceChoose'
import Workplace from '../Workplace/Workplace'

class Work extends React.Component{
    constructor(props){
        super(props)
        this.state = {
            places_worked: [
                {
                    'shortened':'UofF',
                    'title': 'Courseware Developer',
                    'place': 'University of Fredericton',
                    'date': 'Feb 2019 - April 2020',
                    'duties': [
                        "Developed web-based MBA courses using HTML templates",
                        "Maintained UofF's Learning Management System (Moodle)",
                        "Created media assets (images, videos, audios) used in the coursewares",
                        "Built an automation tool that generates courseware templates"
                    ],
                    'tools': [
                        'HTML',
                        'CSS',
                        'Javascript',
                        'jQuery',
                        'Vue.js',
                        'Express.js',
                        'Moodle API',
                        'Adobe After Effects',
                        'Adobe Premiere Pro',
                        'Adobe Animate'
                    ]
                },
                {
                    'shortened':'Lendgenuity',
                    'title': 'Frontend Developer',
                    'place': 'Lendgenuity',
                    'date': 'Nov 2019 - March 2020',
                    'duties': [
                        'Responsible for creating reusable components used in mortgage web application',
                        'Responsible for connecting RESTful API into frontend app',
                        'Assisted in wireframing the frontend web application'
                    ],
                    'tools':[
                        'Vue.js',
                        'Vuex',
                        'Justinmind'
                    ]
                },
                {
                    'shortened':'NRCan',
                    'title': 'Junior Developer (Co-op)',
                    'place': 'Natural Resources Canada',
                    'date': 'Sep 2015 - Dec 2015',
                    'duties': [
                        "Created Window's tablet application that automated the conducting safety inspections of the deparment's building",
                        'Maintained and fixed bugs of a mobile application'
                    ],
                    'tools':[
                        'HTML',
                        'CSS',
                        'Javascript',
                        'Apache Cordova'
                    ]
                }
            ],
            place_work_idx: 0,
            box_height: '',
            box_margin_top: ''
        }
    }
    
    updateBoxMargin(){
        const boxHeight = document.querySelector('#work .box').clientHeight
        const marginTop = `calc(50vh - ${boxHeight/2}px)`
        this.setState({
            box_height: boxHeight,
            box_margin_top: marginTop
        })
    }

    componentDidMount(){
        const boxHeight = document.querySelector('#work .box').clientHeight
        const marginTop = `calc(50vh - ${boxHeight/2}px)`
        this.setState({
            box_height: boxHeight,
            box_margin_top: marginTop
        })
        window.addEventListener('resize', ()=>this.updateBoxMargin())
    }

    showWorkPlace(idx){
        if (this.state.place_work_idx !== idx){
            this.setState({
                place_work_idx: idx
            })
        }
    }

    render(){
        const workplaceChoose = this.state.places_worked.map((item, idx)=>{
            return <WorkplaceChoose 
                    key={idx} 
                    idx={idx}
                    place={item.shortened} 
                    selected={this.state.place_work_idx === idx}
                    showWorkPlace={(idx) => this.showWorkPlace(idx)}
                    ></WorkplaceChoose>
        })

        const workplace = this.state.places_worked[this.state.place_work_idx]

        return(
            <div id="work" className="section-container">
                <div className="box" style={{'marginTop': this.state.box_margin_top}}>
                    <Headline number="02. " title="Where I've Worked"></Headline>
                    <div className="work-container">
                        <div className="place-work-choose">
                            {workplaceChoose}
                        </div>
                        <Workplace
                            title={workplace.title}
                            place={workplace.place}
                            date={workplace.date}
                            duties={workplace.duties}
                            tools={workplace.tools}
                        ></Workplace>
                    </div>
                </div>
            </div>
        )
    }
}

export default Work