import React from 'react'
import { useContext } from 'react'
import {ThemeContext} from '../contexts/ThemeContext'

function Nav(props) {
  const { theme, handleTheme } = useContext(ThemeContext)

  return (
    <div className="nav">
      <div className="logo">ToDo</div>
      <div className="group">
        {
          theme === 'dark' ?
            <button className="btnTheme" onClick={handleTheme}>
              <i className="fas fa-moon"></i>
              Dark Mode
            </button>
            :
            <button className="btnTheme" onClick={handleTheme}>
              <i className="fas fa-sun"></i>
              Light Mode
            </button>
        }

        <div className="avt" onClick={props.handleLogout}>
          <i className="fas fa-user-circle"></i>
        </div>
      </div>
    </div>
  )
}

export default Nav