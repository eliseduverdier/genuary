/**
 * Game of life
 */
int w, h;
int size;
int[][] game;
int[][] nextGen;
int density = 60;

void setup() {
  w = 300;
  h = 300;
  size = 3;
  size(900, 900);
  //frameRate(5);
  noStroke();
  game = new int[h][w];
  nextGen = new int[h][w];
  for (int i=0; i < h; i++) {
    for (int j=0; j<w; j++) {
      game[i][j] = random(100) < density ? 0 : 1;
    }
  }
  background(237, 222, 180);
}

void draw() {
  fill(237, 222, 180, 10);
  rect(0,0,w*size,h*size);

  for (int i=0; i < h; i++) {
    for (int j=0; j < w; j++) {
      // draw
      if (game[i][j] == 1) {
        fill(97, 27, 2);
        rect(i * size, j * size, size, size);
      }
      // compute next gen
      if (game[i][j] == 1 && (neighbours(game, i, j) == 2 || neighbours(game, i, j) == 3))
        nextGen[i][j] = 1;
      else if (game[i][j] == 0 && neighbours(game, i, j) == 3)
        nextGen[i][j] = 1;
      else
        nextGen[i][j] = 0;
    }
  }
  game = copy(nextGen);
}

int neighbours(int[][]game, int x, int y) {
  int count = 0;
  for (int i = -1; i <= 1; i++)
    for (int j = -1; j <= 1; j++)
      if (!(i==0 && j==0)) {
        count += game[(x+i+w) % w][(y+j+h) % h];
      }
  return count;
}

int[][] copy(int[][] o) {
  int[][] c = new int [o.length][o[0].length];
  for (int i=0; i < o.length; i++) {
    for (int j=0; j < o[0].length; j++) {
      c[i][j] = o[i][j];
    }
  }
  return c;
}


void keyPressed() {
  if (key=='r' || key == 'R') {
    setup();
  }
}
