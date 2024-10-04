import React from 'react'
import NavbarComponent from '../components/NavbarComponent'
import { Outlet } from 'react-router-dom'

function MainLayout() {
  return (
    <div>
        <NavbarComponent/>
        <Outlet/>
    </div>
  )
}

export default MainLayout