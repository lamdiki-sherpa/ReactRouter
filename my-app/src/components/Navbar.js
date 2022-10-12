import React from 'react'
import { Link } from 'react-router-dom'
import '../App.css'
const Navbar = () => {
  return (
    <nav className='navbar'>
        <Link to={"/"} className='navbar-item'>Home</Link>
        <Link to={"/about"} className='navbar-item'>About</Link>
        <Link to={"/products"} className='navbar-item'>Products</Link>
        <Link to={"/login"} className='navbar-item'>Login</Link>
    </nav>
  )
}

export default Navbar