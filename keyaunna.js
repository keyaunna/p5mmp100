var diam1=0;
var r, g, b;

function setup() {
    createCanvas(500,500);
}

function draw() {
 
    background("#099cbc");
    fill(r, g, b);
    stroke("#11b233");
    strokeWeight(3);
    ellipse(50,100,75,75);
    //diam1=diam1+6;
    
    textSize(30);
    textFont("Helvetica");
    textStyle(ITALIC);
    textAlign(CENTER);
    text("wazzup",60,40);
}


function mousePressed(){
	r=random(255);
	g=random(255);	
	b=random(255);
}