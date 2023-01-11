let drippingPoints = [];
const ptsNb = 200;

function setup() {
    ellipseMode(CENTER);
    colorMode(HSB);
    createCanvas(windowWidth, windowHeight);
    for (let i = 0; i < height; i++) {
        stroke(map(i, 0, height, 0, 255), 255, 255);
        line(0, i, width, i);
    }
    for (let i = 0; i < ptsNb; i++) {
        drippingPoints.push(new DrippingPoint());
    }
    noStroke();
}
function draw() {
    for (let i = 0; i < ptsNb; i++) {
        drippingPoints[i].drift();
        drippingPoints[i].display();
    }
}
function mousePressed() { setup(); }

class DrippingPoint {
    constructor() {
        this.x = random(width)
        this.y = random(height)
        this.size = random(1, 30)
        this.shift = random(.1, 2);
        this.hue = map(this.y, 0, height, 0, 255);
    }

    drift() {
        this.y += this.shift;
        this.x += random(-1, 1);
    }

    display() {
        fill(this.hue, 255, 255, 10);
        ellipse(
            (this.x + width) % width,
            (this.y + height) % height,
            this.size,
            this.size
        );
    }
}