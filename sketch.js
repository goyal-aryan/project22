const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
const Constraint = Matter.Constraint;

var roof;

//Create multiple bobs variables here
var bob1;
var bob2;
var bob3;
var bob4;
var bob5;

//Create mulitple ropes variable here
var rope1;
var rope2;
var rope3;
var rope4;
var rope5;

function setup() {

    //to create Canvas
    createCanvas(800, 600);

    //Initialising Engine
    engine = Engine.create();
    world = engine.world;

    //creating roof options
    var roof_options = {
        isStatic: true
    }

    //creating bob options
    var bob_options = {
        isStatic: true,
        friction: 0.4,
        density: 3,
        restitution: 1.2,
    }

    //to create roof and bobs and add it to world
    roof = Bodies.rectangle(400, 100, 300, 20, roof_options);
    World.add(world, roof);

    bob1 = Bodies.circle(335, 300, 30, bob_options);
    World.add(world, bob1);

    bob2 = Bodies.circle(365, 300, 30, bob_options);
    World.add(world, bob2);

    bob3 = Bodies.circle(395, 300, 30, bob_options);
    World.add(world, bob3);

    bob4 = Bodies.circle(425, 300, 30, bob_options);
    World.add(world, bob4);

    bob5 = Bodies.circle(455, 300, 30, bob_options);
    World.add(world, bob5);

    //to create ropes
    rope1 = new Rope(bob1, roof, -50 * 2, 0);
    rope2 = new Rope(bob2, roof, -25 * 2, 0);
    rope3 = new Rope(bob3, roof, -0 * 2, 0);
    rope4 = new Rope(bob4, roof, 25 * 2, 0);
    rope5 = new Rope(bob5, roof, 50 * 2, 0);

    //to run the engine
    Engine.run(engine);
}

function draw() {

    //to display in center
    rectMode(CENTER);

    //to give background color
    background("#99004d");

    //to display the roof
    rect(roof.position.x, roof.position.y, 300, 20);

    //tocall display() to show ropes here
    rope1.display();
    rope2.display();
    rope3.display();
    rope4.display();
    rope5.display();

    //to create ellipse shape for multiple bobs here
    ellipse(bob1.position.x, bob1.position.y, 30, 30);
    ellipse(bob2.position.x, bob2.position.y, 30, 30);
    ellipse(bob3.position.x, bob3.position.y, 30, 30);
    ellipse(bob4.position.x, bob4.position.y, 30, 30);
    ellipse(bob5.position.x, bob5.position.y, 30, 30);
}

//Write keyPressed function and apply force on pressing up_arrow key on the first bob.
function keyPressed() {
    if (keyCode === UP_ARROW) {

        Matter.Body.applyForce(bob1, bob1.position, { x: -100, y: -100 });
    }
}