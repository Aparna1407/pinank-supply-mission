class Box{
    constructor(x,y,w,h){
this.body=Bodies.rectangle(x,y,w,h);
this.w=w;
this.h=h;
this.image=loadImage("package.png");
World.add(world,this.body);

    }
    display(){
var pos=this.body.position;
var angle=this.body.angle;
push();


translate(pos.x,pos.y);
image(this.image,0,0,this.w,this.h);

pop();
    }

}
