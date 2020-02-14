import React, { Component } from "react";
import Product from "../products/Product";

export default class Dashboard extends Component {
  render() {
    return (
      <div className="dashboard">
        <h3> Product Dashboard.js </h3>
        {this.props.inventoryList.map(element => {
          return <Product product={element} key={element.id} />;
        })}
      </div>
    );
  }
}
