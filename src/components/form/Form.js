import React, { Component } from "react";

export default class Form extends Component {
  constructor() {
    super();

    this.state = {
      productName: "",
      price: "",
      imageUrl: ""
    };
  }

  handleName(value) {
    this.setState({
      productName: value
    });
  }

  handlePrice(value) {
    this.setState({
      price: value
    });
  }

  handleImage(value) {
    this.setState({
      imageUrl: value
    });
  }

  handleCancel = event => {
    this.setState({
      productName: "",
      price: "",
      imageUrl: ""
    });
  };

  render() {
    // console.log(this.state);
    return (
      <div className="form-container">
        Add a Product
        <input
          value={this.state.productName}
          placeholder="Product Name"
          onChange={event => this.handleName(event.target.value)}
        ></input>
        <input
          type="number"
          value={this.state.price}
          placeholder="Price"
          onChange={event => this.handlePrice(event.target.value)}
        ></input>
        <input
          value={this.state.imageUrl}
          placeholder="Image URL"
          onChange={event => this.handleImage(event.target.value)}
        ></input>
        <button onClick={this.handleCancel}>Cancel</button>
        <button>Add to Inventory</button>
      </div>
    );
  }
}
