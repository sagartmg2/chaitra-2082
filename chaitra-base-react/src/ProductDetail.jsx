import React from 'react'
import { useParams } from 'react-router'

function ProductDetail() {
  const params = useParams()
  console.log(params.id);

//   https://dummyjson.com/products/2
  return (
    <div>ProductDetail Page</div>
  )
}

export default ProductDetail