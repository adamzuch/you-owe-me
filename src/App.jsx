import React, { Component } from "react";
import { hot } from "react-hot-loader";
import "./App.sass";
import grogu from "./grogu.jpeg";

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      counter: 0
    };
  }

  render() {
    return (
      <div className="App">
        <h1> Hello, World! </h1>
        <img src={grogu}></img>
        <div>{this.state.counter}</div>
        <button onClick={() => {this.setState({counter: this.state.counter + 1})}}>Click me</button>
      </div>
    );
  }
}

export default hot(module)(App);