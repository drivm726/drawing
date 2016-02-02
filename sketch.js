//Your Drawing

function setup(){
  createCanvas(windowWidth,windowHeight);
}


function draw(){

  background("lightskyblue");

  //house
  fill('papayawhip');
  stroke(3);
  rect(180,450,335,335);

  //grass
  fill("forestgreen");
  noStroke();
  rect(0,730,1100,200);

  //roof
  fill('firebrick');
  stroke(3);
  triangle(180,450,348,140,516,450);

  //door
  fill('white');
  rect(285,570,130,160);

  //door knob
  fill('black');
  ellipse(390,650,15,15);

  //window left
  fill('white');
  rect(200,475,75,75);
  line(275,515,200,515);
  line(237,550,237,475);


  //window right
  fill('white');
  rect(420,475,75,75);
  line(420,515,495,515);
  line(460,550,460,475);

  //doggie
  fill('sienna');
  stroke(1);
  ellipse(602,656,43,40);
  rect(575, 675, 55, 55, 20);
  fill('black');
  ellipse(595,655,5,5);
  ellipse(610,655,5,5);
  ellipse(580,655,10,22);
  ellipse(625,655,10,22);
  arc(600, 658, 10, 20, 0, HALF_PI);

  //sun
  fill('sandybrown');
  stroke('gold');
  strokeWeight(10);
  ellipse(720,150,150,150);









}
