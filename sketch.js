const Engine=Matter.Engine;
const World=Matter.World;
const Bodies=Matter.Bodies;
const Constraint=Matter.Constraint;

var engine, world, rope, ball;
var box1,box2,box3,box4,box5,box6,box7,box8,box9,box10,box11,box12,box13,box14,box15,box16,box17,box18,box19,box20,box21;

function setup(){
  var canvas=createCanvas(1200,800);
  engine=Engine.create();
  world=engine.world;

  ground=new Ground(600, height, 1200,20)
 
  box1= new Box(600,600);
  box2= new Box(600,600);
  box3= new Box(600,600);
  box4= new Box(600,600);
  box5= new Box(600,600);
  box6= new Box(600,600);

  box7= new Box(700,600);
  box9= new Box(700,600);
  box8= new Box(700,600);
  box10= new Box(700,600);
  box11= new Box(700,600);
  box12= new Box(700,600);
  box13= new Box(700,600);
  box14= new Box(700,600);


  box15= new Box(800,600);
  box16= new Box(800,600);
  box17= new Box(800,600);
  box18= new Box(800,600);
  box19= new Box(800,600);
  box20= new Box(800,600);
  box21= new Box(800,600);
  ball=new Ball(280,400,100);
  rope=new Rope(ball.body,{x:280,y:150});

}

function draw(){
  background('black');
  Engine.update(engine);

  ground.display();
  
  box1.display();
  box2.display();
 box3.display();
  box4.display();
  box5.display();
  box6.display();
  box7.display();
  box8.display();
  box9.display();
  box10.display();
  box11.display();
  box12.display();
  box13.display();
  box14.display();
  box15.display();
  box16.display();
  box17.display();
  box18.display();
  box19.display();
  box20.display();
  box21.display();

  rope.display();
  ball.display();

}

function mouseDragged(){
  Matter.Body.setPosition(ball.body, {x:mouseX, y:mouseY});

}

function KeyPressed(){
  if (keyCode===32){
    rope.attach(ball.body);

  }


}

function MouseReleased(){
  rope.fly();
}
