import React, { Component } from "react";

export default class SquareGenerator extends Component {
  constructor(props) {
    super(props);
    this.state = { squares: [] }; // masyvas kvadratukams
  }

  getRandomColor = () => {
    const letters = "0123456789ABCDEF";
    let color = "#";
    for (let i = 0; i < 6; i++) {
      color += letters[Math.floor(Math.random() * 16)];
    }
    return color;
  };


  addSquare = () => {
    const newSquare = {
      id: this.state.squares.length,
      color: this.getRandomColor(),
      symbol: "*", // simbolis, kuris bus kvadratuke
    };
    this.setState((prevState) => ({
      squares: [...prevState.squares, newSquare],
    }));
  };

  render() {
    return (
      <div style={{ marginTop: "20px" }}>
        <button onClick={this.addSquare}>Pridėti kvadratuką su simboliu</button>

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
                fontSize: "24px",
                fontWeight: "bold",
                color: "white", // simbolio spalva, kad matytųsi
                borderRadius: "4px",
              }}
            >
              {sq.symbol}
            </div>
          ))}
        </div>
      </div>
    );
  }
}
