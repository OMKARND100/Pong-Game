var ball, padUp, padDown, WallLeft, WallRight, padUp2, padDown2;
var gameState="Start"

function preload(){


}
function setup(){

  canvas = createCanvas(420,550);
  ball = createSprite(210, 250,10,10);
  padUp = createSprite(210, 05,70,5);
  padUp.shapeColor = "Green"
  padUp2 = createSprite(210, 10,70,5);
  padUp2.shapeColor = "red"

  padDown = createSprite(210, 540,70,5);
  padDown.shapeColor = "red"
  padDown2 = createSprite(210, 545,70,5);
  WallLeft = createSprite(-2, 250,10,600);
  WallLeft.visible = false;
  WallRight = createSprite(422, 250,10,600);
  WallRight.visible = false;
  ball.velocityX = 4;
  ball.velocityY = 4;
}
function draw(){
  background("pink");
  padDown.position.x = mouseX;
  padDown2.position.x = mouseX
  // for ai
  padUp.position.x = ball.x;
  padUp2.position.x = ball.x;
  ball.bounceOff(WallRight);
  ball.bounceOff(WallLeft); 
  ball.bounceOff(padDown);
  ball.bounceOff(padUp);

  drawSprites();
}