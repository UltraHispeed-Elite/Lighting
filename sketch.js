var player, playerImg;
var a = [0,0];
var b = [0,0];
var c = [0,0];
var d = 0;

function preload() {
  playerImg = loadImage("player.png");
}

function setup() {
  createCanvas(400,400);
  
  player = createSprite(200,200,50,50);
  player.addImage(playerImg);
}

function draw() {
  background("black");
  
  tint(255,255,255,d);
  
   if(player.x < 200) {
     b[0] = 0;
     a[0] = 2.55 * (b[0]+(Math.abs(player.x)/2))
   }else if(player.x > 200) {
     b[0] = 100;
     a[0] = 2.55 * ((b[0]+100)-(Math.abs(player.x)/2))
   }else {
     b[0] = 100;
     a[0] = 2.55*b[0];
   }
   c[0] = Math.abs(a[0]);
  
  if(player.y < 200) {
    b[1] = 0;
    a[1] = 2.55 * (b[1]+(Math.abs(player.y)/2))
  }else if(player.y > 200) {
    b[1] = 100;
    a[1] = 2.55 * ((b[1]+100)-(Math.abs(player.y)/2))
  }else {
    b[1] = 100;
    a[1] = 2.55*b[1];
  }
  c[1] = Math.abs(a[1]);
  
  
  d = (c[0]+c[1])/2;
  

  
  playerMovement()
  
  drawSprites();
}

function playerMovement() {
  if(keyDown("w")) {
    player.y -= 5;
  }
  
  if(keyDown("a")) {
    player.x -= 5;
  }
  
  if(keyDown("s")) {
    player.y += 5;
  }
  
  if(keyDown("d")) {
    player.x += 5;
  }
}