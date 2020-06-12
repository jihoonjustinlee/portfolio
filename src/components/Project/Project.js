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
                    'desc': 'Cupidatat eiusmod adipisicing velit nisi magna labore sunt laboris labore velit.',
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
                    'desc': 'Veniam minim est enim qui laboris voluptate et anim.',
                    'github_url': '',
                    'external_url': '',
                    'tools': [
                        'React.js',
                        'Node.js'
                    ]
                },
                {
                    'name':'Bubble Split',
                    'reverse': false,
                    'image': bubble_split,
                    'desc': 'Esse eiusmod laboris nulla et excepteur laborum irure nisi magna aliqua.',
                    'github_url': '',
                    'external_url': '',
                    'tools': [
                        'React.js',
                        'Node.js'
                    ]
                },
                {
                    'name':'Portfolio Website',
                    'reverse': true,
                    'image': bubble_split,
                    'desc': 'Sint tempor aliquip exercitation esse.',
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