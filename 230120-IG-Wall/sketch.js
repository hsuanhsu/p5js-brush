function setup() {
	createCanvas(windowWidth, windowHeight);
	background(0);
    noStroke();
    for (let x = 0; x < width; x += 55){
        for(let y = 0; y < innerHeight; y += 55){
            strokeWeight(5);
            stroke(random(200, 255), random(255), random(255));
            noFill();
            rect(x, y, 40, 40, 10);

            strokeWeight(5);
            stroke(random(200, 255), random(255), random(255));
            noFill();
            circle(x+20, y+20, 15);

            noStroke();
            fill(random(200, 255), random(255), random(255));
            circle(x+31, y+9, 7);
        }
    }
}

function draw() {
	
}