function Shoot(){

	this.x=200;
	this.y=400;





	this.show = function(){
		fill(255);
		ellipse(this.x, this.y, 10, 10);
		line(this.x,this.y,(mouseX/mouseX),(mouseY/mouseY));
	}




}