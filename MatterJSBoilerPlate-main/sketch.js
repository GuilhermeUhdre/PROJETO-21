
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
var ball, groundobj, leftsize,rightsize
var world
var radios = 40
function preload()

{
	
}

function setup() {
	createCanvas(1600,700);


	engine = Engine.create();
	world = engine.world;

	//Create the Bodies Here.
	var ballopitions = {
		isStatic: false,
		restituion: 0.3, 
		friction:0,
		densidy:1.2
	}

	ball = Bodies.circle(260,100,radios/2,ballopitions)
	World.add(world,ball)
	groundobj = new ground(width/2,670,width,20)
	leftsize = new ground(1100,600,20,120)
	rightsize = new ground(1350,600,20,120)
	Engine.run(engine);
  
}


function draw() {
  rectMode(CENTER);
  background(255);
  ellipse(ball.position.x,ball.position.y,radios)
  groundobj.display()
  leftsize.display()
  rightsize.display()
 drawSprites();
 
}
function keyPressed(){
	if (keyCode === UP_ARROW){
	Matter.Body.applyForce(ball,ball.position,{x:85,y:-85})
	}
	}


