import React from 'react'

function Nav() {
  return (
    <div className="nav">
      <div className="logo">ToDo</div>
      <div className="group">
        <button className="btnTheme">
          <i className="fas fa-moon"></i>
          Dark Mode
        </button>
        <div className="avt">
          <i className="fas fa-user-circle"></i>
        </div>
      </div>
    </div>
  )
}

export default Nav