import React from 'react'
import { Link } from 'react-router-dom'
import products from './data'
import '../App.css'; 
import guitar from '../guitar1.jpg'
const Products = () => {
  return (
    <div>
     
    
      {products.map((product)=>{
  return <article key={product.id} style={{width:'300px'}}>
  <div class="card bg-white text-black">
  <img src={guitar} class="card-img" alt="image" style={{height:'280px'}}/>
  <div class="card-img-overlay">
  <h5 class="card-title">{product.name}</h5>
  <Link to={`/products/${product.id}`} className='btn'>
    more info
  </Link>
  </div>
</div>
  </article>
      })}
     
    </div>
  )
}

export default Products