import React from "react";

export default function Svg() {
  return (
    <React.Fragment>
      <svg width="35" height="35">
        <line
          x1="0"
          y1="0"
          x2="35"
          y2="35"
          stroke="rgb(255,0,0)"
          strokeWidth="2"
        />
        <circle
          cx="17.5"
          cy="17.5"
          r="12"
          stroke="red"
          strokeWidth="2"
          fill="white"
        />
        <circle
          cx="17.5"
          cy="17.5"
          r="9"
          stroke="red"
          strokeWidth="2"
          fill="white"
        />
        <circle
          cx="17.5"
          cy="17.5"
          r="6"
          stroke="red"
          strokeWidth="2"
          fill="white"
        />
      </svg>
    </React.Fragment>
  );
}
