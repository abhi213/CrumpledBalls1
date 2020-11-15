class Paper {
    constructor(x, y, r) {
        var options = {
            isStatic:false,
            restitution:0.3,
            friction:0.5,
            density:3
        }
        this.r = r;
        this.body = Matter.Bodies.circle(x, y, r/2, options);
        this.body.collisionFilter.group = 1;
        World.add(world, this.body);
    }

    display() {
        push();
        translate(this.body.position.x, this.body.position.y);
        rectMode(CENTER);
        strokeWeight(5);
        fill(255, 0, 255);
        ellipse(0, 0, this.r, this.r);
        pop();
    }
}

class Ground {
    constructor(x, y) {
        var options = {
            isStatic:true
        }
        this.width = 1000;
        this.thickness = 20;
        this.body = Bodies.rectangle(x, y, this.width, this.thickness, options);
        this.body.collisionFilter.group = 1;
        World.add(world, this.body);
    } 
        
    display() {
        push();
        translate(this.body.position.x, this.body.position.y);
        rectMode(CENTER);
        strokeWeight(5);
        fill("yellow");
        rect(0, 0, this.width, this.thickness);
        pop();
    }    
}