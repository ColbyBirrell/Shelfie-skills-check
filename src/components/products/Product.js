import React, { Component } from "react";

export default class Product extends Component {
  render() {
    return (
      <div className="product">
        {this.props.product.img}
        {this.props.product.name}
        {this.props.product.price}
      </div>
    );
  }
}
