import React, { useEffect } from 'react'
import { useReducer } from 'react'

const initialState = {
  title: '',
  description: '',
  status: 'Incomplete'
}

const reducer = (state, action) => {
  switch (action.type) {
    case 'title':
      return { ...state, title: action.payload }
    case 'description':
      return { ...state, description: action.payload }
    case 'status':
      return { ...state, status: action.payload }
    default:
      return state
  }
}

function ModalAdd(props) {

  const [state, dispatch] = useReducer(reducer, initialState)

  const handleChange = (e) => {
    dispatch({ type: e.target.name, payload: e.target.value })
  }

  const handleAddTask = () => {
    props.handleAddTask(state)
    props.handleOverlay()
  }

  const handleClose = (e) => {
    e.stopPropagation()
  }

  return (
    <div className="modalAdd modalForm" onClick={e => handleClose(e)} >
      <div className="title">Edit Task</div>
      <div className="form">
        <div className="formGroup">
          <label htmlFor="title">Title</label>
          <input
            type="text"
            name="title"
            id="title"
            value={state.title}
            onChange={handleChange}
          />
          <label htmlFor="description">Description</label>
          <textarea
            name="description"
            id="description"
            cols="30" rows="10"
            value={state.description}
            onChange={handleChange}
          ></textarea>
          <label htmlFor="status">Status</label>
          <select
            name="status"
            id="status"
            value={state.status}
            onChange={handleChange}
          >
            <option value="Completed">Completed</option>
            <option value="Incomplete">Incomplete</option>
          </select>
          <button
            className="btnAdd btn"
            onClick={handleAddTask}
          >
            Add Task
          </button>
        </div>
      </div>

    </div>
  )
}

export default ModalAdd