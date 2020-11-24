import React, { Component } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import Wrapper from "./components/Wrapper";

export default class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      data: [],
      searchValue: "chicken",
    };
    console.log("constructor");
  }

  static getDerivedStateFromProps() {
    //react will execute this code just before the render
    console.log("getDerivedStateFromProps");
    return null;
  }

  getData = () => {
    fetch(
      `https://api.edamam.com/search?q=${this.state.searchValue}&app_id=${process.env.REACT_APP_ID}&app_key=${process.env.REACT_APP_KEY}`
    )
      .then((res) => res.json())
      .then((result) => {
        console.log(result);
        this.setState({ data: result.hits });
      });
  }
  componentDidMount() {
    //this code will execute only once
    console.log("ComponentDidMount");
    this.getData()
  }
  searchData = (e) => {
    e.preventDefault();
    this.getData()
  };

  shouldComponentUpdate(nextprops, nextstate) {
    console.log("shouldcomponentupdate")
    return true
  }
  render() {
    console.log(this.state.data, "....render Method")
    return (
      <div className="container">
        <div className="container bg-dark text-white">
          <h1>Recipe APP</h1>
          <form className="text-right" onSubmit={this.searchData}>
            <label>
              Search Recipe:{" "}
              <input
                type="text"
                onChange={(e) => this.setState({ searchValue: e.target.value })}
              />
            </label>
            <input type="submit" value="search" />
          </form>
        </div>

        <Wrapper data={this.state.data} />
      </div>
    );
  }
}
