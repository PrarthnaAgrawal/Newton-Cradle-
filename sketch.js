
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
const Constraint = Matter.Constraint;

var b1,b2,b3,b4,b5;
var c1,c2,c3,c4,c5;
var roof; 

function preload()
{
	
}

function setup() {
	createCanvas(800, 700);


	engine = Engine.create();
	world = engine.world;

	b1=new Bob(200,300,10)
	b2=new Bob(250,300,10)
	b3=new Bob(300,300,10)
	b4=new Bob(350,300,10)
	b5=new Bob(400,300,10)

	roof=new Roof(400,20,800,20)

	c1=new Chain(b1.body,roof.body)
	c2=new Chain(b2.body,roof.body)
	c3=new Chain(b3.body,roof.body)
	c4=new Chain(b4.body,roof.body)
	c5=new Chain(b5.body,roof.body)
	

	//Create the Bodies Here.


	Engine.run(engine);
  
}


function draw() {
  rectMode(CENTER);
  background(0);
  roof.display();
  b1.display();
  b2.display();
  b3.display();
  b4.display();
  b5.display();
  c1.display();
  c2.display();
  c3.display();
  c4.display();
  c5.display();
  roof.display();
  
  drawSprites();
 
}



