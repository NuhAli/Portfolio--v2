import React from 'react'
import Card from 'react-bootstrap/Card'

const Project = (props) => {
    return (
        <Card 
            className="project"
            onClick={()=>props.handleClick(props.project.id)}
        >
            <Card.Img variant="top" src={props.project.image}  />
            <Card.Body>
                <Card.Title>{props.project.name}</Card.Title>
                <Card.Text>
                    {
                        props.project.description
                    }
                </Card.Text>
            </Card.Body>
        </Card>
    )
}

export default Project
