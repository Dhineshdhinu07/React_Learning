import React from 'react'

const Person = (props) => {
  return (
    <div>
        <h2>{props.name}</h2>
        <p>Age: {props.age}</p>
    </div>
  )
}

export default Person