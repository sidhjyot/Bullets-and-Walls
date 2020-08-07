var wall,thickness;
var bullet,speed,weight;

function setup() {
  createCanvas(800,400);


thickness=random(22,83);
speed=random(223,321);
weight=random(30,52); 

bullet=createSprite(10, 200, 150, 50);
bullet.velocityX=5;
wall=createSprite(700, 200, thickness, height/2);
}

function draw() {
  background("black"); 

  if (hasCollided(bullet, wall)) 
  {

  var damage=(0.5 * weight * speed * speed)/(thickness *thickness *thickness);  
  bullet.velocityX=0;

  if (damage>10) 
  {
        wall.shapeColor=color(255,0,0);
      
  }

  if (damage<10) 
  {
      wall.shapeColor=color(0,255,0);
    

  }
  }
drawSprites();
}
function hasCollided(lbullet, lwall)
{
    bulletRightEdge=lbullet.x +lbullet.width; 
    wallLeftEdge=lwall.x;
    if (bulletRightEdge>=wallLeftEdge) 
      {
           return true;
      }
     else{return false;}
      }