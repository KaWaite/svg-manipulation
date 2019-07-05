import React, { Component } from "react";
import "paper";

// Functions would go HERE

class Boundary extends Component {
  render() {
    return (
      <React.Fragment>
        <h3>Paper.js</h3>
        <canvas
          id="myCanvas"
          resize="true"
          style={{
            width: "90vw",
            height: "400px",
            backgroundColor: "#dee0d9",
            margin: "20px auto",
            border: "1px black solid"
          }}
        >
          Your browser does not support the HTML5 canvas tag.
        </canvas>
      </React.Fragment>
    );
  }
}

export default Boundary;
