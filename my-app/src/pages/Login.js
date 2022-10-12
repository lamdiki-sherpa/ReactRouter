import React from 'react'
import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
const Login = ({setUser}) => {
    const [name,setName]=useState('')
    const [email,setEmail]=useState('')
    const navigate =useNavigate()
    const handleSubmit=(e)=>{
     e.preventDefault();
     if(!name || !email) return;
     setUser({name:name,email:email});
     navigate('/dashboard')
     console.log(name)
     setName('')
     setEmail('')
    }
  return (
    <section>
        <form onSubmit={handleSubmit}>
            <h3>Login</h3>
            <div>
                <label>Enter your name</label>
                <input type='text' value={name} onChange={(e)=>setName(e.target.value)} className='form-control'/><br/>
                <label>Enter your email</label>
                <input type='email' value={email} onChange={(e)=>setEmail(e.target.value)} className='form-control'
                />
                <button type='submit' className='login-btn'>Login</button>
            </div>
        </form>
    </section>
  )
}

export default Login