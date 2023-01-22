function setup() {
	createCanvas(windowWidth, windowHeight);
	background(0);
}

function draw() {
    //background(0, 10);
}

let mode = 1;
function mousePressed(){
    mode++;
}

function mouseMoved(){
    let amount = int(random(10, 50));
    let r = random(2, 20);
    let delta = sqrt(dist(pmouseX, pmouseY, mouseX, mouseY)) * 5; // dist是取前後兩次滑鼠的距離，滑鼠移動越快，則噴灑範圍越廣；sqrt想讓dist的值小一點，使得滑鼠移動快時，點點不會因此變得太分散
    noStroke();
    if (mode % 3 == 1){ // round splatter brush
        for (let i = 0; i < amount; i++){
            fill(random(frameCount%255+mouseY), random(200, 255), random(100, 200));
            ellipse(mouseX+random(-delta, delta), mouseY+random(-delta, delta), r);
            r *= 0.9;
        }
    }
    else if (mode % 3 == 2){ // square splatter brush
        for (let i = 0; i < amount; i++){
            fill(random(100, 200), random(200, 255), random(frameCount%255+mouseY));
            rect(mouseX+random(-delta, delta), mouseY+random(-delta, delta), r);
            r *= 0.9;
        }
    } 
    else{ // crystal splatter brush
        for (let i = 0; i < 10; i++){
            fill(random(200, 255), random(frameCount%255+mouseY), random(100, 200));
            let crystalSize = random(1,5); // distance of crystal center to (x1,y1)
            let x1 = mouseX+random(-delta, delta);
            let y1 = mouseY+random(-delta, delta);
            let x2 = x1 + crystalSize;
            let y2 = y1 + crystalSize * 2;
            let x3 = x1 + crystalSize * 2;
            let y3 = y1;
            let x4 = x2;
            let y4 = y1 - crystalSize * 2;
            quad(x1, y1, x2, y2, x3, y3, x4, y4);
        }
    }
}