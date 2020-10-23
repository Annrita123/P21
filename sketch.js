var bullet,wall,thickness;
var speed,weight,obj1,obj2,damage;
function setup() {
  createCanvas(1600,400);
  thickness=random(22,83);
  speed=random(223,321);
  weight=random(30,52);
  bullet=createSprite(50, 200, 50, 10);
  bullet.shapeColor="white";
  bullet.velocityX=speed;
 wall=createSprite(1200,200,thickness,height/2);
 wall.shapeColor=color(80,80,80);

  
 
}

function draw() {
  background("blue");  

 

  if(hascollided(bullet,wall))
  {
    bullet.velocityX=0;
    var damage=0.5*weight*speed*speed/(thickness*thickness*thickness);
    if(damage>10)
    {
      wall.shapeColor=color(225,0,0);
    }
    if(damage<10)
    {
      wall.shapeColor=color(0,255,0);
    }
    
    }
  
  drawSprites();
}

function hascollided(obj1,obj2){
  if(obj1.x-obj2.x<(obj2.width+obj1.width)/2){
    return true;
  }else{
    return false;
  }
}