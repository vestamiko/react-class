import React, { Component } from "react";
import "./style.css";

export default class MyClassComponent2 extends Component {
  constructor(props) {
    super(props);

    this.state = {
      hobbies: props.hobbiesList || [],
    };
  }

  addHobby = () => {
    this.setState((prevState) => ({
      hobbies: [...prevState.hobbies, "naujas hobis"],
    }));
  };

  render() {
    const size =
      typeof this.props.size === "number"
        ? `${this.props.size}px`
        : this.props.size || "16px";

    return (
      <div className="card" style={{ height: size, width: size }}>
        <button onClick={this.addHobby}>Add Hobby</button>

        <p style={{ color: this.props.myColor || "black", fontSize: size }}>
          my hobbies are:
        </p>

        <ul>
          {this.state.hobbies.map((el, i) => (
            <li key={`${el}-${i}`} style={{ margin: size }}>
              {el}
            </li>
          ))}
        </ul>
      </div>
    );
  }
}

// import React, { Component } from "react";
// import "./style.css";

// export default class MyClassComponent2 extends Component {
//   constructor(props) {
//     super(props);
//     this.state = {
//       hobbies: props.hobbiesList || [],
//     };
//   }

//   addHobby = () => {
//     this.setState((prevState) => ({
//       hobbies: [...prevState.hobbies, "naujas hobis"],
//     }));
//   };

//   render() {
//     return (
//       <div
//         className="card"
//         style={{ height: this.props.size, width: this.props.size }}
//       >
//         <button onClick={this.addHobby}>Add Hobby</button>
//         <p style={{ color: this.props.myColor, fontSize: this.props.size }}>
//           my hobbies are:
//         </p>
//         <ul>
//           {this.state.hobbies.map((el, i) => (
//             <li key={i} style={{ margin: this.props.size }}>
//               {el}
//             </li>
//           ))}
//         </ul>
//       </div>
//     );
//   }
// }
