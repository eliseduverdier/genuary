/**
 * By tom.smith (https://editor.p5js.org/tom.smith/sketches/)
 */
let circles = [];
let done;

function setup() {
  createCanvas(windowWidth, windowHeight);
  smooth();
  colorMode(HSB);
  noStroke();
  background(255);

  const N = 150;

  // put bounding circles
  borders = -20;
  diam = 10;
  circles.push(new HilmaCircle(-borders, -borders, diam));
  circles.push(new HilmaCircle(width + borders, height + borders, diam));
  circles.push(new HilmaCircle(width + borders, -borders, diam));
  circles.push(new HilmaCircle(-borders, height + borders, diam));

  for (let i = 0; i < N; i++) {
    circles.push(new HilmaCircle());
  }

  circles.forEach((circle) => circle.draw());
}

function distBetweenCircles(circle1, circle2) {
  return dist(circle1.x, circle1.y, circle2.x, circle2.y) - 0.5 * (circle1.r + circle2.r);
}

class HilmaCircle {
  constructor(x_, y_, r_) {
    let minDist;
    if (x_ === undefined) {
      do {
        done = true;
        this.x = random(width);
        this.y = random(height);
        this.r = random(min(width, height));
        this.hue = random(100, 200);

        minDist = width;
        for (let i = 0; i < circles.length; i++) {
          let dOther = distBetweenCircles(this, circles[i]);
          if (dOther < 0) done = false;
          else {
            if (dOther < minDist) minDist = dOther;
          }
        }
      } while (!done);
      this.r += (minDist || 1) * 2;
    } else {
      this.x = x_;
      this.y = y_;
      this.r = r_;
    }

    this.draw = function () {
      push();

      translate(this.x, this.y);
      rotate(random(-2 * PI, 2 * PI));

      // Main circle
      fill(this.hue, 60, 70, 1);
      noStroke();
      circle(0, 0, this.r);

      // Concentric circles
      noFill();
      strokeWeight(random(this.r / 100));
      stroke(random(1) > 0.5 ? 0 : 255, .7);
      const NB_CIRCLES = random(3, 10);
      const SHIFT_CIRCLE = random(-10, -1);
      for (let i = 1; i < NB_CIRCLES; i++) {
        circle(0, this.r / 2 - map(i, SHIFT_CIRCLE, NB_CIRCLES, 1, this.r / 2), i * (this.r / NB_CIRCLES));
      }

      pop();
    };
  }
}
