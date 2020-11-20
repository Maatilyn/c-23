const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
var box1
var box2
var ground1
var engine,world,ball;

function setup(){
  createCanvas(400,400);
  engine = Engine.create();
  world = engine.world;
  box1 = new box(200,300,50,50);
  box2 = new box(240,100,50,50);
  ground1 = new ground(200,380,400,20);
}
function draw(){
  background('black');
  Engine.update(engine);
  box1.display();
  box2.display();
  ground1.display();
}