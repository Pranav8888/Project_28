
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
const Render = Matter.Render;
const Constraint=Matter.Constraint;
var treeObj, stoneObj,groundObject, launcherObject;
var mango1, mango2, mango3;
var world,boy;
var stone, tether;

function preload(){
	boy=loadImage("images/boy.png");
  }

function setup() {
	createCanvas(1300, 600);
	engine = Engine.create();
	world = engine.world;

	mango1 = new Mango(1100,100,30);
	mango2 = new Mango(1000,160,30);
	mango3 = new Mango(1200,230,30);

	treeObj = new Tree(1050, 580);
	groundObject = new Ground(width/2, 585, width, 50);

	stone = new Stone(200, 400, 50, 50);
	tether = new Tether(stone.body,{x:240, y:420});
	
	Engine.run(engine);

}

function draw() {

  background(230);
  //Add code for displaying text here!
  image(boy ,200,340,200,300);
  

  treeObj.display();
  mango1.display();
  mango2.display();
  mango3.display();
  stone.display();
  tether.display();

  groundObject.display();

  detectCollision(stone, mango1);
  detectCollision(stone, mango2);
  detectCollision(stone, mango3);

  textSize(24);
  fill('black');
  text("Press SPACE when you need another chance!", 70, 70);

}

function mouseDragged(){
    Matter.Body.setPosition(stone.body, {x:mouseX,y:mouseY});
}

function mouseReleased(){
    tether.fly();
}

function keyPressed() {
	if(keyCode === 32) {
		Matter.Body.setPosition(stone.body, {x:235, y:420});
		tether = new Tether(stone.body,{x:240, y:420});
	}
}

function detectCollision(lstone, lmango) {
	var mangoBodyPosition = lmango.body.position;
	var stoneBodyPosition = lstone.body.position;

	var distance = dist(stoneBodyPosition.x, stoneBodyPosition.y, mangoBodyPosition.x, mangoBodyPosition.y);

	if(distance < lmango.x && distance < lmango.y)  {
		Matter.Body.setStatic(lmango.body, false);
	}
	
}
