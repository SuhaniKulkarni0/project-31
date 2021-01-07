const Engine = Matter.Engine
const Bodies = Matter.Bodies
const Constraint = Matter.Constraint
const World = Matter.World


var particle = []
var plinkos = []
var divisions = []
var divisionHeight = 300




function setup() {
 
  createCanvas(480,800);
  createSprite(400, 200, 50, 50);

  engine = Engine.create()
  world = engine.world

  ground = new Ground(800,800,800,10)

  

  

  for(var k = 0; k <= width ; k = k+80){
    divisions.push(new Divisions(k, height-divisionHeight/2,10,divisionHeight))
  }

  for(var j = 15; j <= width-10; j=j+50){
    plinkos.push(new Plinko(j,200))
}
  for (var j = 40; j <= width; j=j+50){
    plinkos.push(new Plinko(j,100))
}
  for(var j = 15; j <= width-10; j=j+50){
    plinkos.push(new Plinko(j,300))
}
  for (var j = 40; j <= width; j=j+50){
    plinkos.push(new Plinko(j,400))
}
}

function draw() {
  background("black");  
  drawSprites();

  
  if(frameCount%60===0){
    particles.push(new Particle(random(width/2+10),10,10))
  }

  for(var j = 0 ; j < particle.length;j++){
    particle[j].display()

  }
  for(var k = 0; k < divisionHeight.length; k++){
    divisions[k].display()

  }


  ground.display()
}