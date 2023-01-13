function setup() {
	createCanvas(windowWidth, windowHeight);
	background(0);
}

let rect_x = 10, rect_y = 10;

function draw() {
	fill(100+random(155), 59, 59);

	let rect_w = random(30, 80);
	if (frameCount % 3 == 0){
		fill('White'); //White short rectangle
		rect_w = 10;
	}

	rect(rect_x, rect_y, rect_w, 20);
	rect_x += rect_w + 10;
	if (rect_x > width){
		rect_x = 0;
		rect_y += 30;
	}
}