import React from 'react'
import Headline from '../Headline/Headline'
import ProjectContainer from '../ProjectContainer/ProjectContainer'
import sorting_visualizer from './sorting_visualizer.png'
import docky from './docky.png'
import bubble_split from './bubble_split.png'
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
                    'image': bubble_split,
                    'alt':"preview image of justin's portfolio website",
                    'desc': 'Sint tempor aliquip exercitation esse.',
                    'github_url': '',
                    'external_url': '',
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
                    'desc': 'Veniam minim est enim qui laboris voluptate et anim.',
                    'github_url': '',
                    'external_url': '',
                    'tools': [
                        'React.js',
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