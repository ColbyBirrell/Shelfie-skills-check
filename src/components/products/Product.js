import React, { Component } from "react";

export default class Product extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    return (
      <div className="product">
        <div className="prod">
          <div className="prod-img">{this.props.product.img}</div>
          <div className="prod-name">{this.props.product.name}</div>
          <div className="prod-price">{this.props.product.price}</div>
        </div>
        <div className="prod-buttons">
          <button
            onClick={() => {
              this.props.handleDelete(this.props.product.id);
            }}
          >
            Delete
          </button>
          <button>Edit</button>
        </div>
      </div>
    );
  }
}
