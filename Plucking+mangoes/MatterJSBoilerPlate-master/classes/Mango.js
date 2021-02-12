class Mango {
    constructor(x,y,r) {
      var options = {
          isStatic: true
      }
      this.body = Bodies.rectangle(x,y,r,options);
      this.r = r
      this.image = loadImage("Plucking mangoes/mango.png")
      World.add(world, this.body);
    }
    display(){
        var angle = this.body.angle;
        push();
        translate(this.body.position.x, this.body.position.y);
        rotate(angle);
        imageMode(CENTER);
        fill("grey")
        image( this.image,0, 0, this.r,this.r);
        pop();
      }
}