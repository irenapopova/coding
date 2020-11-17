import React from "react"


 class Student extends React.Component{

    render(){
        console.log(this.props)
        return(
        <p>{this.props.msj} , {this.props.name}</p>
        )
    }

} 



/* function Student(props){
    return(
        <h1>{props.msj} , {props.name}</h1>
    )
} */

export default Student;