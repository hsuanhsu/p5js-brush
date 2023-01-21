function setup() {
	createCanvas(windowWidth, windowHeight);
	background(0);
}

function draw() {
	
}

function mousePressed(){
    //tree
    let amount = 8; // amount of triangle
    let shift_up = random(20,30); // len of upward displacement
    let tri_base_ori = 100; // the first len of triangle base
    let tri_base_curr = tri_base_ori; // current len of triangle base
    let tri_base_ratio = 0.9; // the ratio of triangle reduction
    let x1, x2, x3, y1, y2, y3;
    let x1_shift = 0;
    for (let i = 0; i < amount; i++){
        if (i != 0){
            tri_base_curr = tri_base_ori * pow(tri_base_ratio, i);
            x1_shift = (tri_base_ori - tri_base_ori * pow(tri_base_ratio, i)) / 2;
        }
        x1 = mouseX + x1_shift;
        y1 = mouseY - i * shift_up;
        x2 = x1 + tri_base_curr;
        y2 = mouseY - i * shift_up;
        x3 = x1 + tri_base_curr / 2;
        y3 = mouseY - tri_base_curr / 2 * 2 - i * shift_up;
        fill(random(255), random(200, 255), random(100, 200));
        triangle(x1, y1, x2, y2, x3, y3);
    }

    //root
    let rect_len = tri_base_ori / 2;
    let rect_x = mouseX + tri_base_ori / 4;
    let rect_y = mouseY;
    fill(random(60, 110), random(40, 60), random(40, 60));
    rect(rect_x, rect_y, rect_len, rect_len);
}