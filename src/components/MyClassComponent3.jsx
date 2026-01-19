import React, { Component } from "react";

export default class MyClassComponent3 extends Component {
  constructor() {
    super();
    this.simpleFunction = this.simpleFunction.bind(this);
    this.state = { name: "Jane" };
  }

  simpleFunction() {
    console.log(this);
    this.setState = ({ color: "yellow" });
  }

  arrowFunction = (event) => {
    console.log(this);
    console.log(event);
    this.setState = { name: "Thomas" };
  };

  render() {
    return (
      <div>
        <p style={{ backgroundColor: this.state.color }}> {this.state.name} </p>
        <button onClick={this.simpleFunction}> Simple func</button>
        <button onClick={() => this.simpleFunction()}> Simple func-2</button>
        <button onClick={this.arrowFunction}> Arrow func</button>
      </div>
    );
  }
}
