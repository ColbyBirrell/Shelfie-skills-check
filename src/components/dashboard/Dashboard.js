import React, { Component } from "react";
import Product from "../products/Product";
import axios from "axios";
import "./dashboard.css";

export default class Dashboard extends Component {
  constructor(props) {
    super(props);

    this.handleDelete = this.handleDelete.bind(this);
  }

  handleDelete(id) {
    axios.delete(`/api/inventory/${id}`).then(res => {
      this.props.getProducts();
    });
  }

  render() {
    return (
      <div className="dashboard">
        {/* <h3> Product Dashboard </h3> */}
        {this.props.inventoryList.map(element => {
          return (
            <Product
              handleDelete={this.handleDelete}
              editProducts={this.props.editProducts}
              product={element}
              key={element.id}
            />
          );
        })}
      </div>
    );
  }
}
