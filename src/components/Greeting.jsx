import React from 'react'

const greet = "Hello Everyone!"
const date = new Date();
const Greeting = () => {
  return (
    <div>
        <h1>{greet}</h1>
        <p>{date.toString()}</p>
    </div>
  )
}

export default Greeting