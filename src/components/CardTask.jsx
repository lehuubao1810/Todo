import React from 'react'
import { useState } from 'react'
import ModalTask from './ModalTask'

function CardTask(props) {
    const [statusModal, setStatusModal] = useState(false)

    const borderColor = props.task.status === 'Completed' ? 'green' : 'red'
    const handleModal = () => {
        setStatusModal(true)
    }
    const handleOverlay = () => {
        setStatusModal(false)
    }

    return (
        <>
            <div className={`${borderColor} cardTask `} onClick={handleModal}>
                <div className="title">{props.task.title}</div>
                <div className="description">{props.task.description}</div>
            </div>
            {
                statusModal &&
                <div
                    onClick={handleOverlay}
                    className="overlay"
                >
                    <ModalTask
                        tasks={props.tasks}
                        task={props.task}
                        index={props.index}
                        handleDeleteTask={props.handleDeleteTask}
                        handleOverlay={handleOverlay}
                        saveLocalStorage={props.saveLocalStorage}
                    />
                </div>
            }
        </>


    )
}

export default CardTask