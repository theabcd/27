
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
const Constraint=Matter.Constraint
 var roofObject
 var bobObject1,bobObject2,bobObject3,bobObject4,bobObject5 
 var rope1
function preload()
{
	
}

function setup() {
	createCanvas(800, 700);


	engine = Engine.create();
	world = engine.world;

	//Create the Bodies Here.
bobObject1=new Bob(300,500)
bobObject2=new Bob(350,500)
bobObject3=new Bob(400,500)
bobObject4=new Bob(250,500)
bobObject5=new Bob (200,500)
roofObject=new Ground(300,250,300,20)
rope1=new rope(bobObject1.body,roofObject.body,0,0)
rope2=new rope(bobObject2.body,roofObject.body,50,0)
rope3=new rope(bobObject3.body,roofObject.body,100,0)
rope4=new rope(bobObject4.body,roofObject.body,-50,0)
rope5=new rope(bobObject5.body,roofObject.body,-100,0)



	
	
	Engine.run(engine);
	
}


function draw() {
  rectMode(CENTER);
  background(255);
  Engine.update(engine);
  bobObject1.display();
  bobObject2.display();
  bobObject3.display();
  bobObject4.display();
  bobObject5.display();
  roofObject.display();
  rope1.display();
  rope2.display();
  rope3.display();
  rope4.display();
  rope5.display();
  drawSprites();
}
 function keyPressed(){
   if(keyCode===UP_ARROW){
     Matter.Body.applyForce(bobObject3.body,bobObject3.body.position,{x:-50,y:-50})
   }
 }
