    var ball,ball_img,paddle,paddle_img;

var bottomEdge, topEdge,leftEdge;

function preload() {
  
  ball_img = loadImage("ball.png");
  
  paddle_img = loadImage("paddle.png");

}
function setup() {
  createCanvas(400, 400);

  paddle = createSprite(350,200,10,50);
  paddle.addImage("player", paddle_img);
  
  ball = createSprite(50,200,10,10);
  ball.addImage(ball_img);
  ball.velocityX = 9;
  
  bottomEdge = createSprite(0,400,800,2);
  topEdge = createSprite(0,0,800,2);
  leftEdge = createSprite(0,400,2,800);  

}

function draw() {
  background(205,153,0);
  
  ball.bounceOff(paddle,randomVelocity);
  ball.bounceOff(leftEdge);
  ball.bounceOff(topEdge);
  ball.bounceOff(bottomEdge);
  
  paddle.bounceOff(bottomEdge);
  paddle.bounceOff(topEdge);

  if(keyDown(UP_ARROW)) {
    paddle.y = paddle.y - 5;
  }
  
  if(keyDown(DOWN_ARROW)) {
    paddle.y = paddle.y + 5;
  }
    
  //randomVelocity();
  drawSprites();
  
}

function randomVelocity()

{
  ball.velocityY = random(-5,5);
}

