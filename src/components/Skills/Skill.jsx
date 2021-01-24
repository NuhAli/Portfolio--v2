import React from 'react'

const Skill = (props) => {
    return (
        <div className="skill">
            <img src={props.skill.src} alt={props.skill.name} />
            <div className="container">
                <h4><b>{props.skill.name}</b></h4>
            </div>
        </div>

    )
}

export default Skill
