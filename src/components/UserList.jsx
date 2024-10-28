import React from 'react'

const users = [
    {
        name: 'John',
        age: 30,
    },
    {
        name: 'Jane',
        age: 25,
    },
    {
        name: 'Bob',
        age: 40,
    },
]
const UserList = () => {
  return (
    <div>
        {users.map(({name, age}) => (
            <ul key={Math.random()}>
                <li>{name}</li>
                <li>{age}</li>
            </ul>
        ))}
    </div>
  )
}

export default UserList