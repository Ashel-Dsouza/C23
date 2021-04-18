const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;

var engine,world,ground;
var ball;
var box1,box2;
var ground1;

function setup() {
  createCanvas(800,400);
  engine = Engine.create();
  world = engine.world;
  box1 = new box(200,300,50,50);
  box2 = new box(230,100,50,100);
  ground1 = new Ground(400,380,800,20);
  //createSprite(400, 200, 50, 50);
}

function draw() {
  background("black");
  Engine.update(engine);
  box1.display();
  box2.display();
  ground1.display();
  //rect(ground.position.x,ground.position.y,800,20);  
}