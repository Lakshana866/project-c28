
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
const Render = Matter.Render;
const Constraint=Matter.Constraint;
var treeObj, stoneObj,groundObject, launcherObject;
var mango1, mango2, mango3, mango4,mango5, mango6,mango7, mango8, mango9, mango10;
var world,boy;
var stone;
var elastic;
function preload(){
	boy=loadImage("boy.png");
	
  }

function setup() {
	createCanvas(1300, 600);
	engine = Engine.create();
	world = engine.world;

	mango1=new mango(1010,100,25);
	
	mango2=new mango(960,150,25);
	mango3=new mango(1020,180,25);
	mango4=new mango(1080,220,25);
	
	mango5 = new mango(1080, 120, 25);
	mango6 = new mango(1130, 180, 25);
	mango7 = new mango(1100, 70, 25);
	mango8 = new mango(900, 210, 25);
	mango9 = new mango(950, 250, 25);
	mango10 = new mango(1200, 230, 25);

stone = new Stone(240, 420, 20);
	treeObj=new tree(1050,580);
	groundObject=new ground(width/2,600,width,20);
	elastic = new constraint(stone.body, {x:240, y:420})
	Engine.run(engine);

}

function draw() {

  background(230);
  //Add code for displaying text here!
  textSize(25);
  text("Press Space to get a second Chance to Play!!",100 ,70);
  image(boy ,200,340,200,300);
  detectCollision(stone, mango1)
  detectCollision(stone, mango2)
  detectCollision(stone, mango3)
  detectCollision(stone, mango4)
  detectCollision(stone, mango5)
  detectCollision(stone, mango6)
  detectCollision(stone, mango7)
  detectCollision(stone, mango8)
  detectCollision(stone, mango9)
  detectCollision(stone, mango10)
  
  

  treeObj.display();
  mango1.display();
  mango2.display();
  mango3.display();
  mango4.display();
  mango5.display();
  mango6.display();
  mango7.display();
  mango8.display();
  mango9.display();
  mango10.display();
elastic.display();
stone.display();
  groundObject.display();
}
function mouseDragged(){
    Matter.Body.setPosition(stone.body,{x:mouseX,y:mouseY});
}
function mouseReleased(){
	elastic.fly();
}
function detectCollision(lstone, lmango){
	mangoBodyPosition = lmango.body.position
	stoneBodyPosition = lstone.body.position

	var distance = dist(stoneBodyPosition.x, stoneBodyPosition.y, mangoBodyPosition.x, mangoBodyPosition.y)
	if(distance<=lmango.r+lstone.r)
	{
		Matter.Body.setStatic(lmango.body, false);
	}

}
function keyPressed(){
	if(keyCode===32){
		Matter.Body.setPosition(stone.body,{x:250,y:410})
		elastic.attach(stone.body);
	}
}