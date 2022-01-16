
/**
 * Genuary day #2
 * Dithering
 * ---
 * Simple implementation of a dithering algorithm
 * Pixels darkness are reported to the next line
 * Threshold and hue changing according to mouse position
 */

PImage img;
int threshold = 127;
color light = color(100,250,255);
color dark = color(50,100,150);

void setup() {
  size(852, 568);
  img = loadImage("kitten.png");
  imageMode(CENTER);
  noStroke();
}

void draw(){
  threshold = int(map(mouseY, 0, img.height, 200, 500));
  int[][] ditheredImage = computeDithering(getImgMatrix(img));
  colorMode(HSB);
  for (int i = 0; i < ditheredImage.length ; i+=1) {
    for (int j = 0 ; j < ditheredImage[0].length ; j+=1) {
      color c = color(ditheredImage[i][j]);
      float hue = 0;//map(mouseX, 0, img.width, 0, 255);
      fill(ditheredImage[i][j]
      rect(i, j, 1, 1);
   }
  }
}

int[][] getImgMatrix(PImage img) {
    int[][] imgMatrix = new int[img.width][img.height];
    for (int i = 0 ; i < img.width-1 ; i++)
        for (int j = 0 ; j < img.height-1 ; j++)
            imgMatrix[i][j] = int(brightness(img.get(i,j)));
    return imgMatrix;
}

int[][] computeDithering(int[][] imageMatrix) {
    int rows = imageMatrix.length;
    int cols = imageMatrix[0].length;
    int[][] dithered = new int[rows][cols];

    for (int i = 0; i < rows; i++) {
        int diff = 0;
        for (int j = 0; j < cols; j++) {
            dithered[i][j] = imageMatrix[i][j] + diff < threshold
              ? dark
              : light;
            diff += imageMatrix[i][j] / 2;

            try { // diffuse the error to 5 columns and 3 rows
              for (int ii=0;ii<4;ii++)
                for (int jj=-5;jj<5;jj++)
                  imageMatrix[ii][jj] += diff * 1/(ii+jj);
            } catch (Exception e) {/* cell doesnt exist, ignore */}
            if (diff>255) diff=0;
        }
    }

    return dithered;
}
