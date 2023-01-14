function setup() {
	createCanvas(windowWidth, windowHeight);
	background(100);
}

let angle1 = 0;
let angle2 = 0;

function draw() {
	background(0);

	//angle changes with mouseX
	angle1 = map(mouseX, 0, width, 0, PI*2, true); //map mouseX from [0, width] to [0, PI*2]; true: 強制map到新的range
	fill('pink');
	arc(width/2, height/2, 200, 200, 0, angle1, PIE); //acr(x, y, w, h, start, stop, mode)

	//angle automatically changes
	angle2 += 0.01;
	fill('purple');
	arc(width/3, height/2, 200, 200, 0, angle2, PIE); //acr(x, y, w, h, start, stop, mode)

	//clock
	let s = second();
	let m = minute();
	let h = hour();
	let angleS = map(s, 0, 60, 0, PI*2);
	let angleM = map(m, 0, 60, 0, PI*2);
	let angleH = map(h, 0, 60, 0, PI*2);
	fill('red');
	arc(width/3*2, height/2, 200, 200, 0, angleS, PIE);
	fill('yellow');
	arc(width/3*2, height/2, 100, 100, 0, angleM, PIE);
	fill('blue');
	arc(width/3*2, height/2, 50, 50, 0, angleH, PIE);
}