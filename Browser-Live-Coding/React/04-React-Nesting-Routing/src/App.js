import React from "react";
import "./app.css";
import Home from "./Home";
import About from "./About";
import Contact from "./Contact";
import { BrowserRouter, Link, Route, Switch } from "react-router-dom";
import Users from "./Users";
import User from "./User";

function App() {

  const data = ["abc"]
  return (
    <BrowserRouter>
      <div className="App">
        <ul>
          <li>
            {/* just to change url and stop page refresh */}
            <Link to="/">HOME</Link>
          </li>
          <li>
            <Link to="/about">ABOUT</Link>
          </li>
          <li>
            <Link to="/contact">CONTACT</Link>
          </li>
          <li>
            <Link to="/users">USERS</Link>
          </li>
        </ul>

        {/*  route will read url (path) and decide which component should be rendered on the screen */}
        <Switch>
          {/* //if you want to pass custom props through Route */}
        {/*   <Route exact path="/"><Home data= {data}/> </Route> */}
          {/* //if you want to pass custom and default props  */}
          <Route exact path="/" render={(props)=><Home {...props} name={data}  /> } />
          
          <Route path="/about" component={About}/> {/* //will receive only custom props */}
          
          <Route path="/contact" component={Contact} /> {/* //will receive props only from browserRouter */}
      
          <Route exact path="/users" component={Users}/>

          
          


      </Switch>
      </div>
    </BrowserRouter>
  );
}

export default App;
