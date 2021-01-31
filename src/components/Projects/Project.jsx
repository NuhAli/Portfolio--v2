import React from 'react'


const Project = (props) => {
    return (
        <div className="cards-item">
            <div className="cards-item-link" onClick={()=>props.handleClick(props.project.id)}>
                <figure
                    className="cards-item-pic-wrap" 
                    data-category={props.project.name}
                >
                    <img 
                        src={props.project.image} 
                        alt={props.project.name} 
                        className="cards-item-img"
                    />
                </figure>
            </div>
        </div>  
    )
}

export default Project
