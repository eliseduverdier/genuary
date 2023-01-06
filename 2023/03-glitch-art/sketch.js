/**
 * Genuary [ Day 03 ]
 *  Glitch Art
 */
let pointsHistory = [];
let diff = 1;
function setup() {
  createCanvas(windowWidth, windowHeight);
  background(0);
  smooth();
  strokeWeight(3);
  noFill();
}

function draw() {
  pointsHistory.push({ x: mouseX, y: mouseY });

  if (pointsHistory.length > 3) {
    diff = (abs(pointsHistory[2].x - mouseX) + abs(pointsHistory[2].y - mouseY)) / 3;
    pointsHistory.shift();
  }
}

function mouseDragged() {
  console.log(pointsHistory[0].x + ":" + pointsHistory[0].y + " / " + pointsHistory[1].x + ":" + pointsHistory[1].y + " / " + mouseX + ":" + mouseY);
  strokeWeight(10/diff);

  stroke(255, 0, 0);
  drawCurve(pointsHistory, diff);
  stroke(0, 255, 255);
  drawCurve(pointsHistory, -diff);

  //line(pointsHistory[0].x - diff, pointsHistory[0].y - diff, pointsHistory[1].x - diff, pointsHistory[1].y - diff, pointsHistory[2].x - diff, pointsHistory[2].y - diff, mouseX - diff, mouseY - diff);
  // stroke(0, 255, 255);
  // line(pointsHistory[0] + diff, pointsHistory[1] + diff, mouseX + diff, mouseY + diff);
}

function drawCurve(points, diff) {
  beginShape();
  curveVertex(points[0].x + diff, points[0].y + diff);
  curveVertex(points[0].x + diff, points[0].y + diff);
  curveVertex(points[1].x + diff, points[1].y + diff);
  curveVertex(points[2].x + diff, points[2].y + diff);
  curveVertex(mouseX + diff, mouseY + diff);
  curveVertex(mouseX + diff, mouseY + diff);
  endShape();
}
