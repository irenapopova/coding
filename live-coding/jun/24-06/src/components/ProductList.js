import React from "react";
import ProductItem from "./ProductItem";

export default class ProductList extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      cart: [],
      totalPrise: 0,
    };
  }
  addToCart = (item) => {
    // const arr = [...this.state.cart, item];
    this.setState({
      cart: [...this.state.cart, item],
    });
    console.log(this.state.cart);
  };

  render() {
    const items = this.props.data.map((item, i) => {
      return <ProductItem key={i} info={item} />;
    });

    return <ul>{items}</ul>;
  }
}
