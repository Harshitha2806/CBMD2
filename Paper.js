class Paper {
    constructor(x, y, r) {
      var options = {
          isStatic : false,
          'restitution':0.3,
          'friction':0.5,
          'density':1.2
      }
     
      this.x=x;
      this.y=y;
      this.r=r;
      
      this.body = Bodies.circle(this.x, this.y,this.r/2, options);
      //this.radius = 50;
      
      
      
      World.add(world, this.body);
    }
    display(){
    var pos =this.body.position;
      //pos .x = mouseX;
      //pos. y = mouseY;
      //var angle = this.body.angle;
      push();
      translate(pos.x, pos.y);
      //rotate(angle);
      ellipseMode(RADIUS);
      //strokeWeight(4);
      //stroke("blue");
      fill("green");
      ellipse(0, 0, this.radius,this.radius);
      pop();
    }
  };
  
  //ellipse(ball.position.x,ball.position.y,20,20);
  //ellipseMode(RADIUS);