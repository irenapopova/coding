import React from "react";

export default class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      userName: "",
    };
    this.text = "";
  }
  login = () => {
    this.setState({ userName: "Ali" });
  };
  componentWillUnmount() {
    return (
      <React.Fragment>
        <i class="fa fa-spinner fa-pulse fa-3x fa-fw"></i>
        <span class="sr-only">Loading...</span>
      </React.Fragment>
    );
  }
  componentDidMount() {
    setTimeout(() => {
      this.setState({ userName: "Nancy" });
    }, 1000);
  }
  componentDidUpdate() {
    this.text = "I run after the update has been rendered in the Dom";
  }
  shouldComponentUpdate() {
    return true;
  }
  render() {
    return (
      <React.Fragment>
        <h1>Hey {this.state.userName}, I am React</h1>
        <h4>{this.text}</h4>
        <button onClick={this.login}> Login</button>
      </React.Fragment>
    );
  }
}
