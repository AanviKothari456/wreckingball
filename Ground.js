class Ground{
    constructor(x,y, width, height){
        var options={
            restitution:1,
            friction:1,
            isStatic:true
        }
        this.width=width;
        this.height=height;
this.body=Bodies.rectangle(x,y, this.width, this.height, options);
World.add(world,this.body);
    }

    display(){
var pos=this.body.position;

push();


rectMode(CENTER);
fill('brown');
rect(pos.x, pos.y,this.width, this.height);
pop();


    }
}