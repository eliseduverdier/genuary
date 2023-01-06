/**
 * Genuary day #2
 * Dithering
 * ---
 * No dithering ut simple halftone
 */
PImage img;
int threshold = 127;
color light = color(100, 250, 255);
color dark = color(50, 100, 150);

void setup() {
  size(852, 568);
  img = loadImage("kitten.png");
  imageMode(CENTER);
  background(255);
  //noStroke();
  fill(0);

int lineLen = 10;
  threshold = int(map(mouseY, 0, img.height, 0, 500));
  for (int i = 0; i < img.width; i+=lineLen) {
    for (int j = i%2; j < img.height; j+=6) {
      strokeWeight(map(brightness(img.get(i,j)), 0, 255, 6, 0));
      
      line(i+  (i%2)*(lineLen/2), j , i+lineLen, j);
    }
  }
}

/*
  displayByColor("red", 1, 6);
  displayByColor("green", 2, 5);
  displayByColor("blue", 3, 4);
}

void displayByColor(String col, int shifting, int maxSize) {
  if (col == "red") fill(255, 0, 0);
  else if (col == "green") fill(0, 255, 0);
  else if (col == "blue") fill(0, 0, 255);
  float c = 255;
  for (int i = shifting; i < img.width; i+=6) {
    for (int j = shifting; j < img.height; j+=6) {
      if (col == "red") c = red(img.get(i, j));
      else if (col == "green") c = green(img.get(i, j));
      else if (col == "blue") c = blue(img.get(i, j));
      
      float size = map(c, 0, 255, maxSize, 0);
      circle(i-size/2, j-size/2, size);
    }
  }
}
*/
