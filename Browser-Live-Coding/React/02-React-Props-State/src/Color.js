import React from "react"


function Color(props){
    console.log(props)
    return(
        <div style={ { backgroundColor:props.color,height:"100px" } } >
         { props.color } 
        </div>
    )
}

export default Color;