const SIZE = 400;
const SPACE = 40;
let PLAY = true;

function setup() {
  createCanvas(windowWidth, windowHeight);
  colorMode(HSB);
  smooth();
  noFill();
  stroke(0);
  strokeWeight(1);
}
function draw() {
  background(255);
  stroke(0);
  for (let i = 0; i < width; i += SPACE) {
    for (let j = 0; j < height; j += SPACE) {
      drawHexagon(i, j, SIZE);
    }
  }
  stroke(0, 100, 100);
  drawHexagon(400, 400, SIZE);
}

function drawHexagon(x, y, radius) {
  push();
  translate(x, y);
  rotate(frameCount / 200);
  hexagon(0, 0, radius);
  pop();
}

function hexagon(x, y, radius) {
  polygon(x, y, radius, 6);
}

function polygon(x, y, radius, npoints) {
  let angle = TWO_PI / npoints;
  beginShape();
  for (let a = 0; a < TWO_PI; a += angle) {
    let sx = x + cos(a) * radius;
    let sy = y + sin(a) * radius;
    vertex(sx, sy);
  }
  endShape(CLOSE);
}

function mouseClicked() {
  PLAY = !PLAY;
  if (PLAY) {
    noLoop();
  } else {
    loop();
  }
}
