// Paper Script

// ---------- All Variables ---------- //

const shapes = [];

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
shapes.push(buildZone);

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
shapes.push(square1);

// ---------- Functions ---------- //
// Set Dimensions

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
    fillColor: "green"
  });
  let textX = new PointText({
    position: [square.bounds.topCenter.x, square.bounds.topCenter.y - 8],
    content: square.bounds.width + "m",
    fillColor: "black",
    justification: "center",
    fontSize: 12
  });
  let textY = new PointText({
    position: [square.bounds.leftCenter.x - 20, square.bounds.leftCenter.y],
    content: square.bounds.height + "m",
    fillColor: "black",
    justification: "center",
    fontSize: 12
  });
  let group = new Group(square, textX, textY);
  group.pivot = square.bounds.center;
  group.applyMatrix = false;
  group.position = position;

  return group;
}

view.onResize = function(event) {
  console.log("resized");
};
