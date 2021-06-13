var ball, padUp, padDown, WallLeft, WallRight, padUp2, padDown2, gameOver,gameOverimg, gameRestart, gameRestartimg;

function preload(){
  gameOverimg = loadImage("go.jpg");
  gameRestartimg= loadImage("re.png");
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

      //  for gameover obj
      gameOver = createSprite(210, 250);
      gameOver.addImage(gameOverimg);
      gameOver.scale=0.2;
      gameOver.visible=false;
    // game restart
    gameRestart = createSprite(210,350);
    gameRestart.addImage(gameRestartimg);
    gameRestart.visible=false;
  
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
   
  if(ball.y>545){
  padDown.visible=false;
  padDown2.visible=false;
  padUp.visible=false;
  padUp2.visible=false;
  ball.visible=false;
  gameRestart.visible=true;
  gameOver.visible = true;
  }

  reset();
  drawSprites();
}

function reset() {
  if (mousePressedOver(gameRestart) && ball.y>545) {
    padDown.visible=true;
    padDown2.visible=true;
    padUp.visible=true;
    padUp2.visible=true;
    ball.visible=true;
    ball.x = 210;
    ball.y = 250;
    gameOver.visible=false;
    gameRestart.visible =false; 
  }
}