
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
  threshold = int(map(mouseY, 0, img.height, 0, 500));
  int[][] ditheredImage = computeBasicDithering(getImgMatrix(img));
  colorMode(HSB);
  for (int i = 0; i < ditheredImage.length ; i+=1) {
    for (int j = 0 ; j < ditheredImage[0].length ; j+=1) {
      color c = color(ditheredImage[i][j]);
      float hue = map(mouseX, 0, img.width, 0, 255);
      fill(
        brightness(c) < threshold ? hue : (hue+50)%255, saturation(c), brightness(c)
      );
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

int[][] computeBasicDithering(int[][] imageMatrix) {
    int rows = imageMatrix.length;
    int cols = imageMatrix[0].length;
    int[][] dithered = new int[rows][cols];

    for (int i = 1; i < rows-1; i++) {
        int diff = 0;
        for (int j = 0; j < cols-1; j++) {
            dithered[i][j] = imageMatrix[i][j] + /*nextLineDiff[i-1] +*/ diff < threshold
              ? dark
              : light;
            diff += imageMatrix[i][j] / 2;
            
            try{
            imageMatrix[i+1][j  ] += diff * 7/32;
            imageMatrix[i+2][j  ] += diff * 5/32;

            imageMatrix[i-1][j+1] += diff * 5/32;
            imageMatrix[i  ][j+1] += diff * 5/32;
            imageMatrix[i+1][j+1] += diff * 3/32;
            imageMatrix[i+2][j+1] += diff * 1/32;
            
            imageMatrix[i-1][j+2] += diff * 5/32;
            imageMatrix[i  ][j+2] += diff * 3/32;
            imageMatrix[i+1][j+2] += diff * 2/32;
            imageMatrix[i+2][j+2] += diff * 1/32;
            } catch (Exception e) {/* cell doesnt exist, ignore */}
            if (diff>255) diff=0;
        }
    }

    return dithered;
}
int[][] computeDithering(int[][] pix) {
    int rows = pix.length;
    int cols = pix[0].length;
    int[][] dithered = new int[rows][cols];

    int oldPixel, newPixel, quantError;
    
    for (int x = 1; x < rows-1; x++) {
        for (int y = 0; y < cols-1; y++) {
            oldPixel = pix[x][y];
            newPixel = oldPixel < threshold ? dark : light;
            dithered[x][y] = newPixel;
            // diffuse error
            quantError = oldPixel - newPixel;
            pix[x+1][y  ] += quantError * 7/32;
            pix[x-1][y+1] += quantError * 3/32;
            pix[x  ][y+1] += quantError * 5/32;
            pix[x+1][y+1] += quantError * 1/32;
        }
    }

    return dithered;
}
/**
 * https://en.wikipedia.org/wiki/Floyd%E2%80%93Steinberg_dithering
   for each y from top to bottom do
    for each x from left to right do
        oldpixel := pixels[x][y]
        newpixel := find_closest_palette_color(oldpixel)
        pixels[x][y] := newpixel
        quant_error := oldpixel - newpixel
        pixels[x + 1][y    ] := pixels[x + 1][y    ] + quant_error × 7/32
        pixels[x - 1][y + 1] := pixels[x - 1][y + 1] + quant_error × 3/32
        pixels[x    ][y + 1] := pixels[x    ][y + 1] + quant_error × 5/32
        pixels[x + 1][y + 1] := pixels[x + 1][y + 1] + quant_error × 1/32

 */
