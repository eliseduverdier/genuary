/**
 * Genuary 2022
 * day #3 - SPACE
 *
 * Star-like points are situated in the canvas, making space around the mouse
 */
int radius = 400;
int w, h;

int frame=1;
String frameStr;

int circleSize = 3;
int gridSize = 20;

float x, y;
float easing = 0.1;

void setup() {
  w = 600;
  h = 600;
  size(600, 600);
  noStroke();
  //  colorMode(HSB, 255);
}

void draw() {
  background(0, 10, 10);
  noStroke();
  //fill(255);
  float dx = mouseX - x;
  x += dx * easing;

  float dy = mouseY - y;
  y += dy * easing;

  for (int i = 0; i < w; i += gridSize) {
    for (int j = 0; j < h; j += gridSize) {
      float distance = dist(x, y, i, j);
      float distanceX = x<i ? distance : -distance;
      float distanceY = y<j ? distance : -distance;

      fill(0, mapColor(i), mapColor(j));
      circle(i + (1/distanceX)*radius, j + (1/distanceY)*radius, circleSize);
    }
  }
  frameStr = nf(frame, 3);
  save("frames/"+frameStr+".png");
  frame += 1;
  ;
}

float mapColor(float point) {
  return map(point, 0, w, 0, 255);
}
