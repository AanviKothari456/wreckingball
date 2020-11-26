class Ball{
    constructor(x,y,r){
        var options={
            restitution:3,
            frictionAir:0.001,
            density:1.2,
            isStatic:false
        }
        
        this.radius=r;
this.body=Bodies.circle(x,y, r/2, options);
World.add(world,this.body);
    }

    display(){

var pos=this.body.position;
//pos.x=mouseX;
//pos.y=mouseY;
var angle=this.body.angle;
push();
translate(pos.x, pos.y);
rotate(angle);
rectMode(CENTER);
fill('pink');
circle(0,0,this.radius);
pop();


    }
}