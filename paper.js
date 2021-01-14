class Paper{
    constructor(){
        var Options ={

            restitution :0,
            friction:0.3,
            density:1.2

        }
        this.body=Bodies.circle(200,100,20,Options);
        this.radius=20;
        this.paperImage = loadImage("paper.png");
        World.add(world,this.body);
     }
     display(){
        var position = this.body.position;
        var angle = this.body.angle;

        push();
        fill("white");
        translate(position.x,position.y);
        rotate(angle);
        ellipseMode(RADIUS);
        ellipse(0,0,this.radius,this.radius);
        // imageMode(CENTER);
        // image(this.paperImage,position.x,position.y,20,20);
        pop();


     }


}
