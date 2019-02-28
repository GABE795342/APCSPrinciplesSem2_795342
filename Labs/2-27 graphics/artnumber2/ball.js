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
	strokeWeight(3);
	line(this.loc.x, this.loc.y, this.rad, this.rad);
	stroke(random(0, 20));
	strokeWeight(1);
	line(this.loc.x, this.loc.y, this.rad, this.rad);
	}
}


