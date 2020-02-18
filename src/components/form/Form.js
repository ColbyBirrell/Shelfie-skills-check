import React, { Component } from "react";
import axios from "axios";
import "./form.css";

export default class Form extends Component {
  constructor(props) {
    super(props);

    this.state = {
      name: "",
      price: 0,
      img: "",
      editing: false
    };

    this.handleAdd = this.handleAdd.bind(this);
  }

  componentDidUpdate(prevProps) {
    console.log(this.props);

    console.log(prevProps);
    if (prevProps !== this.props) {
      if (this.props.editId !== 0) {
        this.setState({
          name: this.props.currentProd.name,
          price: this.props.currentProd.price,
          img: this.props.currentProd.img,
          editing: true
        });
      }
    }
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
      img: "",
      editing: false
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

  saveChange = () => {
    const { editing, name, price, img } = this.state;
    this.props.handleSaveChange(this.props.editId, name, price, img);
    this.setState({
      editing: false
    });
  };

  render() {
    console.log(this.state);
    console.log(this.props);
    const { editing, name, price, img } = this.state;

    // console.log(this.state);
    return (
      <div className="form-container">
        {/* Add a Product */}
        <div
          className="img-prev"
          style={{
            backgroundImage: `url('${this.state.img}')`,
            backgroundSize: "cover"
          }}
        ></div>
        <div className="form-inputs">
          {editing ? <div>hello!</div> : <div>Goodbye!</div>}
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
          {!editing ? (
            <button onClick={() => this.handleAdd()}>Add to Inventory</button>
          ) : (
            <button onClick={() => this.saveChange()}>Save Change</button>
          )}
        </div>
      </div>
    );
  }
}
