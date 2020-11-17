import React from 'react'

export default function Card(props) {
    return (
        <div style={ { height:"250px", width:"200px", boxShadow:"2px 2px 5px gray", margin:"20px" } } >
            <h3>{props.author}</h3>
            <img src={props.url} alt="pic" width="200" height="200"/>
        </div>
    )
}
