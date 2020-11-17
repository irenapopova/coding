import React, { Component } from "react";
import Profile from "./Profile";

export default class App extends Component {
  state = {
    username: "",
    password: "",
    loginState:false,
    errorMessage:""
  };

  submitForm = (e) => {
    e.preventDefault();
    //data in your data
    let user = {
      username: "abc",
      password: "12345",
    };

    if (
      user.username === this.state.username &&
      user.password === this.state.password
    ) {
      this.setState({
        loginState:true
      })
      console.log("you successfully logged in");
    } else {

      this.setState({
        errorMessage:"please try again ,username or password is incorrect"
      })


   /*    setTimeout(()=>{
        this.setState({
          errorMessage:""
        })
      }, 2000) */
     
      console.log("please try again ,username or password is incorrect");
    }
  };

  render() {
    return (
      <div>
        {   this.state.loginState?  <Profile username={this.state.username}/> : <> <form onSubmit={this.submitForm}>
          <label>
            UserName:
            <input
              type="text"
              name="username"
              onChange={(e) => this.setState({ username: e.target.value })}

              onFocus={()=>this.setState({errorMessage:""})}
            />
          </label>
          <br />
          <label>
            Password:
            <input
              type="password"
              name="password"
              onChange={(e) => this.setState({ password: e.target.value })}
              onFocus={()=>this.setState({errorMessage:""})}
            />
          </label>
          <br />
          <input type="submit" value="login" />
    </form> <h3>{this.state.errorMessage}</h3> </>  }
       

       
      </div>
    );
  }
}
