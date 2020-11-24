import React, { Component } from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Data from "./data.json";
import Product from "./components/Product";
import ProductInfo from "./components/ProductInfo";
import About from "./components/About";
import Menu from "./components/Menu";
import Home from "./components/Home";
import Soon from "./components/Soon";

export default class App extends Component {
  render() {
    return (
      <Router>
        <Menu />
        <h1>online store</h1>
        <Switch>
          <Route path={process.env.PUBLIC_URL + "/"} exact component={Home} />
          <Route path="/about" exact component={About} />
          <Route
            path="/product"
            exact
            component={() => <Product data={Data} />}
          />
          <Route
            path="/product/:id"
            component={({ match }) => (
              <ProductInfo data={Data} id={match.params.id} />
            )}
          />

          <Route
            path={() => "/main" || "/admin" || "/any-other-word"}
            component={Soon}
          />
        </Switch>
      </Router>
    );
  }
}
//  <Route path={process.env.PUBLIC_URL + "/"} exact render={Home} />
// <Route path="/about" component={About}>
// <About name="Hadi" />
// </Route>
//<Route path="/*" component={Soon} />
//   <Route
// path={() => "/main" || "/admin" || "/any-other-word"}
// component={Soon}
// />
// <Route path="/product/:id" component={ProductInfo} />
