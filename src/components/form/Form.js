import React, { Component } from "react";
import axios from "axios";
import "./form.css";

export default class Form extends Component {
  constructor(props) {
    super(props);

    this.state = {
      name: "",
      price: 0,
      img: ""
    };

    this.handleAdd = this.handleAdd.bind(this);
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
      price: 0,
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
      //ternery for edit toggle, if edit false display current, fi true repalce with current [] create save in app.js to sent the axios req
      <div className="form-container">
        {/* Add a Product */}
        <div className="img-prev">Img Preview</div>
        <div className="form-inputs">
          <input
            value={this.state.name}
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
            value={this.state.img}
            placeholder="Image URL"
            onChange={event => this.handleImage(event.target.value)}
          ></input>
        </div>
        <div className="button-div">
          <button onClick={() => this.handleCancel()}>Cancel</button>
          <button onClick={() => this.handleAdd()}>Add to Inventory</button>
        </div>
      </div>
    );
  }
}
