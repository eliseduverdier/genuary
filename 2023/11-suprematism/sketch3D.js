/**
 * Genuary [ Day 11 ]
 * Suprematism
 */

const colors = ["#100d08", "#fff3c9", "#efb000", "#b13c1e"];
const objectsCount = 20;
let MAX_ROTATION = 0;
let DIMENSIONS = [];

function setup() {
  angleMode(DEGREES);
  createCanvas(windowWidth, windowHeight, WEBGL);
  smooth();
  noStroke();


  MAX_ROTATION = random(180);
  for (let i = 0; i < objectsCount; i++) {
    DIMENSIONS.push({
      width: random(20, 100),
      height: random(80, 400),
      depth: random(10, 60),
      color: colors[int(random(colors.length))],
      rotation: random(1) > 0.5 ? int(-MAX_ROTATION, MAX_ROTATION) : int(90 - MAX_ROTATION, 90 + MAX_ROTATION),
      position: {
        x: random(windowWidth / 3),
        y: random(windowHeight / 3),
        z: random(windowHeight / 3),
      },
      scale: random(0.5, 2),
    });
  }
}

function draw() {
  blendMode(MULTIPLY);

  background("#fff3c9");
ambientLight(150);
// ambientMaterial(color('#eeeeee77'));
  directionalLight(color("#fff3c9"), 1, 1, -1);
//   directionalLight(color("#efb000"), 1, -1, 1);

  rotateX(map(mouseX, 0, 600, -180, 180));
  rotateY(map(mouseY, 0, 600, -190, 180));

  for (let i = 0; i < objectsCount; i++)
    drawSquare(MAX_ROTATION, DIMENSIONS[i]);
}

function drawSquare(MAX_ROTATION, dimensions) {
    let c = color(dimensions.color);
    c.setAlpha(100);
  fill(c);
  noStroke();

  push();
  rotate(dimensions.rotation);
  translate(dimensions.position.x, dimensions.position.y, dimensions.position.z);
  scale(dimensions.scale);
  box(dimensions.width, dimensions.height, dimensions.depth);
  pop();
}

function mouseClicked() {
  setup();
}
