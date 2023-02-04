const SIZE = 20;
const SPACE = 4;

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

  for (let i = 0; i < width; i += SIZE * SPACE) {
    for (let j = 0; j < height; j += SIZE * SPACE) {
      arrow(i, j);
    }
  }

  for (let i = 0; i < width; i += SIZE * SPACE) {
    for (let j = 0; j < height; j += SIZE * SPACE) {
      cell(i, j);
    }
  }
}

function cell(x, y) {
  push();
  translate(x, y);
  scale(random(0.5, 1.5));
  if (x === SIZE*SPACE*10 && y === SIZE*SPACE*6)
    fill(floor(random(6)) * 60, 100, 90);
  else
    fill(255);
  const DICE = floor(random(6)) + 1;
  if (DICE == 1) {
    circle(0, 0, SIZE);
  } else if (DICE == 2) {
    square(-SIZE / 2, -SIZE / 2, SIZE);
  } else if (DICE == 3) {
    circle(0, 0, SIZE);
    circle(0, 0, SIZE - 6);
  } else if (DICE == 4) {
    rotate(45);
    square(-SIZE / 2, -SIZE / 2, SIZE);
  } else if (DICE == 5) {
    triangle(0, -SIZE / 2, -SIZE / 2, SIZE / 2, SIZE / 2, SIZE / 2);
  } else if (DICE == 6) {
  }
  pop();
}

function arrow(x, y) {
  push();
  translate(x, y);

  if (random(1) > 0.5) {
    drawingContext.setLineDash([2, 4]);
  } else {
    drawingContext.setLineDash([]);
  }

  const DICE = floor(random(6)) + 1;
  if (DICE <= 3) {
    line(0, 0, SIZE * 2 * SPACE, 0); // to the right
    // triangle()
  } else if (DICE <= 6) {
    // to the left
    line(0, 0, 0, SIZE * 2 * SPACE);
  }else{
    console.log("problem, dice is " + DICE);

  }
  pop();
}
