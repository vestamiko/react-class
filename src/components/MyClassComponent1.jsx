import React, { Component } from "react";
import MyClassComponent2 from "./myClassComponent2/MyClassComponent2";

export default class MyClassComponent1 extends Component {
  constructor(props) {
    super(props);
    this.state = {
      firstname: props.fname || "Dear",
      lastname: props.lname || "Guest",
    };
  }

  render() {
    return (
      <div
        style={{
          border: "1px solid black",
          borderRadius: "10px",
          padding: "10px",
          margin: "10px",
        }}
      >
        {console.log("props:", this.props, "state", this.state)}

        {this.props.fname ? (
          <p style={{ color: this.props.fname ? "green" : "red" }}>
            Hello, my name is {this.props.fname} {this.props.lname}
          </p>
        ) : null}
        <MyClassComponent2 hobbiesList={this.props.hobbiesList} />
      </div>
    );
  }
}

// import React, { Component } from "react";
// import MyClassComponent2 from "./myClassComponent2/MyClassComponent2";

// export default class MyClassComponent1 extends Component {
//   constructor(props) {
//     super(props);
//     this.state = {
//       firstname: props.fname || "Dear",
//       lastname: props.lname || "Guest",
//     };
//   }

//   render() {
//     return (
//       <div
//         style={{
//           border: "1px solid black",
//           borderRadius: "10px",
//           padding: "10px",
//           margin: "10px",
//         }}
//       >
//         {console.log("props:", this.props, "state", this.state)}

//         {this.props.fname ? (
//           <p style={{ color: this.props.fname ? "green" : "red" }}>
//             Hello, my name is {this.props.fname} {this.props.lname}
//           </p>
//         ) : null}
//         <MyClassComponent2 hobbiesList={this.props.hobbiesList} />
//       </div>
//     );
//   }
// }
