import React from 'react'

export default function Profile(props) {
    return (
        <div>
            <h1>Welcome to our home page</h1>
    <h1>hi, {props.username}</h1>
        </div>
    )
}

