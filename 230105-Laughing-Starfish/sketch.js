function setup() {
	createCanvas(windowWidth, windowHeight);
	background(0);
}

//adjustable parameters
let bgBaseColor = 150;
let bgColorSpeed = 3;

//fixed parameters
let bgColor = bgBaseColor;
let direction = 1; // 0:decrease num, 1:increase num
let randomNum;

function draw() {
	// background setting
	background(20,71, bgColor); //blue
	if (direction == 1)
		bgColor = bgColor + bgColorSpeed;
	else
		bgColor = bgColor - bgColorSpeed;
	if (bgColor >= 255)
		direction = 0;
	if (bgColor <= bgBaseColor)
		direction = 1;

	//show coordinate and frameCount number on screen
	/*
	fill('black');
	textSize(30);
	text(int(mouseX) + " , " + int(mouseY), 50, 50); //show coordinate of mouseX and mouseY number
	text(frameCount, 50, 80);
	*/

	//random
	if (frameCount % 3 == 0) //調整變換random數值的頻率
		randomNum = random(-10,10);

	//starfish
	stroke(255,77,1); //海星框線顏色
	strokeWeight(10);
	fill(255,118,1); //海星顏色
	beginShape();
	curveVertex(windowWidth/2, 251+randomNum); //上
	curveVertex(windowWidth/2-70, 372);
	curveVertex(windowWidth/2-200, 377+randomNum); //左上
	curveVertex(windowWidth/2-80, 467);
	curveVertex(windowWidth/2-160, 606+randomNum); //左下
	curveVertex(windowWidth/2, 520);
	curveVertex(windowWidth/2+160, 605+randomNum); //右下
	curveVertex(windowWidth/2+80, 468);
	curveVertex(windowWidth/2+200, 380+randomNum); //右上
	curveVertex(windowWidth/2+70, 370);
	endShape(CLOSE); //最後點自動連到原點

	//starfish left eye
	noStroke();
	fill(255);
	circle(windowWidth/2-40, 400, 50);
	fill(0);
	circle((windowWidth/2-40), 400, 15); //眼珠跟著動

	fill(255);
	circle(windowWidth/2+40, 400, 50);
	fill(0);
	circle(windowWidth/2+40, 400, 15); //眼珠跟著動

	//starfish mouth
	fill(255,36,50);
	beginShape();
	curveVertex(windowWidth/2-40, 444+randomNum); //左
	curveVertex(windowWidth/2-20, 466);
	curveVertex(windowWidth/2, 480); //中
	curveVertex(windowWidth/2+20, 469);
	curveVertex(windowWidth/2+40, 444+randomNum); //右
	endShape(CLOSE); //最後點自動連到原點

	//mouse press for ha text
	if (mouseIsPressed) {
		fill(255);
		textSize(100);
		text("哈", mouseX+randomNum, mouseY);
	}
	
	//print(frameCount);
}