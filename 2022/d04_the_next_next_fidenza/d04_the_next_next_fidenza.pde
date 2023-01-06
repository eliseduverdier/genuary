/**
 * Day 4
 * The next next fidenza
 */
ArrayList<Vector> vectors;
PVector v1, v2;

void setup() {
  size(400, 400);
  noLoop();
}

void draw() {
  for (int i = 0; i < 400; i+=20) {
    for (int j = 0; j < 400; j+=20) {
      v1 = new PVector(i, j);
      v2 =  PVector.random2D();
      
      circle(i,j, 5);
      
      line(v1.x, v1.y, abs(v2.x)*400, abs(v2.y)*400);
    }
  }
}


class Vector {
  PVector x; // start
  PVector y; // end
  
  void grow()
  {
    
  } 
  void move()
  {
    
  }
}
