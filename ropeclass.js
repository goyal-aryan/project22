class Rope {

    //constructor
    constructor(bob, roof, pointA, pointB) {

        this.pointA = pointA
        this.pointB = pointB

        //to create constraint
        this.rope = Matter.Constraint.create({
            bodyA: bob,
            bodyB: roof,
            pointB: { x: this.pointA, y: this.pointB }
        })

        //add the this.rope in world
        World.add(world, this.rope);
    }

    display() {

        //create variable for bob and oof
        var bob = this.rope.bodyA.position;
        var roof = this.rope.bodyB.position;



        push();

        //to give color and thickness
        strokeWeight(5);
        stroke(300);

        //to create line
        line(bob.x, roof.y, bob.x, bob.y);

        pop();
    }
}