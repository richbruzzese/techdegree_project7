import React from 'react'
import {NavLink} from 'react-router-dom'

// NavLink elements for Routes
const Nav = props =>( <nav className="main-nav">
        <ul>
            <li><NavLink to="/trees">Trees</NavLink></li>
            <li><NavLink to="/castles">Castles</NavLink></li>
            <li><NavLink to="/mountains">Mountains</NavLink></li>
        </ul>
    </nav>
)
export default Nav