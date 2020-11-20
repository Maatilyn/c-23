class box{
    constructor(x,y,w,h){
        var options = {
            friction:0.3,
            density:1
        }
        this.width = w
        this.height = h
        this.body = Bodies.rectangle(x,y,w,h,options);
        World.add(world,this.body);
    }
    display(){
        var pos = this.body.position;
        var angle = this.body.angle;
        push()
        translate(pos.x,pos.y);
        rotate(angle);
        rectMode(CENTER)
        rect(0,0,this.width,this.height);
        pop()
    }
}