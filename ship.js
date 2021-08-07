var ship ,ship1;
var sea ,sea1;
function preloaod(){
ship1=loadAnimation("ship1.png","ship2.png","ship3.png","ship4.png")
sea1=loadAnimation("sea.png")
}

function steup(){
  createCanvas(600,500);

  //creating the  sea
  sea = createSprite(600,500);
sea.addAnimation("running",sea1)
sea.scale=0.5
sea.velocityX=-1;

//creating ship1
ship = createSprite(50,200,20,50)
ship.addAnimation("running", ship1);
edges = createEdgesSprite();

//adding scale and position to ship
ship.scale=0.25;
ship.x = 90;
ship.y = 300;
}

function draw()
{
  background("blue");
  if(keyDown("enter"))
  {
    ship.velocityX = 5;
  }

if(keyDown("left"))
{
  ship.velocityX = -5;
}

if(keyDown("space"))
{
  ship.velocityX = 0;
}

if(sea.x < 0)
{
sea.x = sea .width/2;
}
//stop ship from falling down
ship.coddide(edges[3])
drawSprites();
}















  


















