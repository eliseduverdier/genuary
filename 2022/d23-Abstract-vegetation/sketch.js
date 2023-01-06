function setup() {
    createCanvas(windowWidth, windowHeight);
    background(255);
    fill(0, 100, 80);
    colorMode(HSB);
    stroke(0);
    const baseColor = random(30, 330);

    for (let i = 50; i < width; i += 100) {
        for (let j = 50; j < height; j += 100) {
            new Flower(
                i,                  // posX
                j,                  // posY
                random(40, 60),     // size
                int(random(4, 16)), // petals
                random(0, 0.5),       // curve
                random(0.1, 1),       // pointy
                random(baseColor - 30, baseColor + 30)     // hue
            ).draw();
        }
    }
}

class Flower {
    constructor(posX, posY, size, petals, curve, pointy, hue) {
        this.posX = posX;
        this.posY = posY;
        this.size = size;
        this.petals = petals;
        this.curve = curve;
        this.pointy = pointy;
        this.hue = hue;
    }

    draw() {
        this.drawStem();
        this.drawPetals();
        this.drawStigma();
    }

    drawPetals() {
        fill(this.hue, 100, 85, 0.7);
        stroke(0);
        blendMode(MULTIPLY);
        strokeWeight(0);
        let steps = TWO_PI / this.petals;
        for (let i = 0; i < TWO_PI; i += steps) {
            beginShape();
            curveVertex(this.posX, this.posY);
            curveVertex(this.posX, this.posY);
            curveVertex(
                this.posX + this.size / 1.5 * cos(i - this.pointy),
                this.posY + this.size / 1.5 * sin(i - this.pointy)
            );
            curveVertex(
                this.posX + this.size * cos(i),
                this.posY + this.size * sin(i)
            );
            curveVertex(
                this.posX + this.size / 1.5 * cos(i + this.pointy),
                this.posY + this.size / 1.5 * sin(i + this.pointy)
            );
            curveVertex(this.posX, this.posY);
            curveVertex(this.posX, this.posY);
            endShape(CLOSE);
        }
    }

    drawStigma() {
        fill(this.hue, 100, 85, 1);
        stroke(255);
        strokeWeight(1);
        blendMode(BLEND);
        circle(this.posX, this.posY, this.size / 3);
    }

    drawStem() {
        noFill();
        blendMode(BLEND);
        stroke(this.hue, 100, 85);
        strokeWeight(2);
        beginShape();
        curveVertex(this.posX, this.posY);
        curveVertex(this.posX, this.posY);
        curveVertex(this.posX + random(-5, 5), this.posY + this.size / 2); // middle
        curveVertex(this.posX, this.posY + this.size);
        curveVertex(this.posX, this.posY + this.size);
        endShape();
    }
}

function mousePressed() { setup(); }