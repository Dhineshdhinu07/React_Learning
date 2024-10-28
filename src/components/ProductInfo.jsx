import React from 'react'

const product = {
    name: "Phone",
    price: 1000,
    description: "Good Phone",
}
const ProductInfo = () => {
  return (
    <div>
        <p>{product.name}</p>
        <p>{product.price}</p>
        <p>{product.description}</p>
    </div>
  )
}

export default ProductInfo