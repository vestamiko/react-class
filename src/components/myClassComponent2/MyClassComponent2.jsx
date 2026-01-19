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
        style = {{ height: this.props.size, width: this.props.size }}
        <p style={{ color: this.props.myColor, fontSize: this.props.size }}>
          my hobbies are:
        </p>
        <ul>
          {this.state.hobbies.map((el, i) => (
            <li key={i} style={{ margin: this.props.size }}>
              {el}
            </li>
          ))}
        </ul>
      </div>
    );
  }
}
