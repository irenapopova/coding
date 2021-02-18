import React, { useState, useContext } from "react";
import { MyContext } from "../App";


export default function Signup(props) {
  const { setIsLogin, setUserData, setToken } = useContext(MyContext)
  /*  const [firstName,setFirstName]=useState("")
    const [lastName,setLastName]=useState("")
    const [email,setEmail]=useState("")
    const [role,setRole]=useState("")
    const [password,setPassword]=useState("")
    const [city,setCity]=useState("")
    const [street,setStreet]=useState("") */
  const [user, setUser] = useState({
    firstName: "",
    lastName: "",
    email: "",
    password: "",
    role: "User",
    city: "",
    street: "",
  });

  const submitForm = (e) => {
    e.preventDefault();

    /* AJAX */
    fetch("http://localhost:4000/api/users", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(user),
    })
      .then((res) => {
        console.log(res.headers.get("x-auth"))
        let headertoken = res.headers.get("x-auth")
        setToken(headertoken)
        localStorage.setItem("token", headertoken)
        return res.json()
      })
      .then((response) => {
        if (response.success) {
          console.log(response.user)
          //storing user into context
          setUserData(response.user)
          setIsLogin(true)
          let obj = {
            islogin: true,
            user: response.user
          }

          localStorage.setItem("userdata", JSON.stringify(obj))

          props.history.push("/profile")
        } else {
          console.log(response)
        }
      }).catch(err => console.log(err))
    /*     const formData = new FormData(e.target)
    let user= {  address:{}  }
   for(let pair of formData){
      if(pair[0]==="city"|| pair[0]==="street"){
           user.address[pair[0]]=pair[1]
      }else{
          user[pair[0]]=pair[1]
      }
      
   } 
   console.log(user)
 */
  }; //ending submitform

  const grabValue = (e) => {
    setUser({ ...user, [e.target.name]: e.target.value });
  };

  return (
    <div>
      <h1>Signup</h1>
      <form onSubmit={submitForm}>
        <label>
          First Name :
          <input
            type="text"
            name="firstName"
            placeholder="First Name"
            onChange={grabValue}
          />
        </label>
        <br />

        <label>
          Last Name :
          <input
            type="text"
            name="lastName"
            required
            placeholder="Last Name"
            onChange={grabValue}
          />
        </label>
        <br />

        <label>
          Email :{" "}
          <input
            type="email"
            name="email"
            required
            placeholder="E-mail"
            onChange={grabValue}
          />
        </label>
        <br />

        <label>
          Password :
          <input
            type="password"
            name="password"
            required
            placeholder="Password"
            onChange={grabValue}
          />
        </label>
        <br />

        <label>
          Role :{" "}
          <select name="role" id="role" onChange={grabValue} required >
            <option value="User">User</option>
            <option value="Admin">Admin</option>

          </select>
        </label>
        <br />

        <label>
          Street :
          <input
            type="text"
            name="street"
            placeholder="Street"
            onChange={grabValue}
          />
        </label>
        <br />
        <label>
          City :
          <input
            type="text"
            name="city"
            placeholder="City"
            onChange={grabValue}
          />
        </label>
        <br />

        <input type="submit" value="SignUp" />
      </form>
    </div>
  );
}
