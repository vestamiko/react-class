import React, { Component } from "react";

export default class VisualSquares extends Component {
  constructor(props) {
    super(props);
    this.state = {
      squares: [], // masyvas kvadratukams
    };
  }

  // random skaičius nuo 10 iki 20
  getRandomNumber = () => Math.floor(Math.random() * 11) + 10;

  // random spalva kvadratukui
  getRandomColor = () => {
    const letters = "0123456789ABCDEF";
    let color = "#";
    for (let i = 0; i < 6; i++) {
      color += letters[Math.floor(Math.random() * 16)];
    }
    return color;
  };

  // pridėti naują kvadratuką
  addSquare = () => {
    const newSquare = {
      id: this.state.squares.length,
      color: this.getRandomColor(),
      number: this.getRandomNumber(),
    };
    this.setState((prevState) => ({
      squares: [...prevState.squares, newSquare],
    }));
  };

  render() {
    return (
      <div
        style={{
          marginTop: "20px",
          padding: "10px",
          border: "1px solid #aaa",
          borderRadius: "8px",
        }}
      >
        <button onClick={this.addSquare}>Pridėti kvadratuką</button>

        {/* Vizualus masyvo turinys virš kvadratukų */}
        <div style={{ marginTop: "10px", fontFamily: "monospace" }}>
          <strong>Masyvo turinys:</strong>
          <pre>{JSON.stringify(this.state.squares, null, 2)}</pre>
        </div>

        {/* Kvadratukai */}
        <div
          style={{
            display: "flex",
            flexWrap: "wrap",
            gap: "10px",
            marginTop: "10px",
          }}
        >
          {this.state.squares.map((sq) => (
            <div
              key={sq.id}
              style={{
                width: "50px",
                height: "50px",
                backgroundColor: sq.color,
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
                fontSize: "20px",
                fontWeight: "bold",
                color: "white",
                borderRadius: "4px",
              }}
            >
              {sq.number}
            </div>
          ))}
        </div>
      </div>
    );
  }
}
