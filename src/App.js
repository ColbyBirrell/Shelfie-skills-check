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
      inventoryList: [
        // {
        //   id: 50,
        //   name: "Testprod",
        //   price: 27,
        //   img: "imgtesturl"
        // },
        // {
        //   id: 52,
        //   name: "2Testprod2",
        //   price: 42,
        //   img: "2imgtesturl2"
        // }
      ]
    };
  }

  componentDidMount() {
    axios.get(`/api/inventory`).then(res => {
      this.setState({
        inventoryList: res.data
      });
    });
  }

  render() {
    return (
      <div className="App">
        <Header />
        <Form />
        <Dashboard inventoryList={this.state.inventoryList} />
      </div>
    );
  }
}

export default App;
