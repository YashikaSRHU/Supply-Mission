var helicopterIMG, helicopterSprite, packageSprite,packageIMG;
var packageBody,ground
var box1,box2,box3
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;


function preload()
{
	helicopterIMG=loadImage("helicopter.png")
	packageIMG=loadImage("package.png")
}

function setup() {
	createCanvas(800, 700);
	rectMode(CENTER);

	engine = Engine.create();
	world = engine.world;

	packageSprite=createSprite(width/2, 200, 10,10);
	packageSprite.addImage(packageIMG)
	packageSprite.scale=0.2

	helicopterSprite=createSprite(width/2, 200, 10,10);
	helicopterSprite.addImage(helicopterIMG)
	helicopterSprite.scale=0.6

	groundSprite=createSprite(width/2, height-35, width,10);
	groundSprite.shapeColor=color(255)

	box1 = new Box(270,560,20,200);
	box2 = new Box(405,650,250,20);
	box3 = new Box(520,560,20,200);


	

	packageBody = Bodies.rectangle(width/2, 200, 10,10, {restitution:0.7, isStatic:true});
	World.add(world, packageBody);
	

	//Create a Ground
	ground = Bodies.rectangle(width/2, height-35, width, 10 , {isStatic:true} );
 	World.add(world, ground);


	//Engine.run(engine);
  
}


function draw() {
  background(0);
  rectMode(CENTER);
  Engine.update(engine)
  packageSprite.x= packageBody.position.x 
  packageSprite.y= packageBody.position.y 

  box1.display();
  box2.display();
  box3.display();
  drawSprites();

  
 
}

function keyPressed() {
if (keyCode === DOWN_ARROW) {
Matter.Body.setStatic(packageBody,false);
    
  }
}




