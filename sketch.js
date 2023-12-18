var player, playerImg;
var c;

function preload() {
  playerImg = loadImage("player.png");
}

function setup() {
  createCanvas(400,400);
  
  player = createSprite(200,200,50,50);
  player.addImage("player", playerImg);
  tint(255, 0, 0, 100);
  
  createLight(0,400,0,400);
}

function draw() {
  background("black");
  
  playerMovement();
  playerLight();
  
  drawSprites();
}

function createLight(x1, x2, y1, y2) {
  let xd = x2-x1;
  let yd = y2-y1;
  let cx = xd/2;
  let cy = yd/2;
  c = (cx+cy)/2;
}

function playerLight() {
   let d,e,g,h,vx,tv;
  if(player.x < c) {
    d = c-player.x;
    e = (d/c)*100
  }else if(player.x > c) {
    d = player.x-c;
    e = (d/c)*100
  }else {
    d = 0;
    e = 0;
  }

  if(player.y < c) {
    g = c-player.y;
    h = (g/c)*100
  }else if(player.y > c) {
    g = player.y-c;
    h = (g/c)*100
  }else {
    g = 0;
    h = 0;
  }

  vx = 100 - e;
  vy = 100 - h;
  ptv = (vx+vy)/2;
  tv = 2.55*ptv;
  tint(255,255,255,tv);
  console.log(tv);
}

function playerMovement() {
  if(keyDown('w')) {
    player.y -= 5;
  }

  if(keyDown("a")) {
    player.x -= 5;
  }

  if(keyDown('s')) {
    player.y += 5;
  }
  
  if(keyDown("d")) {
    player.x += 5;
  }
}