import React from 'react'
import { NavLink } from 'react-router-dom'
import '../App.css'
////////////////NavLink allow us to style
const Navbar = () => {
  return (
    <nav className='navbar'>
        {/* <NavLink to={"/"} style={({isActive})=>{
            return {color:isActive ? 'red' : 'green' }

        }}>Home</NavLink> ==================we can either use style or classname=========*/}
         <NavLink to={"/"} className={({isActive})=>isActive ? 'active' : 'link' }

        >Home</NavLink>
        <NavLink to={"/about"} className={({isActive})=>isActive ? ' active' : 'link' 

        }>About</NavLink>
        <NavLink to={"/products"} className={({isActive})=>isActive ? ' active' : 'link' 

        }>Products</NavLink>
         <NavLink to={"/login"} className={({isActive})=>isActive ? ' active' : 'link' 

}>Login</NavLink>
    </nav>
  )
}

export default Navbar