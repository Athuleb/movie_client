import React from 'react'
import NavbarComponent from '../components/NavbarComponent'
import { Outlet } from 'react-router-dom'
import Footer from "../components/Footer";

function MainLayout() {
  return (
    <div>
        <NavbarComponent/>
        <Outlet/>
        <Footer/>
    </div>
  )
}

export default MainLayout