var ball
function preload() {

}

function setup() {
  createCanvas(400, 400);
  ball = createSprite(200, 200, 15, 15)
  ball.shapeColor = "red"
}

function draw() {
  background("black");
  if (keyDown("right")) {
    ball.x = ball.x + 5;
  }
  drawSprites();
}