let R, r, rr, currentPoint; // point positions
let hue;
let center = 300;

function setup() {
    createCanvas(windowWidth, windowHeight);

    background(255);
    colorMode(HSB);
    R = int(random(50, 400));
    r = int(random(50, 400));
    rr = int(random(10, 200));
    hue = 0;
    i = 0;
    strokeWeight(1);

    initPoint = [
        center + (R - r) * cos(i) + rr * cos(i * (1 - r / R)),
        center + (R - r) * sin(i) - rr * sin(i * (1 - r / R))
    ];
    currentPoint = initPoint;
    nextPoint = null;

    while (initPoint !== nextPoint && i < 500 * PI) {
        i += PI / 20;
        nextPoint = [
            center + (R - r) * cos(i) + rr * cos(i * (1 - r / R)),
            center + (R - r) * sin(i) - rr * sin(i * (1 - r / R))
        ];
        stroke(hue, 255, 80);
        hue += 0.1;
        if (hue >= 360) hue = 0;
        line(currentPoint[0], currentPoint[1], nextPoint[0], nextPoint[1]);
        currentPoint = nextPoint;
    }
}

function mouseClicked() {
    setup();
}
