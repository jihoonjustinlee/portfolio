import React from 'react'
import Headline from '../Headline/Headline'
import ProjectContainer from '../ProjectContainer/ProjectContainer'
import sorting_visualizer from './sorting_visualizer.png'
import docky from './docky.png'
import bubble_split from './bubble_split.png'
import portfolio from './portfolio.png'
import './Project.css'

class Project extends React.Component{
    constructor(props){
        super(props)
        this.state = {
            projects: [
                {
                    'name':'Sorting Visualizer',
                    'reverse': false,
                    'image': sorting_visualizer,
                    'alt':'preview image of sorting visualizer',
                    'desc': 'This project is my attempt to explain (visually) how each sorting algorithm works to beginners. The project currently can visualize Bubblesort and Mergesort.',
                    'github_url': 'https://github.com/jihoonjustinlee/SortingVisualizer',
                    'external_url': 'https://jihoonjustinlee.github.io/SortingVisualizer/',
                    'tools': [
                        'React.js',
                        'Node.js'
                    ]
                },
                {
                    'name':'Bubble Split',
                    'reverse': true,
                    'image': bubble_split,
                    'alt':'preview image of bubble split game',
                    'desc': 'A retro game I wrote in Python using PyGame.',
                    'github_url': 'https://github.com/jihoonjustinlee/BubbleSplit',
                    'external_url': '',
                    'tools': [
                        'Python',
                        'PyGame'
                    ]
                },
                {
                    'name':'Portfolio Website',
                    'reverse': false,
                    'image': portfolio,
                    'alt':"preview image of justin's portfolio website",
                    'desc': 'This is my personal portfolio website. Currently what you are viewing.',
                    'github_url': 'https://github.com/jihoonjustinlee/Portfolio',
                    'external_url': 'todo',
                    'tools': [
                        'React.js',
                        'Node.js'
                    ]
                },
                {
                    'name':'Docky',
                    'reverse': true,
                    'image': docky,
                    'alt':'preview image of docky',
                    'desc': 'This project was done while working at University of Fredericton. I created two automation tools called Docky and SBRun which aims to speed up the courseware development. This website also contains useful documentations that are still used at UFred nowadays. Use Secret123 for the password.',
                    'github_url': 'https://github.com/jihoonjustinlee/DockyFrontend',
                    'external_url': 'https://ufred-dev.herokuapp.com/',
                    'tools': [
                        'Vue.js',
                        'Express.js',
                        'MongoDB',
                        'Mongoose',
                        'Mlab',
                        'Node.js'
                    ]
                }
            ]
        }
    }

    render(){
        const projects = this.state.projects.map((project, idx)=>{
            return <ProjectContainer 
                    key={idx} 
                    name={project.name}
                    image={project.image}
                    reverse={project.reverse}
                    github_url={project.github_url}
                    external_url={project.external_url}
                    tools={project.tools}
                    desc={project.desc}
                    alt={project.alt}
                    ></ProjectContainer>
        })

        return(
            <div id="project" className="section-container">
                <div className="box">
                    <Headline number="03. " title="Things I've Built"></Headline>
                    {projects}
                </div>
            </div>
        )
    }
}


export default Project