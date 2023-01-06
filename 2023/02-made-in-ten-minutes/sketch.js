/**
 * Genuary [ Day 02 ]
 *  Made in 10 minutes
 */
let cx, cy;
let secondsRadius;
let minutesRadius;
let hoursRadius;
let clockDiameter;

function setup() {
  background(255);
  createCanvas(400, 400);
  stroke(255);
  smooth();
  frameRate(2);

  let radius = width / 2;
  secondsRadius = radius * 0.71;
  minutesRadius = radius * 0.6;
  hoursRadius = radius * 0.5;
  clockDiameter = radius * 1.7;

  cx = width / 2;
  cy = height / 2;

  textAlign(CENTER);

  textFont("Inconsolata");
}

function draw() {
  let s = map(second(), 0, 60, 0, TWO_PI) - HALF_PI;
  let m = map(minute() + norm(second(), 0, 60), 0, 60, 0, TWO_PI) - HALF_PI;
  let h = map(hour() + norm(minute(), 0, 60), 0, 24, 0, TWO_PI * 2) - HALF_PI;

  stroke(0);
  // seconds
  strokeWeight(1);
  line(cx, cy, cx + cos(s) * secondsRadius, cy + sin(s) * secondsRadius);
  // minutes
  strokeWeight(2);
  line(cx, cy, cx + cos(m) * minutesRadius, cy + sin(m) * minutesRadius);
  stroke(0);
  stroke(0);
  // hour
  strokeWeight(4);
  line(cx, cy, cx + cos(h) * hoursRadius, cy + sin(h) * hoursRadius);

  strokeWeight(0);
  textSize(32);
  text(hour() + ":" + (minute() < 10 ? "0" : "") + minute() + ":" + (second() < 10 ? "0" + second() : second()), 200, 50);

  background(255, 2);
}
