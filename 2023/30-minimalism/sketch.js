const SIZE = 20;
const SPACE = 10;
const STEPS=SIZE*SPACE;
const BORDER_RADIUS = 10;

let NODES = [];

function setup() {
  createCanvas(windowWidth, windowHeight);
  background(255);
  strokeWeight(1);
  colorMode(HSB);
  angleMode(DEGREES);
  smooth();
  noFill();
  stroke(0);
  strokeWeight(1);
  curveTightness(-1);

  for (let i = STEPS; i < width - STEPS; i += STEPS) {
    for (let j = STEPS; j < height - STEPS; j += STEPS) {
    //   NODES.push(new Node(i, j + (i % (SIZE * SPACE*2) === SIZE * SPACE ? STEPS / 2 : 0)));
      NODES.push(new Node(i, j));
    }
  }

//   NODES.forEach((node) => node.draw(NODES[floor(random(NODES.length))]));
  NODES.forEach((node, index) => node.draw(NODES[(index + int(random(5,10))) % NODES.length]));
}
class Node {
  constructor(x, y) {
    this.x = x;
    this.y = y;
    this.type = floor(random(6)) + 1;
  }
  draw = function (toNode) {
    push();
    translate(this.x, this.y);
    this.drawArrow(toNode);
    this.drawForm();
    pop();
  };
  drawForm = function () {
      drawingContext.setLineDash([]);
      strokeWeight(2)

    if (this.type == 1) {
      circle(0, 0, SIZE);
    } else if (this.type == 2) {
      square(-SIZE / 2, -SIZE / 2, SIZE);
    } else if (this.type == 3) {
      circle(0, 0, SIZE);
      circle(0, 0, SIZE - 10);
    } else if (this.type == 4) {
      push();rotate(45);pop()
      square(-SIZE / 2, -SIZE / 2, SIZE);
    } else if (this.type == 5) {
      triangle(0, -SIZE / 2, -SIZE / 2, SIZE / 2, SIZE / 2, SIZE / 2);
    } else if (this.type == 6) {
      push();rotate(90);pop()
      triangle(0, -SIZE / 2, -SIZE / 2, SIZE / 2, SIZE / 2, SIZE / 2);
    }
  };
  drawArrow = function (toNode) {
    console.log(`node (${this.x}, ${this.y}) -> (${toNode.x}, ${toNode.y})`);
    //if (random(1) > 0.5)  return;
    const mapToX = toNode.x - this.x;
    const mapToY = toNode.y - this.y;


    if (random(1) > 0.5) {
      drawingContext.setLineDash([2, 4]);
    } else {
      drawingContext.setLineDash([]);
    }
    beginShape();
    noFill();
    // stroke(random(360), 100,80)
    line(0, 0, mapToX, mapToY);
    /* curveVertex(0, 0);
    curveVertex(0, 0);
    // if (random(1) > 0.5) {
        curveVertex(0, mapToY/10);
        curveVertex(mapToX/10, mapToY);
    // }
    // else  {
    //     curveVertex(mapToX - BORDER_RADIUS, 0);
    //     curveVertex(mapToX, BORDER_RADIUS);
    // }
    curveVertex(mapToX, mapToY);
    curveVertex(mapToX, mapToY); */
    endShape();
  };
}
