function setup() {
	createCanvas(windowWidth, windowHeight);
	background(100);
	x = width / 2;
	y = height / 2;
	delta = 10;
}

let x, y, delta;

function draw() {
	delta = mouseX / 50;
	x += random(-delta, delta);
	y += random(-delta, delta);
	x = lerp(x, mouseX, 0.05); //x會慢慢往滑鼠位置(mouseX)逼近
	y = lerp(y, mouseY, 0.05);

	let colorR = map(x, 0, width-10, 0, 255, true); //map [0, width] to [0, 255]; true: 強制map到新的range; width-10: 減10是讓右邊可以到255
	print(colorR);
	fill(colorR, 0, 0);

	ellipse(x, y, 50, 50);
}