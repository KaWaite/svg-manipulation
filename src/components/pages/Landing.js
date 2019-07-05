import React, { Component } from "react";

import {
  View,
  Layer,
  Group,
  Path,
  Circle,
  Ellipse,
  Rectangle,
  PointText,
  Tool
} from "react-paper-bindings";

class Landing extends Component {
  render() {
    const ReactLogo = ({ rotation, x, y }) => {
      return (
        <Group name={"reactLogo"} rotation={rotation}>
          <Ellipse
            center={[x, y]}
            size={[70, 25]}
            strokeWidth={2.5}
            strokeColor={"#61DAFB"}
          />
          <Ellipse
            center={[x, y]}
            rotation={120}
            size={[70, 25]}
            strokeWidth={2.5}
            strokeColor={"#61DAFB"}
          />
          <Ellipse
            center={[x, y]}
            rotation={240}
            size={[70, 25]}
            strokeWidth={2.5}
            strokeColor={"#61DAFB"}
          />
          <Circle center={[x, y]} fillColor={"#61DAFB"} radius={7} />
        </Group>
      );
    };
    const Paper = ({ width, height }) => {
      return (
        <View width={width} height={height}>
          <Layer>
            <PointText
              content={"Paper.js"}
              fillColor={"black"}
              fontFamily={"Courier New"}
              fontSize={30}
              fontWeight={"bold"}
              justification={"center"}
              point={[width / 2 + 40, height / 2 + 10]}
            />
            <ReactLogo x={width / 2 - 100} y={height / 2} />
          </Layer>
          <Layer>
            <Circle center={[50, 200]} fillColor={"red"} radius={12} />
          </Layer>
        </View>
      );
    };
    return (
      <>
        <h1>Landing</h1>
        <Paper width={500} height={500} />
      </>
    );
  }
}

export default Landing;
