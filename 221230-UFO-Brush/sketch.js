function setup() {
	createCanvas(windowWidth, windowHeight);
	background("#FFD1A3");
}

function draw() {
	background(255, 209, 163, 5); 
	
	stroke(109, 72, 53)
	strokeWeight(5); 
	
	if (mouseIsPressed) {
		fill(50);
		ellipse(mouseX, mouseY, 90, 50);
		fill(0);
		ellipse(mouseX, mouseY, 170, 10);
	} 
	else {
		fill(mouseX, mouseY, frameCount); 
		circle(mouseX, mouseY, 70);
		ellipse(mouseX, mouseY, 150, 20);
	}
}