var S;
var S1;

function setup() {

createCanvas(window.innerWidth, window.innerHeight);
background(251);
S = new balls();
s1 = new balls();

}

function draw() {

  	noStroke();
 	S.show();
 	S.update();
 	S.direction();


 	s1.show();
 	s1.update();
 	s1.direction();
}
