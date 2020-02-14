import React, { Component } from "react";
import "./App.css";
import Dashboard from "./components/dashboard/Dashboard";
import Form from "./components/form/Form";
import Header from "./components/header/Header";

class App extends Component {
  constructor() {
    super();
    this.state = {};
  }

  render() {
    return (
      <div className="App">
        <Header />
        <Form />
        <Dashboard />
      </div>
    );
  }
}

export default App;
