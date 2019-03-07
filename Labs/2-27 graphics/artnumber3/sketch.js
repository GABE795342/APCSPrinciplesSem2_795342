//sketch file
var balls = [];
var toggle = true;
function setup() {
  var cnv = createCanvas(800, 800);
  cnv.position((windowWidth-width)/2, 30);
  background(0,0,0,255);
  loadBalls(2);  
}
function draw() {
	if(toggle){
		for(var i = 0; i < balls.length; i++){
		balls[i].run();
	}	
		
		
		
	}
	
	
	//for(var i = 0; i < balls.length; i++){
	//	balls[i].run();
	//}
}

function loadBalls(numBalls){
	for(var i = 0; i < numBalls; i++){
		var loc = createVector(random(width), random(height));
		var vel = createVector(random(-3,3), random(-3,3));
		var rad = random(20,40);
		var col = getRandomColor();
		balls.push(new Ball(loc, vel, rad, col));
	}
	
	
}
function mouseClicked(){
	toggle = !toggle;
	
}

function getRandomColor(){
  var r = random(50, 150);
  var g = random(0, 40);  
  var b = random(0, 60); 
  
  return color(r,g,b);
  
}
