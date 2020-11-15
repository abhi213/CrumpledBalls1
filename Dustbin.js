class Dustbin {
    constructor(x, y) {
        var options = {
            isStatic:true
        }
        this.width = 200;
        this.height = 100;
        this.thickness = 20;
        this.bottombody = Bodies.rectangle(x, y, this.width, this.thickness, options);
        this.bottombody.collisionFilter.group = 1;
        World.add(world, this.bottombody);
        this.rightbody = Bodies.rectangle(x + 100, y - 40, this.thickness, this.height, options);
        this.rightbody.collisionFilter.group = 1;
        World.add(world, this.rightbody);
        this.leftbody = Bodies.rectangle(x - 100, y - 40, this.thickness, this.height, options);
        World.add(world, this.leftbody); 
      }
  
    display() {
        var angle1 = this.bottombody.angle;
        var angle2 = this.rightbody.angle;
        var angle3 = this.leftbody.angle;      
        push();
        translate(this.bottombody.position.x, this.bottombody.position.y);
        rotate(angle1);
        rectMode(CENTER);
        rect(0, 0, this.width, this.thickness);
        pop();
        push();
        translate(this.rightbody.position.x, this.rightbody.position.y);
        rotate(angle2);
        rectMode(CENTER);
        rect(0, 0, this.thickness, this.height);
        pop();
        push();
        translate(this.leftbody.position.x, this.leftbody.position.y);
        rotate(angle3);
        rectMode(CENTER);
        rect(0, 0, this.thickness, this.height);
        pop();
    }
  }