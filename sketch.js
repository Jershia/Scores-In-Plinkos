var Engine = Matter.Engine,
  World = Matter.World,
  Events = Matter.Events,
  Bodies = Matter.Bodies;
 
var particle = [];
var plinkos = [];
var divisions = [];
var score = 0;
var particles;
var turn = 0;
var gameState = "Play";

var divisionHeight=300;
var score =0;
function setup() {
  createCanvas(800, 800);
  engine = Engine.create();
  world = engine.world;
  ground = new Ground(width/2,height,width,20);
  mousePressed();
   for (var k = 0; k <=width; k = k + 80) {
     divisions.push(new Divisions(k, height-divisionHeight/2, 10, divisionHeight));
   }

    for (var j = 75; j <=width; j=j+50){
       plinkos.push(new Plinko(j,75));
    }
    for (var j = 50; j <=width-10; j=j+50){
       plinkos.push(new Plinko(j,175));
    }

     for (var j = 75; j <=width; j=j+50){
      plinkos.push(new Plinko(j,275));
    }

     for (var j = 50; j <=width-10; j=j+50){
       plinkos.push(new Plinko(j,375));
    }    
}

function draw() {
  background("black");
  textSize(20)
 text("Score : "+ score,20,30);
  Engine.update(engine);
 
  for (var i = 0; i < plinkos.length; i++) {
    plinkos[i].display();
  }
  //if(frameCount%60 === 0){
  //  particles.push(new Particle(random(width/2-30, width/2+30), 10,10));
   // score++;
  //}

 for (var j = 0; j < particle.length; j++) {
    particle[j].display();
  }
  for (var k = 0; k < divisions.length; k++) {
    divisions[k].display();
  }

  if(particles != null){
    particles.display();
    if(particles.body.position.y > 760 ){
      if( particles.body.position.x < 300){
        score = score + 500;
        particles = null;
      if(turn >= 5) gameState = "end";
      
    }
 }
 }

 if(particles != null){
  particles.display();
  if(particles.body.position.y > 760 ){
    if( particles.body.position.x < 600){
      score = score + 100;
      particles = null;
    if(turn >= 5) gameState = "end";
  }
}
}

if(particles != null){
  particles.display();
  if(particles.body.position.y > 760 ){
    if( particles.body.position.x < 900){
      score = score + 200;
      particles = null;
    if(turn >= 5) gameState = "end";
    
  }
}
}
    
   if(gameState === "end"){
     fill("yellow");
     textSize(100)
     text("GameOver",50,450);
     score = 0;
   }
   fill(255)
   textSize(32);
   text("500",15,550);
   text("500",95,550);
   text("500",175,550);
   text("500",255,550);
   text("100",335,550);
   text("100",414,550);
   text("100",490,550);
   text("200",575,550);
   text("200",655,550);
   text("200",735,550);
  }
 

function mousePressed(){
  if(gameState !== "end"){
    turn++;
    particles = new Particle(mouseX,10,10,10);
  }
}