/**
 * Genuary [ Day 11 ]
 * Suprematism
 */

const colors = [ "#100d08", "#fff3c9", "#efb000", "#b13c1e"];

function setup() {
    blendMode(LIGHTEST);
  angleMode(DEGREES);
  createCanvas(windowWidth, windowHeight);
  background("#fff3c9");
  smooth();
  noStroke();
  const MAX_ROTATION = random(180);


  drawBigCircle();
  for (let i = 0; i < 20; i++) drawSquare(MAX_ROTATION);
  for (let i = 0; i < 3; i++) drawArc();
}

function drawBigCircle() {
  const WIDTH = random(windowWidth / 2, windowWidth);

  fill(color(colors[int(random(colors.length))]));
  noStroke();

  circle(int(random(0, windowWidth)), int(random(0, windowHeight)), WIDTH);
}

function drawSquare(MAX_ROTATION) {
  const WIDTH = random(20, 100);
  const HEIGHT = random(80, 400);

  fill(color(colors[int(random(colors.length))]));
  noStroke();

  push();
  translate(int(random(0, windowWidth)), int(random(0, windowHeight)));
  rotate(random(1) > 0.5 ? int(-MAX_ROTATION, MAX_ROTATION) : int(90 - MAX_ROTATION, 90 + MAX_ROTATION));
  scale(random(3));
  rect(0, 0, WIDTH, HEIGHT);
  pop();
}

function drawArc() {
  const WIDTH = random(200,500);
  const MAX_ROTATION = random(180);

  stroke(color(colors[int(random(colors.length))]));
  strokeWeight(int(random(30, 40)));
  strokeCap(SQUARE);
  noFill();

  push();
  translate(int(random(0, windowWidth)), int(random(0, windowHeight)));
  rotate(int(random(-MAX_ROTATION, MAX_ROTATION)));
  scale(random(0.5, 1.2));
  arc(50, 55, WIDTH, WIDTH, 0, 90);
  pop();
}


function mouseClicked() {
  setup();
}
