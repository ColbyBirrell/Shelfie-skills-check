import React, { Component } from "react";
import axios from "axios";

export default class Form extends Component {
  constructor(props) {
    super(props);

    this.state = {
      name: "",
      price: "",
      img: ""
    };

    this.handleAdd = this.handleAdd.bind(this);
    // this.getProducts = this.props.getProducts.bind(this);
  }

  handleName(value) {
    this.setState({
      name: value
    });
  }

  handlePrice(value) {
    this.setState({
      price: value
    });
  }

  handleImage(value) {
    this.setState({
      img: value
    });
  }

  handleCancel = event => {
    this.setState({
      name: "",
      price: "",
      img: ""
    });
  };

  handleAdd() {
    // const { name, price, img } = this.state;
    axios
      .post(`/api/inventory`, { ...this.state })
      .then(res => {
        this.props.getProducts();
        this.handleCancel();
      })
      .catch(err => {
        console.log(err);
      });
  }

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
        <button onClick={this.handleAdd}>Add to Inventory</button>
      </div>
    );
  }
}
