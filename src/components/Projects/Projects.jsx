import React from 'react'
import Project from './Project'
import './Project.scss'


const Projects = (props) => {
    const projectList = props.portfolio.map(item => {
        return (
            <Project
                project={item}
                key={item.id}
                handleClick={props.handleClick}
            />
        )
    })
    return (
        <section id="projects">
            <div className="container">
                <h2 className="section-title">
                    My Work
                </h2>
                <div className="portfolio-area">
                    {
                        projectList
                    }
                </div>
            </div>
        </section>
    )
}

export default Projects
