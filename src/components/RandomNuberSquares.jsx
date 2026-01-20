import React, { Component } from "react";

export default class RandomNumberSquares extends Component {
  constructor(props) {
    super(props);
    this.state = {
      squares: [], // masyvas kvadratukams
    };
  }

  // Generuoja atsitiktinį skaičių nuo 10 iki 20
  getRandomNumber = () => {
    return Math.floor(Math.random() * 11) + 10; // 10..20
  };

  // Generuoja atsitiktinę spalvą kvadratukui
  getRandomColor = () => {
    const letters = "0123456789ABCDEF";
    let color = "#";
    for (let i = 0; i < 6; i++) {
      color += letters[Math.floor(Math.random() * 16)];
    }
    return color;
  };

  // Pridėti naują kvadratuką į masyvą
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
      <div style={{ marginTop: "20px" }}>
        <button onClick={this.addSquare}>
          Pridėti kvadratuką su skaičiumi
        </button>

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
