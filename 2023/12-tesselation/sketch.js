/**
 * Genuary [ Day 12 ]
 * Tesselation
 *  Convert to gif format then to looping gif
 *   for i in {01..51}; do convert "tesselation$i.png" "$i.gif"; done
 *   convert -resize 50% -delay 10 -loop 0 *.gif tesselation.gif
 */

let photoNb = 0;
let canvas;

function setup() {
  canvas = createCanvas(windowWidth,windowHeight);

  noFill();
  stroke(0);
//   fill(255, 0, 0);
//   blendMode(EXCLUSION);
//   frameRate(5);
}

function draw() {
//   if (photoNb > 100) noLoop();

  background(255);
  for (let i = -100; i < width + 100; i += 87) {
    let step = 1;
    for (let j = -100; j < height + 100; j += 75) {
      for (let h = 0; h < 6; h++) {
        hexagon((photoNb * 10) / (h * 4), step % 2 == 0 ? i : i + 44, j);
      }
      step += 1;
    }
  }
  photoNb += 1;

  //saveCanvas(canvas, "tesselation" + (photoNb < 10 ? "0" + photoNb : photoNb) + ".gif");
}

function hexagon(size, x, y) {
  let angle = TWO_PI / 6;
  beginShape();
  for (let a = 0; a < TWO_PI; a += angle) {
    let sx = x + sin(a) * size;
    let sy = y + cos(a) * size;
    vertex(sx, sy);
  }
  endShape(CLOSE);
}

function mouseClicked() {
  setup();
  photoNb = 0;
}
