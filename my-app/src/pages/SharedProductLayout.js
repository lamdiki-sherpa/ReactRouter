import React from 'react'
import {Outlet } from 'react-router-dom'
import '../App.css'

const SharedLayout = () => {
  return (
    <section>
    <h3>Products</h3> 
    <Outlet/>
    </section>

  )
}

export default SharedLayout