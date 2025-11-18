import React from 'react'
import { NavLink } from 'react-router-dom'

function Navbar({ girlfriendName }) { // Receive prop
  return (
    <nav>
      <ul>
        <li>
          <NavLink to="/">Home</NavLink>
        </li>
        <li>
          <NavLink to="/gallery">Memories</NavLink> {/* Renamed for theme */}
        </li>
        <li>
          <NavLink to="/wishes">Messages</NavLink> {/* Renamed for theme */}
        </li>
        <li>
          <NavLink to="/story">Our Journey</NavLink> {/* New Link */}
        </li>
      </ul>
    </nav>
  )
}

export default Navbar