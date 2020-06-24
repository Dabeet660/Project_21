var wall , thickness;
var bullet, speed, player_weight; 
var  deformation;
var lbullet, lwall;
var damage;

function setup() {
  createCanvas(1600,400);
  thickness = random(22,83);
  speed = random(223,321);
  player_weight = random(30,52);
  wall = createSprite(1200,100,thickness,height/2);
  bullet = createSprite(200,200,50,10);
}

function draw() {
  background("Black");
  wall.shapeColor = "#666666"; 
  bullet.shapeColor = "White"; 
  bullet.velocityX = speed;
  
 
  if(hasCollided(bullet, wall)){
    bullet.velocityX = 0;
    damage = (0.5 * player_weight * speed * speed) / (thickness * thickness * thickness)
    if(damage < 10){
      wall.shapeColor = "Green";
    }
    if(damage > 10){
      wall.shapeColor = "Red";
    }
  }

  drawSprites();
}