import React from 'react'
import { Outlet } from 'react-router-dom'
import Navbar from './Navbar'

function Layout({ girlfriendName }) { // Receive prop
  return (
    <>
      <Navbar girlfriendName={girlfriendName} /> {/* Pass to Navbar */}
      <main>
        <Outlet />
      </main>
    </>
  )
}

export default Layout