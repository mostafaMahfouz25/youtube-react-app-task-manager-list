import React from 'react'
import {NavLink} from 'react-router-dom';

export default function Navbar() {
    return (
        <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
        <NavLink className="navbar-brand" to="/">Home</NavLink>
        <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarNav">
          <ul className="navbar-nav">
            <li className="nav-item">
              <NavLink className="nav-link" to="/add-task" >Add Task</NavLink>
            </li>
            <li className="nav-item">
              <NavLink className="nav-link" to="/">All Tasks</NavLink>
            </li>
          
          </ul>
        </div>
      </nav>
    )
}
