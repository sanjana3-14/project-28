
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
const Constraint = Matter.Constraint;

function preload()
{
	boy = loadImage("Plucking mangoes/boy.png")
}

function setup() {
	createCanvas(1200,800);


	engine = Engine.create();
	world = engine.world;
  ground = new Ground (600,750,1200,30)
  stone = new Stone(100,100)
  tree = new Tree(1000,480,350,600)
  slingshot = new SlingShot(stone.body,{x:150,y:600})
  mango1 = new Mango(930,300,40)
  mango2 = new Mango(950,360,40)
  mango3 = new Mango(1050,400,40)
  mango4 = new Mango(860,420,40)
  mango5 = new Mango(1000,330,40)
  mango6 = new Mango(1035,440,40)
	mango7 = new Mango(1100,280,40)
  mango8 = new Mango(1150,350,40)
  mango9 = new Mango(1075,375,40)
  mango10 = new Mango(980,260,40)
  
  Engine.run(engine);
  
}


function draw() {
  rectMode(CENTER);
  background(15,150,255);
  ground.display();
  tree.display();
  stone.display();
 
  mango1.display();
  mango2.display()
  mango3.display()
  mango4.display();
  mango5.display();
  mango6.display();
  mango7.display();
  mango8.display();
  mango9.display();
  mango10.display();
  slingshot.display();

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


  image(boy,200,660,200,300)

  Engine.update(engine)

  drawSprites();
 
}


function detectCollision(stone, mango){
  mangopos = mango.body.position 
  stonepos = stone.body.position

  var distance = dist( stonepos.x, stonepos.y, mangopos.x, mangopos.y)
  
  if(distance< 50){
    Matter.Body.setStatic(mango.body,false)
  }
  
}


function mouseDragged(){
    Matter.Body.setPosition(stone.body,{x:mouseX,y:mouseY})
}

function mouseReleased(){
  slingshot.fly();
  //gameState = "launched";
}

function keyPressed(){
  if(keyCode === 32){
     slingshot.attach(stone.body);
     //stone.trajectory = []
     Matter.Body.setPosition(stone.body,{x:100,y:100})
  }
}
