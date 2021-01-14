
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;


function setup() {
	createCanvas(1200, 800);


	engine = Engine.create();
	world = engine.world;

	
	ground = new Ground(600,height,1200,20)

	dustbin = new Dustbin(900,780)
	paper=new Paper();

	Engine.run(engine);
  
}


function draw() {
  background(0);
 
  ground.display();
	
	dustbin.display();
	paper.display();
  
}

function keyPressed(){
	if(keyCode===UP_ARROW){
		console.log(paper.position)
		Matter.Body.applyForce(paper.body,paper.body.position,{x:90 , y:-50})
	}
	
}





