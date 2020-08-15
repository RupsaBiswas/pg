const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;

var engine, world;
var particles=[];
var plinkos=[];
var division=[];

//var divisionHeight=300;

var ground;
var bucket,bucket1,bucket2,bucket3,bucket4,bucket5,bucket6,bucket7;



function setup() {
  createCanvas(480,800);
  engine = Engine.create();
  world = engine.world;

  ground= new Ground(240,height,800,20);
  
 // for(var k=0;k<innerWidth;k=k+80){
   // division.push(new Division (k,height-divisionHeight/2,divisionHeight));
  //}

  bucket= new Bucket(200,780,100,5);
  
  
}







function draw() {
  Engine.update(engine);
  
  background(0);  

  ground.display();
 // division.display();
 bucket.display();

  drawSprites();
}