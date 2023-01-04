function setup() {
	createCanvas(windowWidth, windowHeight);
	background(255);
}

function draw() {
	//noFill();
	//ellipse(width/2, height/2, 400, 50+frameCount*5); //橢圓在中間，高慢慢加大，繪製很多線條
	//ellipse(width/2, height/2+mouseY, 400, 50+frameCount*5);

	//fill(frameCount*3);
	//rect(50+frameCount*5, 50+frameCount*5, 100, 200); //方形向右下漸層

	//rectMode(CENTER); //設定方形x,y的定位基準為中央（預設是左上角）
	//fill('red');
	//rect(mouseX, mouseY, 100);
	//circle(width/2, height/2, 100);

	// rectMode(CENTER);
	// noFill();
	// stroke(mouseX); //滑鼠越往左越黑
	// strokeWeight(frameCount%2==0?5:1); //線條粗度，frameCount偶數時值為5，奇數時值為1
	// //rect(width/2, height/2, 100+frameCount*20);
	// rect(width/2, height/2, 100+frameCount*20, 50);

	background(255); //把背景清掉
	fill('black');
	text(mouseX + " , " + mouseY, 50, 50); //寫出當前滑鼠座標位置
	triangle();
	
	
	print(frameCount);
}