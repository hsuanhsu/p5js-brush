function setup() {
	createCanvas(windowWidth, windowHeight);
	background(100); //0:balck
}

let x = 50, y = 50;
let vx = 3, vy = 3;
p = 0.9

let txt = "Hello";

function draw() {
	//background(100);
	ellipse(x, y, 50);
	x = x + vx;
	y = y + vy;
	vy += 0.2;
	if (y > height){
		vy = -vy * p; //ball bounce
		y = height; //Avoid p is too small to cause the ball stick at the bottom.
	}

	text(txt, x+100, y);
	txt = txt + ".";
}