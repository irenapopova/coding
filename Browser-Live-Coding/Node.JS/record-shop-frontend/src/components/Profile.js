import React, { useContext } from "react";
import { MyContext } from "../App";
import { Redirect } from "react-router-dom";


export default function Profile() {

  const { userData } = useContext(MyContext);
  return (
    <div>
      {userData ? (
        <div>
          <h1>Welcome! , {userData.lastName}</h1>
          <p>Email: {userData.email}</p>
        </div>
      ) : (
          <Redirect to="/login" />
        )}
    </div>
  );
}