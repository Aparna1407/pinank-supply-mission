var helicopterIMG, helicopterSprite, packageSprite,packageIMG;
var packageBody,ground
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
var sky;
var farmer,farmers;


var object=[]; // created empty array
function preload()
{
	helicopterIMG=loadImage("helicopter6.png")
	packageIMG=loadImage("package.png")
	sky=loadImage("sky.jpg");
	farmer=loadImage("farmer.png");
	
}

function setup() {
	createCanvas(800, 700);
	rectMode(CENTER);
	
	/*packageSprite=createSprite(width/2, 80, 10,10);
	packageSprite.addImage(packageIMG)
	packageSprite.scale=0.2
*/
	helicopterSprite=createSprite(width/2, 200, 10,10);
	helicopterSprite.addImage(helicopterIMG)
	helicopterSprite.scale=0.4

	groundSprite=createSprite(width/2, height-35, width,10);
	groundSprite.shapeColor=color(255)

	engine = Engine.create();
	world = engine.world;

	//packageBody = Bodies.circle(width/2 , 200 , 5 , {restitution:0.4, isStatic:true});
	//World.add(world, packageBody);
	
	//Create a Ground
	ground = Bodies.rectangle(width/2, 650, width, 10 , {isStatic:true} );
 	World.add(world, ground);

 	boxPosition=width/2-100;
 	boxY=610;

 	boxleftSprite=createSprite(boxPosition, boxY, 20,100);
 	boxleftSprite.shapeColor=color(255,0,0);

 	boxLeftBody = Bodies.rectangle(boxPosition+20, boxY, 20,100 , {isStatic:true} );
 	World.add(world, boxLeftBody);

 	boxBase=createSprite(boxPosition+100, boxY+40, 200,20);
 	boxBase.shapeColor=color(255,0,0);

 	boxBottomBody = Bodies.rectangle(boxPosition+100, boxY+45-20, 200,20 , {isStatic:true} );
 	World.add(world, boxBottomBody);

 	boxRightSprite=createSprite(boxPosition+200 , boxY, 20,100);
 	boxRightSprite.shapeColor=color(255,0,0);

 	boxRightBody = Bodies.rectangle(boxPosition+200-20 , boxY, 20,100 , {isStatic:true} );
 	World.add(world, boxRightBody);

    farmers=createSprite(200,515,20,20);
	farmers.addImage("F",farmer);
	farmers.scale=0.5;

	Engine.run(engine);
  
}


function draw() {
  rectMode(CENTER);
  background(sky);
 // Engine.update(engine);
  /*packageSprite.x= packageBody.position.x 
  packageSprite.y= packageBody.position.y 
*/

for(var i=0;i<object.length;i++){
	object[i].display(); // display of object when object is added in array
}
    drawSprites();

	
   
}

function keyPressed(){

	if(keyCode === RIGHT_ARROW){
		helicopterSprite.x=helicopterSprite.x+20
		//Matter.Body.translate(packageBody,{x:20,y:0});
	  }
	
	 else if(keyCode === LEFT_ARROW){
		helicopterSprite.x=helicopterSprite.x-20;
		//Matter.Body.translate(packageBody,{x:-20,y:0});  
	}
	
	else if(keyCode === DOWN_ARROW ){
object.push(new Box(helicopterSprite.x,helicopterSprite.y,30,30)); // object created whenever down arrowkey is pressed
		//boxes();
	
		//Matter.Body.setStatic(packageBody,false);
		//Matter.body.translate(packageBody,{x:0,y:0});
		//Matter.Body.applyForce(packageBody,{x:0,y:0},{x:0,y:20})
	
	}

}

/*function boxes(){
//if(helicopterSprite.y>=packageSprite.y){
	//helicopterSprite.x=packageSprite.x;

	packageSprite=createSprite(400, 200, 10,10);
	packageSprite.addImage(packageIMG)
	packageSprite.scale=0.2

	helicopterSprite.depth=packageSprite.depth;
	helicopterSprite.depth=helicopterSprite.depth+1;
	packageBody = Bodies.rectangle(packageSprite.x, packageSprite.y, 10 ,10);
	World.add(world, packageBody);
	
}*/
