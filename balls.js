function balls(){

	this.x = random()*width;
	this.y = random()*height;
	var xvel = 10;
	var yvel = 10;

	this.update = function(){
		this.x = this.x + xvel;
		this.y = this.y + yvel;
	}

	this.direction = function(){
		if(this.x>width){xvel = -10;}
		if(this.x<0){xvel = 10;}
		if(this.y>height){yvel = -10;}
		if(this.y<0){yvel = 10;}
	}

	this.show = function(){
		fill(random()*255, random()*255, random()*255);
		rect(this.x, this.y, 10, 10);
	}

}