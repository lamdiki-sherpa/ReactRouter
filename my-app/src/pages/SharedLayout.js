import React from 'react'
import { Link,Outlet } from 'react-router-dom'
import '../App.css'
import Navbar from '../components/Navbar'
import StyledNavbar from '../components/StyledNavbar'

const SharedLayout = () => {
  return (
    <>
    <Navbar/>
    <Outlet/> {/*outlet makes the Navbar available page among all 
        the nested pages inside it i.e home,about,product etc and also lets
         those pages display after navbar*/}

    </>

  )
}

export default SharedLayout