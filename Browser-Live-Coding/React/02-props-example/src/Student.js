import React from 'react'

export default function Student(props) {
    console.log(props)
    return (
        <div>
            <h1>{props.msj} , {props.name}</h1>
        </div>
    )
}



