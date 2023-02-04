let characters = [];
const SIZE = 10;
const SPACE = 10;
let imageNb = 0;
function setup() {
  createCanvas(windowWidth, windowHeight);
  background(255);
  strokeWeight(2);
  colorMode(HSB);
  //curveTightness(-2);
  for (let i = 50; i < width - 50; i += SIZE * SPACE) {
    for (let j = 50; j < height - 50; j += SIZE * SPACE) {
      characters.push(new Character(i, j));
    }
  }
  frameRate(10);
}

function draw() {
  characters.forEach((c) => {
    if (c.step < c.steps) {
      c.draw();
    }
  });

//   if (imageNb < 12) {
//     //save("aesemic" + (imageNb < 10 ? "0" + imageNb : imageNb) + ".png");
//     imageNb += 1;
//   } else {
//     noLoop();
//   }
}

class Character {
  constructor(startX, startY) {
    this.X = startX;
    this.Y = startY;
    this.steps = int(random(4, 30));
    this.step = 0;
    this.hue = random(360);
  }

  draw() {
    let newX = this.X + (random(1) >= 0.5 ? -1 : 1) * SIZE;
    let newY = this.Y + (random(1) > 0.5 ? -1 : 1) * SIZE;
        stroke(this.hue, 100, 80);

    line(this.X, this.Y, newX, newY);

    // next point
    this.X = newX;
    this.Y = newY;
    this.step += 1;
  }
}

function mouseClicked() {
  noLoop();
}
