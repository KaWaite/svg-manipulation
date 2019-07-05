// Paper Script

// ---------- All Variables ---------- //

// ----- BuildZone ----- //
const buildZone = new Path.Rectangle({
  x: 500,
  y: 50,
  width: 200,
  height: 100,
  radius: 2,
  fillColor: "lightgrey",
  strokeColor: "red"
});

const circ = new Path.Circle({
  center: buildZone.bounds.center,
  radius: 5,
  fillColor: "green"
});

// ----- Draggable red Circle ----- //
const target = new Path.Circle({
  center: [800, 100],
  radius: 20,
  fillColor: "red"
});
let down = false;

// ----- Rotatable Square ----- //
var square1 = createSquare([200, 100]);

// ---------- Functions ---------- //
// Set Dimensions
Dimensions();
// Buildable?
target.onMouseDown = e => {
  down = true;
  Build(e);
};
target.onMouseDrag = e => {
  down = true;
  target.position += e.delta;
  Build(e);
};
target.onMouseUp = e => {
  down = false;
  Build(e);
};

// On the move stylings and position adjust
function Build(event) {
  if (buildZone.bounds.contains(target.bounds)) {
    // If within buildable params, green.
    buildZone.strokeColor = "green";
    target.fillColor = down ? "darkgreen" : "green";
  } else {
    // If not within buildable params, red.
    buildZone.strokeColor = "red";
    target.fillColor = down ? "darkred" : "red";
  }
  target.strokeColor = down ? "white" : null;
}

// Attempting functional rotation from example
square1.onMouseDrag = event => {
  let delta = event.point - square1.position;
  square1.rotation = delta.angle + 90;
};

function createSquare(position) {
  let square = new Path.Rectangle({
    point: [0, 0],
    size: [50, 50],
    strokeColor: "black",
    fillColor: [0.1, 0.7, 1],
    name: "rotatableSquare"
  });
  square.pivot = square.bounds.center;
  square.applyMatrix = false;
  square.position = position;

  return square;
}

// ---------Dimensions---------- //
function Dimensions() {
  const shapes = [square1, buildZone];
  for (let i = 0; i < shapes.length; i++) {
    var textX = new PointText({
      position: [
        shapes[i].bounds.topCenter.x,
        shapes[i].bounds.topCenter.y - 8
      ],
      content: shapes[i].bounds.x + "m",
      fillColor: "black",
      justification: "center",
      fontSize: 12
    });
    var textXY = new PointText({
      position: [
        shapes[i].bounds.leftCenter.x - 20,
        shapes[i].bounds.leftCenter.y
      ],
      content: shapes[i].bounds.y + "m",
      fillColor: "black",
      justification: "center",
      fontSize: 12
    });
  }
}

view.onResize = function(event) {
  console.log("resized");
};
