let insideDiameter = 1000;

function setup() {
  smooth();
  createCanvas(windowWidth, windowHeight);
  background(220);
  colorMode(HSB);

  for (let i = 0; i < 6; i++) hilmaCircle();
  insideDiameter = min(width, height);

  noFill();
  strokeWeight(insideDiameter);
  stroke(random(100, 200), 60, 40, 1);
  circle(width / 2, height / 2, insideDiameter*2);
}

function hilmaCircle() {
  X = floor(random(100, insideDiameter - 100));
  Y = floor(random(100, insideDiameter - 100));
  D = floor(random(insideDiameter / 10, insideDiameter / 2));
  HUE = floor(random(100, 200));
  BRIGHTNESS = floor(random(40,100));
  console.log(`drawing circle X:${X} Y:${Y} D:${D} HUE:${HUE}`);

  push();
  // calculate inside centered circle
  translate((abs(width-height))/2 + X, Y); //height*cos(random(-1,1)));
  rotate(random(-2 * PI, 2 * PI));

  // Main circle
  fill(HUE, 40, BRIGHTNESS, 1);
  noStroke();
  circle(0, 0, D);

  // Concentric circles
  noFill();
  strokeWeight(random(this.r / 100));
  stroke(random(1) > 0.5 ? 0 : 255, 0.7);
  const NB_CIRCLES = random(3, 10);
  const SHIFT_CIRCLE = random(-10, -1);
  for (let i = 1; i <= NB_CIRCLES; i++) {
    circle(0, D / 2 - map(i, SHIFT_CIRCLE, NB_CIRCLES, 1, D / 2), i * (D / NB_CIRCLES));
  }
  pop();
}
