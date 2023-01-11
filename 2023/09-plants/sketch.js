/**
 * Genuary [ Day 09 ]
 * Plants
 */
  const MAX_ROTATION = 20; // in degrees

function setup() {
  colorMode(HSB);
  //   blendMode(MULTIPLY);
  angleMode(DEGREES);
  createCanvas(windowWidth, windowHeight);
  background(50, 57, 93); //color(random(50, 110), random(150, 1250), random(50, 255)));
  smooth();

  for (let i = 0; i < 10000; i++) drawLeave();
    for (let i = 0; i < 60; i++) drawTree();
    for (let i = 0; i < 5000; i++) drawLeave();
}

function drawLeave() {
  const WIDTH = 20;
  const HEIGHT = 50;
  const WIDTH_VARIATION = WIDTH * random(0.3, 0.7);
  const TOP = HEIGHT * random(1.05, 1.3);
//   const c = color(80, 60, 200);
  const c = color(random(30,80), random(100, 120), random(150, 200));
  fill(c);
  stroke(hue(c), saturation(c), brightness(c) - 20);
  strokeWeight(2);

  push();
  translate(int(random(0, windowWidth)), int(random(0, windowHeight)));
  rotate(int(random(-MAX_ROTATION, MAX_ROTATION)));
  scale(random(0.7, 1.2));

  // leave
  beginShape();
  curveVertex(0, 0);
  curveVertex(0, 0);
  curveVertex(-WIDTH_VARIATION, HEIGHT/1.6);
  curveVertex(-5, HEIGHT);
  curveVertex(0, HEIGHT * random(1.05, 1.3));
  curveVertex(5, HEIGHT);
  curveVertex(WIDTH_VARIATION, HEIGHT/1.6);
  curveVertex(0, 0);
  curveVertex(0, 0);
  endShape();

  // middle stroke
  beginShape();
  noFill();
  curveVertex(0, 0);
  curveVertex(0, 0);
  curveVertex(WIDTH * random(-0.15, 0.15), TOP / 2);
  curveVertex(0, TOP + 10);
  curveVertex(0, TOP + 10);
  endShape();

  pop();
}

function drawTree() {
  const WIDTH = 50;
  const HEIGHT = 100 * random(1, 2);
  const WIDTH_VARIATION = WIDTH * random(-0.3, 1.7);
  const TOP = HEIGHT * random(1.05, 1.3);
  const SIZE_OF_TREE = random(15, 45);
  const WAY = Math.random() < 0.5 ? -1 : 1;

  strokeWeight(2);
  stroke(50, 90, 90);
  fill(30, 15, 200);

  push();
  translate(int(random(0, windowWidth)), windowHeight);
  //   rotate(int(random(360)));
  //   scale(random(0.5, 1.5));

  beginShape();
  curveVertex(0, 0);
  curveVertex(0, 0);

  curveVertex(WAY * -WIDTH, -HEIGHT * 2);
  curveVertex(WAY * WIDTH, -HEIGHT * 4);

  curveVertex(0, -HEIGHT * 5);
  curveVertex(0, -HEIGHT * 5);

  curveVertex(WAY * (SIZE_OF_TREE / 2 + WIDTH), -HEIGHT * 4);
  curveVertex(WAY * (SIZE_OF_TREE / 2 + -WIDTH), -HEIGHT * 2);

  curveVertex(WAY * SIZE_OF_TREE, 0);
  curveVertex(WAY * SIZE_OF_TREE, 0);

  endShape();

  pop();
}


function mouseClicked() {
  setup();
}
