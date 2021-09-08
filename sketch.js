
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

let engine;
let world;

var ground;



function setup() {
  createCanvas(400,400);

  engine = Engine.create();
  world = engine.world;
  
  var ball_options = {
    restitution: 0.05
  }

 btn1=createImg("click.png");
 btn1.position(20,30);
 btn1.size(50,50);
 btn1.mouseClicked(hForce);
 
 blower = new Blower(355,350,80,80);
  blowermouth = new Blower(200,380,230,10);
 
  ball = Bodies.circle(355,200,20,ball_options);  
  
 World.add(world,ball)

  rectMode(CENTER);
  ellipseMode(RADIUS);
}


function draw() 
{
  background(51);
  
  ellipse(ball.position.x,ball.position.y,20)

  blower.show();
  blowermouth.show();
  
  Engine.update(engine);
}

function hForce(){

  Matter.Body.applyForce(ball,{x:0,y:0},{x:0,y:-0.05})
}
