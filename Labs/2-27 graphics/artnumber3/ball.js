/*
**  Ball Constructor Function
**  Gabriel Wilde
**  Aug 20, 2018
**  vector revision
*/
function Ball(location, velocity, radius, col){
	this.loc = location;
	this.vel = velocity;
	this.rad = radius;
	this.col = col;

	//  Methods  ++++++++++++++++++++++++++++++++++++++++++
	this.run = function(){
    this.checkEdges();
		this.update();
		this.render();
}
this.update = function(){
	//this.vel.x = this.vel.x + this.vel.x;
	//this.vel.y = this.vel.y + this.vel.y;
	this.loc.add(this.vel);
}
this.checkEdges = function(){
	if(this.loc.x < 0) this.vel.x = -this.vel.x;
	if(this.loc.x > width) this.vel.x = -this.vel.x;
	if(this.loc.y < 0) this.vel.y = -this.vel.y;
	if(this.loc.y > height) this.vel.y = -this.vel.y;
}
this.render = function(){
	fill(this.col);
	stroke(random(150, 255),random(150, 255),random(150, 255));
	strokeWeight(0.5);
	line(this.loc.x, this.loc.y, random(0,800), random(0,800));
	stroke(random(0, 20));
	strokeWeight(0.5);
	line(this.loc.x, this.loc.y, random(0,800), random(0,800));
	triangle(this.loc.x, this.loc.y, (this.loc.x * 1.5), (this.loc.y*1.5), random(0,50), 100);
	
	
	//fill(this.col);
	//stroke(random(150, 255),random(0, 20),random(0, 20));
	//strokeWeight(3);
	//line(this.loc.x, this.loc.y, random(0, 20), random(0, 20));
	//stroke(random(200, 255));
	//strokeWeight(1);
	//line(this.loc.x, this.loc.y, this.rad, this.rad);
	}
	
}


