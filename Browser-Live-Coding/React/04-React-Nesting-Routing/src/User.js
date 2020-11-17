import React from 'react'

export default function User(props) {
    console.log(props)
    let user = props.data.find(user=>user.name===props.match.params.name)

   /*  let user= props.data.filter(user=>user.name===props.match.params.name) */

   const gotoHome=()=>{
       props.oldprops.history.push("/")
   }

    return (
        <div>
            <h1>User Component</h1>
           <h1>{user.name}</h1>
            <h1>{user.email}</h1>
            <h1>{user.phone}</h1> 

            <button onClick={gotoHome}>Go back</button>

        </div>
    )
}
