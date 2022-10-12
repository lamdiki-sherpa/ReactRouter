import React from 'react'

const Dashboard = ({user}) => {
    const {name,email}=user;
  return (
    <section>
      <h3> Hello! {name}</h3>
     
    
    </section>
  )
}

export default Dashboard