/**
 * Genuary [ Day 07 ]
 * Sample a color palette from your favorite movie/album cover
 */

let myImage;
let colors = [],
  c;


function includesColor (colors, item) {
  if (item[0] < 10 && 4 + item[1] < 10 && 1 + item[2] < 10) return true; // ignore blacks
  if (item[0] > 240 && 4 + item[1] > 240 && 1 + item[2] > 240) return true; // ignore whites
  console.log(item[0] + "," + item[1] + "," + item[2]);
  for (const color in colors) {
    if (abs(color[0] * 4 + color[1] * 2 + color[2] - item[0] * 4 + item[1] * 2 + item[2]) < 10) {
      return true;
    }
  };
  return false;
};


function preload() {
  myImage = loadImage("the-man-from-earth.png");
}

function setup() {
  createCanvas(windowWidth, windowHeight);
  background(0);
  smooth();
  noStroke();
  const size = 6;
  const sizeSampled = 30;

  for (let i = 0; i < myImage.width; i += size) {
    for (let j = 0; j < myImage.height; j += size) {
      c = myImage.get(i, j);
      if (!includesColor(colors, c)) {
        colors.push(c);
      }
    }
  }

  colors.sort(function compareFn(a, b) {
    return (b[0] * 4 + b[1] * 2 + b[2]*1) - (a[0] * 4 + a[1] * 2 + a[2]*1);
  });
  i = sizeSampled;
  j = sizeSampled;
  colors.forEach((color) => {
    fill(color);
    rect(i, j, sizeSampled, sizeSampled);
    i += sizeSampled;
    if (i >= windowWidth - sizeSampled*2) {
      i = sizeSampled;
      j += sizeSampled;
    }
  });
}
