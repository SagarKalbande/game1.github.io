var S;
var S1;

function setup() {

createCanvas(800,600);
background(251);
S = new balls();
s1 = new balls();

}

function draw() {

  	
 	S.show();
 	S.update();
 	S.direction();


 	s1.show();
 	s1.update();
 	s1.direction();
}