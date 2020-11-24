import React, { Component, Fragment } from "react";

import ParentComponent from "./components/ParentComponent";

class App extends Component {
  render() {
    console.log("+".repeat(2));

    return (
      <Fragment>
        <h1>Redux Simple app</h1>
        <ParentComponent />
      </Fragment>
    );
  }
}

export default App;
