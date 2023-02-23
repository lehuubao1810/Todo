import React from 'react'
import { useState } from 'react'

function ModalTask(props) {

    const handleClose = (e) => {
        e.stopPropagation()
    }
    const [status, setStatus] = useState(props.task.status)

    const handleStatus = (e) => {
        setStatus(e.target.value)
        props.task.status = e.target.value
    }

    return (
        <div className="modalTask" onClick={e => handleClose(e)}>
            <div className="header">
                <div className="title">{props.task.title}</div>
                <div className="more">
                    <i className="fa-solid fa-ellipsis-vertical"></i>
                </div>
            </div>
            
            <div className="description">{props.task.description}</div>
            <h4>Current status</h4>
            <select
                className="status"
                onChange={e=>handleStatus(e)}
                value={status}
            >
                <option value="Completed">Completed</option>
                <option value="Incomplete">Incomplete</option>
            </select>
        </div>
    )
}

export default ModalTask