import React from 'react';
import Skill from './Skill';
import data from './Skillsdata';
import SkillBar from 'react-skillbars';
import softSkills from './Barskills'

import './Skills.scss';

const Skills = () => {

    const skillList = data.map(skill => {
        return <Skill skill={skill} key={Math.random()} />
    })

    return (
        <section id="skills">
            <div className="container">
                <div className="title-area">
                    <h2 className="section-title">
                        Technical Skills
                    </h2>
                </div>
                <div className="skills-area">
                    {
                        skillList
                    }
                </div>
                <div className="title-area">
                    <h2 className="section-title">
                        Soft Skills
                    </h2>
                </div>
                <div className="bar-area">
                    <SkillBar 
                        skills={softSkills}
                        height={'50px'}
                        animationDelay={300}
                    />
                </div>
            </div>
        </section>
    )
}

export default Skills