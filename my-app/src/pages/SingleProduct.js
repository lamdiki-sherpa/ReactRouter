import React from 'react'
import { Link,useParams } from 'react-router-dom'
import products from './data'
const SingleProduct = () => {
 
  const {productId}=useParams()
  console.log(productId)
  const product=products.find((product)=>product.id===productId)
  return (
    <>
    <h4>{product.name}</h4>
    <h6>${product.price}</h6>
    <p>{product.discription}</p>
    <Link to={'/products'} className='btn'>go to product</Link>
    </>

  )
}

export default SingleProduct