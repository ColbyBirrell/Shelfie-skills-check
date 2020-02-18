import React, { Component } from "react";
import "./App.css";
import Dashboard from "./components/dashboard/Dashboard";
import Form from "./components/form/Form";
import Header from "./components/header/Header";
import axios from "axios";

class App extends Component {
  constructor() {
    super();
    this.state = {
      inventoryList: [],
      currentProd: {}, //pass to form
      editId: 0 //pass to form
    };
    this.getProducts = this.getProducts.bind(this);
  }
  componentDidMount() {
    this.getProducts();
  }

  getProducts() {
    axios.get(`/api/inventory`).then(res => {
      this.setState({
        inventoryList: res.data
      });
    });
  }

  editProducts = id => {
    console.log(id);
    this.state.inventoryList.forEach(element => {
      if (element.id === id) {
        // console.log(element);

        this.setState({
          editId: id,
          currentProd: element
        });
      }
    });
  };

  handleSaveChange = (id, name, price, img) => {
    axios.put(`/api/inventory/${id}`, { name, price, img }).then(res => {
      this.setState({
        inventoryList: res.data
      });
    });
  };

  render() {
    // console.log(this.state.currentProd);
    return (
      <div className="App">
        <Header />
        <div className="form-dash">
          <Form
            getProducts={this.getProducts}
            currentProd={this.state.currentProd}
            editId={this.state.editId}
            handleSaveChange={this.handleSaveChange}
          />
          <Dashboard
            inventoryList={this.state.inventoryList}
            getProducts={this.getProducts}
            editProducts={this.editProducts}
          />
        </div>
      </div>
    );
  }
}

export default App;
