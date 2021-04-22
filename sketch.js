
const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;
const Constraint=Matter.Constraint;

var engine,world,ground,ground1;
var ground2,block,block1;

var block2,block3,block4,block5,block6,block7;
var block8,block9,block10,block11,block12;

var block13,block14,block16,block17,block18;
var block19,block20,block21,block22,block23; 

var block24,block25,block26,block27,block28;
var polygon;
var slingshot;


function preload(){
    polygon_img=loadImage('polygon.png')
}
function setup(){
    engine=Engine.create();
    world=engine.world;

    createCanvas (1200,600)

    slingshot=new SlingShot(this.polygon,{x:100,y:200})
    block=new Block(250,400,50,50);
    block1=new Block(300,400,50,50);
    block2=new Block(350,400,50,50);

    block3=new Block(400,400,50,50);
    block4= new Block(450,400,50,50);
    block5=new Block(300,250,50,50);
    block6=new Block(400,250,50,50);
    block7= new Block(350,250,50,50);

    block8= new Block(350,100,50,50);
    block9= new Block(200,100,50,50);
    block10= new Block(150,100,50,50);
    block11= new Block(500,100,50,50);
    block12= new Block(300,400,50,50);

    block13= new Block(300,300,50,50);
    block14= new Block(250,300,50,50);
    
    block17= new Block(250,100,50,50);
    block18= new Block(200,300,50,50);
    


    box19=new Block2(780,100,50,50)
    box20=new Block2(830,100,50,50)
    box21=new Block2(880,100,50,50)
    box22=new Block2(930,100,50,50)
    box23=new Block2(980,100,50,50)


    box24=new Block2(830,100,50,50)
    box25=new Block2(880,100,50,50)
    box26=new Block2(930,100,50,50)
    box27=new Block2(880,100,50,50)

    polygon=Bodies.circle(50,200,20)
    World.add(world,polygon)

  

     
    ground=new Ground(600,590,1200,20)
    ground1=new Ground2(295,450,500,20)
    ground2=new Ground3(900,350,350,20)
}
 
function draw(){

    background('black');
    Engine.update(engine);

    ground.display();
    ground1.display();
    ground2.display();
    block.display();

    block1.display();
    block2.display();
    block3.display();
    block4.display();
    block5.display();

    block6.display();
    block7.display();
    block8.display();
    block9.display();
    block10.display();

  //  block11.display();
    block12.display();
    block13.display();
    block14.display();
    block17.display();

    block18.display();
    box19.display();
    box20.display();
    box21.display();
    box22.display();
    box23.display();
    box24.display();
    box25.display();
    box26.display();
    box27.display();
    polygon.display();

    
    imageMode (CENTER)
    image (polygon_img,polygon.position.x,polygon.position.y,40,40)
}
function mouseDragged(){
    Matter.Body.setPosition(this.polygon,{x:mouseX,y:mouseY})
}

function mouseReleased(){
    slingshot.fly();
}