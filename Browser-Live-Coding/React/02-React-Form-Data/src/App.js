import React, { Component } from "react";

export default class App extends Component {
  state={
    username:"",
    password:"",
    email:""
  }

  getUserName=(e)=>{
    this.setState({
      username: e.target.value
    })
  }

  getPassword=(e)=>{
      this.setState({
        password:e.target.value
      })
  }
  getEmail=(e)=>{
    this.setState({
      email:e.target.value
    })
  }


  universalMethod=(e)=>{
   console.dir(e.target.name)
   this.setState({
     [e.target.name]: e.target.value
   })
    
  }


  submitForm=(e)=>{
  
    //stop default behavior of the form
    e.preventDefault()
    console.log(e.target)
   /*  let form = new FormData(e.target)

    console.log(form.get("username"))
    console.log(form.get("email"))
    console.log(form.get("password")) */

    console.log(e.target.elements["username"].value)
    console.log(e.target.elements["email"].value)
    console.log(e.target.elements["password"].value)

   /*  fetch("http://localhost:3001/postdata", {
      method:"POST",
      body:JSON.stringify({email:this.state.email , password:this.state.password , username:this.state.username })
    }).then(res=>res.json()).then(result=>{
      if(result.sucess){
        console.log("user login successfully ")
      }else{
        console.log("username or password is wrong")
      }
    }) */
   
    /* 
    //you have to use onchange event if you are following this method
    console.log(this.state.username)
    console.log(this.state.password)
    console.log(this.state.email) */

  }


  render() {
    return (
      <div>
        <h1>Form Data</h1>
        <form onSubmit={this.submitForm}>
          <label>
            UserName: <input type="text" name="username" /* onChange={this.getUserName} */ /* onChange={(e)=>this.setState({username:e.target.value })} */ /* onChange={this.universalMethod} *//>
          </label>
          <br />
          <label>
            Email: <input type="email" name="email" /* onChange={this.getUserName} */ /* onChange={(e)=>this.setState({email:e.target.value })} */ /* onChange={this.universalMethod} *//>
          </label>
          <br />
          <label>
            Password: <input type="password" name="password" /* onChange={this.getEmail} */ /* onChange={(e)=>this.setState({password:e.target.value})} */ /* onChange={this.universalMethod} */ />
          </label>
          <br />
          <input type="submit" value="login"  />
         {/*  <button type="submit">submit</button> */}
        </form>
      </div>
    );
  }
}
