function setup() {
	createCanvas(windowWidth, windowHeight);
	background(0);
}

function draw() {
	background(0);

    let w;
    for (let i = 0; i < 100; i++){
        noFill();
        strokeWeight(5);
        stroke(map(i, 0, 100, 50, 255), 0, map(i, 0, 100, 255, 0));
        w = 2000 - i * 25 - i * map(mouseX, 0, width, 0, 50);
        ellipse(width/2, height/2, w);
    }
}