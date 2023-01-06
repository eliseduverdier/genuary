let R, r, rr, currentPoint; // point positions
let hue, centerW, centerH;
let toTheLeft = false;

function setup() {
  centerW = windowWidth/2;
  centerH = windowHeight/2;
  createCanvas(windowWidth, windowHeight);
  background(0);
  colorMode(HSB);
  hue = 0;
  i = 0;
  frameRate(60);
  R = int(random(50, 200));
  R1 = int(random(50, 200));
  strokeWeight(3);
}

function draw() {
  circle(R);
  //circle(R1);
}

function circle(R) {
  console.log('drawing circle of R',R);
  if ( sin(i) < 0.001 && 0.999 < cos(i) ) {
    toTheLeft = !toTheLeft;
    if (toTheLeft) {
      centerW = windowWidth/2 - R;
    } else {
      centerW = windowWidth/2 + R;
    }
  }

  initPoint = [
    centerW + R * (toTheLeft ?cos(i) : -cos(i)),
    centerH + R * (toTheLeft ?sin(i) : -sin(i))
  ];
  currentPoint = initPoint;
  nextPoint = null;

  i = toTheLeft ? i+PI / 40 : i-PI/40;
  nextPoint = [
    centerW + R * (toTheLeft ? cos(i) : -cos(i)),
    centerH + R * (toTheLeft ? sin(i) : -sin(i))
  ];
  stroke(hue, 255, 80);
  hue += 3;
  if (hue >= 360) {
    hue = 0;
  }
  line(currentPoint[0], currentPoint[1], nextPoint[0], nextPoint[1]);
  currentPoint = nextPoint;
  background(0, 0, 0, 0.05);
}

function mouseClicked() {
  setup();
}
