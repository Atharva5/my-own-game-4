var police,policeimg, thief, thiefimg;

var rocks,rockimg,rocksGroup, ground,bridge;

var powerUps,powerUpsGroup,powerimg, lifeimg, life1,life2,life3,life;

var gameState;
function preload(){
policeimg=loadAnimation("P1.png","P2.png");
thiefimg=loadAnimation("t1.png","t2.png");
lifeimg=loadImage("images.png");
rockimg=loadImage("rock.png");
powerimg=loadImage("Energy.png");
}
function setup(){
createCanvas(1200,600);

gameState="play";

life=3;


bridge=createSprite(600,600,2400,130);

 

police=createSprite(200,450,50,100);
police.addAnimation("police",policeimg);
police.debug=false;
police.setCollider("rectangle",0,0,200,170);

thief=createSprite(1000,450,100,100);
thief.addAnimation("thief",thiefimg);
thief.scale=0.7;

life1=createSprite(50,50,20,20);
life1.addImage("life1",lifeimg);
life1.scale=0.2;

life2=createSprite(100,50,20,20);
life2.addImage("li(fe2",lifeimg);
life2.scale=0.2;

life3=createSprite(150,50,20,20);
life3.addImage("life3",lifeimg);
life3.scale=0.2;


rocksGroup=new Group();
powerUpsGroup=new Group();

}
function draw(){
background(255);

if(gameState==="play"){
if(keyDown("space") && police.y >= 359){
    police.velocityY = -12 ;
}
    police.velocityY = police.velocityY + 0.8;
spawnRocks();
powerUp();

if(powerUpsGroup.isTouching(police)){
    police.x=police.x+100;
    powerUpsGroup.destroyEach();
}
if(rocksGroup.isTouching(police)){
    life=life-1;
    console.log(life);
    
}

if(life===2){
    life3.visible=false;
}
if(life===1){
    life2.visible=false;
}
if(life===0){
    life1.visible=false;
    gameState="end";
}
}

else if(gameState==="end"){
    rocksGroup.destroyEach();
    powerUpsGroup.destroyEach();
    police.destroy();
    thief.destroy();
    textSize(30);
    fill("red");
    text("GAME OVER",600,300);
}



police.collide(bridge);

drawSprites();
}

function spawnRocks(){
    if(frameCount % 150 === 0){
        rocks=createSprite(1200,530,50,50);
        rocks.velocityX=-10;
        rocks.addImage("rocksimage",rockimg);
        rocks.scale=0.6;
        rocks.lifetime=120;
        rocksGroup.add(rocks);
        }
}

function powerUp(){
    if(frameCount % 521 === 0){
powerUps=createSprite(1200,250,50,50);
powerUps.velocityX=-7;
powerUps.y=random(150,250)
powerUps.scale=0.1;
powerUps.lifetime=200;
powerUps.addImage("energy",powerimg);
powerUpsGroup.add(powerUps);
}
}
