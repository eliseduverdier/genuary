/**
 * Genuary day #2
 * Dithering
 * ---
 * Simple implementation of a dithering algorithm
 * Pixels darkness are reported to the next line
 * Threshold and hue changing according to mouse position
 */
let threshold = 127;
let img;

function setup() {
    img = loadImage("kitten.png");
    createCanvas(852, 568);
    imageMode(CENTER);
    strokeWeight(0);
    colorMode(HSB);

    let threshold = 127;
    let ditheredImage = computeDithering(getImgMatrix(img));
    for (let i = 0; i < ditheredImage.length; i += 1) {
        for (let j = 0; j < ditheredImage[0].length; j += 1) {
            let c = color(ditheredImage[i][j]);
            let hue = map(mouseX, 0, img.width, 0, 255);
            fill(
                brightness(c) < threshold ? hue : (hue + 50) % 255,
                saturation(c),
                brightness(c)
            );
            rect(i, j, 1, 1);
        }
    }
}

function getImgMatrix(img) {
    let imgMatrix = new Array(img.width - 1);
    for (let i = 0; i < imgMatrix.length; i++) {
        imgMatrix[i] = new Array(img.height - 1);
    }

    for (let i = 0; i < imgMatrix.length; i++) {
        for (let j = 0; j < imgMatrix[0].length; j++) {
            imgMatrix[i][j] = int(brightness(img.get(i, j)));
        }
    }

    return imgMatrix;
}

function computeDithering(imageMatrix) {
    let dithered = new Array(img.width - 1);
    for (let i = 0; i < dithered.length; i++) {
        dithered[i] = new Array(img.height - 1);
    }
    for (let i = 1; i < imageMatrix.length - 1; i++) {
        let diff = 0;
        for (let j = 0; j < imageMatrix[0].length - 1; j++) {
            dithered[i][j] = imageMatrix[i][j] + diff < threshold
                ? 0
                : 255;
            diff += imageMatrix[i][j] / 2;
            try {
                imageMatrix[i + 1][j] += diff * 5 / 32;
                imageMatrix[i + 2][j] += diff * 3 / 32;

                imageMatrix[i - 1][j + 1] += diff * 7 / 32;
                imageMatrix[i][j + 1] += diff * 5 / 32;
                imageMatrix[i + 1][j + 1] += diff * 3 / 32;
                imageMatrix[i + 2][j + 1] += diff * 1 / 32;

                imageMatrix[i - 1][j + 2] += diff * 5 / 32;
                imageMatrix[i][j + 2] += diff * 3 / 32;
                imageMatrix[i + 1][j + 2] += diff * 1 / 32;
                imageMatrix[i + 2][j + 2] += diff * 1 / 32;
            } catch {/* cell doesnt exist, ignore */ }
            if (diff > 255) diff = 0;
        }
    }

    return dithered;
}
