const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;

var engine, world;
var solo;
var bola;

function setup() {
  var canvas = createCanvas(400, 400);
  engine = Engine.create();
  world = engine.world;

  var object_options = {
    isStatic: true,
  };

  var bola_options = {
    restitution: 2.0
  }
  solo = Bodies.rectangle(200, 390, 50, 50, object_options);
  World.add(world, solo);

  bola = Bodies.circle(200,50,20, bola_options)
  World.add(world, bola);
}

function draw() {
  background(0);
  Engine.update(engine);
  rectMode(CENTER);
  rect(solo.position.x, solo.position.y, 400, 30);
  ellipseMode(RADIUS);
  ellipse(bola.position.x,bola.position.y, 20,20);
}
