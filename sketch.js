var frog,car,bike;
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

function preload()
{
	frog=loadImage("frog image.jpg");
	car=carImage("car webp.jpg");
	bike=bikeImage("bike image.jpg");
}


function setup() {
	createCanvas(800, 700);


	engine = Engine.create();
	world = engine.world;

	//Create the Bodies Here.


	Engine.run(engine);
  
}


function draw() {
  rectMode(CENTER);
  background();
  
  drawSprites();
 
}



