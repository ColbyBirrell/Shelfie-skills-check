import React, { Component } from "react";

export default class Product extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    return (
      <div className="product">
        <div className="prod-words">
          {this.props.product.img}
          {this.props.product.name}
          {this.props.product.price}
        </div>
        <div>
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
