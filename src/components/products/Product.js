import React, { Component } from "react";
import "./product.css";

export default class Product extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    return (
      <div className="product">
        {/* <div className="prod"> */}
        <div className="prod-img">{this.props.product.img}</div>
        <div className="prod-text">
          <div className="prod-name">{this.props.product.name}</div>
          <div className="prod-price">{this.props.product.price}</div>
          {/* </div> */}
          <div className="prod-buttons">
            <button
              onClick={() => {
                this.props.handleDelete(this.props.product.id);
              }}
            >
              Delete
            </button>
            <button
              onClick={() => {
                this.props.editProducts(this.props.product.id);
              }}
            >
              Edit
            </button>
          </div>
        </div>
      </div>
    );
  }
}
