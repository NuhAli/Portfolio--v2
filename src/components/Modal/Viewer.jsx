
import React from 'react'
import Modal from 'react-bootstrap/Modal'
import Button from 'react-bootstrap/Button'
import './Viewer.scss'

const Viewer = (props) => {

    const { name, image, description, liveUrl, github } = props.currentItem[0]

    return (
        <div className="modal">
            <Modal
                className="modal-header"
                show={props.status}
                onHide={props.handleClose}
                backdrop="static"
                keyboard={false}
                size="lg"
                centered
            >

                <Modal.Header closeButton>
                    <Modal.Title>{name}</Modal.Title>
                </Modal.Header>

                <Modal.Body>
                    <img src={image} alt={name} />
                    <p>{description}</p>
                </Modal.Body>

                <Modal.Footer>
                        <Button href={liveUrl} target="_blank" rel="noreferrer" variant="primary" onClick={props.handleClose} block>
                            Live Version
                        </Button>
                    
                        <Button variant="primary" href={github} target="_blank" rel="noopener noreferrer" block>
                            See Code
                        </Button>
                </Modal.Footer>

            </Modal>
        </div>
    );
}

export default Viewer

