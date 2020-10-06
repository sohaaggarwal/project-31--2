class Plinko {
    constructor(x,y) {
      var options = {
          isStatic: true,
          restitution:1,
          friction:0
      
      }
      this.radius=10;

      this.body = Bodies.circle(x,y,this.radius,options);
      
      //this.color=color(random(0,255),random(0,255),random(0,255));
      World.add(world, this.body);
     
    }
    display(){
      var angle = this.body.angle;
      fill("brown");
      push();
      translate(this.body.position.x, this.body.position.y);
        rotate(angle); 
        ellipseMode(CENTER);
       ellipse(0,0,this.radius,this.radius);
    pop();
    }
    }
    

