const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
var ground, paper, dustbin;

function preload()
{	
}

function setup() {
	createCanvas(1000, 700);
	engine = Engine.create();
	world = engine.world;

	ground = new Ground(500, 673);
	dustbin = new Dustbin(800, 655);
	paper = new Paper(100, 350, 30);

	Engine.run(engine);
}

function keyPressed() {
    if (keyCode === UP_ARROW) {
		if (paper.body.position.x < 300)
			Matter.Body.applyForce(paper.body, paper.body.position, {x:10, y:-10});
		else	
		    Matter.Body.applyForce(paper.body, paper.body.position, {x:10, y:10});
    }
}

function draw() {
    rectMode(CENTER);
    background(0);
  
	ground.display();
    dustbin.display();
    paper.display();
    drawSprites();
    keyPressed();
}