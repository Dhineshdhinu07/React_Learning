import React from 'react'

const products = [
    {
        name: 'Phone',
        price: 1000,
        description: "Good Phone",
    },
    {
        name: 'Laptop',
        price: 2000,
        description: "Good Laptop",
    },
    {
        name: 'Watch',
        price: 500,
        description: "Good Watch",
    },
]
const ProductList = () => {
  return (
    <div>
        {products.map(({name, price, description}) => (
            <ul key={Math.random()}>
                <li>{name}</li>
                <li>{price}</li>
                <li>{description}</li>
            </ul>
        ))}
    </div>
  )
}

export default ProductList