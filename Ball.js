class Ball{
    constructor(x,y,r){
        var options = {
            restitution:0.3,
            friction:1.0,
            density:0.2,
            isStatic:false
        }
        this.r = r;
        this.body = Bodies.circle(x,y,this.r,options);
        this.image = loadImage("polygon.png");
        World.add(world,this.body);
    }
    display(){
       
    
        push();
        ellipseMode(RADIUS);
        ellipse(this.body.position.x,this.body.position.y,this.r,this.r);
        imageMode(CENTER);
        image(this.image,this.body.position.x,this.body.position.y,0,0)
        pop();
    }
    
    };