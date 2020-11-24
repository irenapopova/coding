import React from "react";
import { Text, Hello } from "./Text";
const userLogin = true;
const names = ["Ali", "Hadi", "Nancy", "Zain"];
const App = () => {
  const NamesList = names.map((name, i) => <li key={i}>{name}</li>);
  return (
    <React.Fragment>
      <h1>Hi, I am react</h1>
      <Text name={userLogin ? "Hadi" : "IKD"} age="30" />

      <ul>{NamesList}</ul>
      {
        //  <Text name={names} age="22" />
        /*  <h1>{userLogin ? "Hi Hadi" : "Login Pls"} </h1>
        more comments
        many lines
        */
      }
    </React.Fragment>
  );
};

export default App;
