var ROCKET , ROCKETImg;
var EARTH , EARTHImg;
var ASTEROIDS;
var ASTEROIDS1 , ASTEROIDS2 , ASTEROIDS3 , ASTEROIDS4 , ASTEROIDS5;

function preload(){
 ROCKETImg = loadImage ("ROCKET.png");
 EARTHImg = loadImage ("EARTH.png");
}

function setup() {
  createCanvas(800,400);
  ROCKET = createSprite(200 , 700 , 50,50);
  ROCKET.addImage(ROCKETImg);
  ROCKET.scale = 0.1;

  EARTH = createSprite(200 , 400 , 70,70);
  EARTH.addImage(EARTHImg);
  EARTH.scale = 0.2;
}

function draw() {
  background(255,255,255);  

  if(keyDown(RIGHT_ARROW)){
   ROCKET.velocityX = 2;
  }
  if(keyDown(LEFT_ARROW)){
    ROCKET.velocityX = 2;
   }
   if(keyDown(UP_ARROW)){
    ROCKET.velocityY = 2;
   }
   if(keyDown(DOWN_ARROW)){
    ROCKET.velocityY = 2;
   }
  drawSprites(); 
}