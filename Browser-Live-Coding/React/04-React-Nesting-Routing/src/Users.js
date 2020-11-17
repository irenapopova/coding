import React, { Component } from "react";
import {Link, Route, BrowserRouter} from "react-router-dom"
import User from "./User"

export default class Users extends Component {
  state = {
    users: [],
  };

  /*  async => await */
  /*    fetchUsers=async()=>{
           let response = await fetch("https://jsonplaceholder.typicode.com/users") 
           let convertData = await response.json()
           let response1= await fetch(convertData.url)
           let convertData1= await response1.json()
           let response2= await fetch(convertData1.url)
           let convertedFinal= await response2.json()

    }  */

  componentDidMount() {

    fetch("https://jsonplaceholder.typicode.com/users")
      .then((res) => res.json())
      .then((result) => {
          this.setState({users:result})
      });
  }


  render() {
    return (
    <div>
        <BrowserRouter> 
        <ul>
        {this.state.users.map(user=>{
            return <li key={user.id}><Link  to={`/users/${user.name}`}> {user.name}</Link> </li>
          /*   return <li key={user.id}><Link  to={{pathname:`/users/${user.name}`, userData:user}}> {user.name}</Link> </li> */
        })}
        </ul>

        <Route path="/users/:name" render={(props)=><User oldprops={this.props} {...props} data={this.state.users}/>}/>


        </BrowserRouter>
    </div>);
  }
}
