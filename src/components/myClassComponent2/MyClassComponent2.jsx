import React, { Component } from "react";
import "./style.css";

export default class MyClassComponent2 extends Component {
  constructor(props) {
    super(props);
    this.state = {
      hobbies: props.hobbiesList,
    };
  }

  render() {
    return (
      <div className="card">

        <p>my hobbies are:</p>
        <ul>
          {this.state.hobbies.map((el, i) => (
            <li key={i}>{el}</li>
          ))}
        </ul>
      </div>
    );
  }
}
