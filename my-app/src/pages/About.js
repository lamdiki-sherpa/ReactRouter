import React from 'react'
import { Link } from 'react-router-dom'
import '../App.css'; 

const About = () => {
  return (
    <section>
      <h3>About</h3>
      <p style={{marginTop:'-10px',letterSpacing:'6px'}}>about page</p>
        <Link to="/" className='btn'>
            Back home
        </Link>
    </section>
  )
}

export default About