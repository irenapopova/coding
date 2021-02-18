
import React, { createContext, useState, useEffect } from "react";
import { Route, Link, Switch, withRouter } from "react-router-dom";
import Home from "./components/Home";
import Signup from "./components/Signup";
import Login from "./components/Login";
import Profile from "./components/Profile";
import NotFound from "./components/NotFound";
import Records from "./components/Records";

export const MyContext = createContext(null);

function App(props) {
  const [isLogin, setIsLogin] = useState(false);
  const [userData, setUserData] = useState(null);
  const [token, setToken] = useState(null);
  const [records, setRecords] = useState([]);

  //onload we are reading,what data we have in localStorage
  useEffect(() => {
    const localData = JSON.parse(localStorage.getItem("userdata")); //null or userdata
    if (localData) {
      console.log(localData);
      setUserData(localData.user);
      setIsLogin(localData.islogin);
      setToken(localStorage.getItem("token"));
      console.log(props);
      props.history.push("/profile");
    }
  }, []);

  const logout = () => {
    let decision = window.confirm("do you really want to logout");
    if (decision) {
      localStorage.clear();
      /*   localStorage.removeItem("userdata")
       localStorage.removeItem("token") */
      setIsLogin(false);
      props.history.push("/login");
    }
  };


  
export default withRouter(App);
