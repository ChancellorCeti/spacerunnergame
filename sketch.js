
var PLAY=1;
var END=0;
var score=0;
var astronautImg, asteroidImg;
var astronaut,asteroid,background;
var asteroidsGroup;
var gamestate = PLAY;

function preload(){
 astronautImg=loadImage("pngwing.com.png");
 asteroidImg=loadImage("asteroid.png");
 spaceImg=loadImage("spaceback.png");
 asteroidImg=loadImage("asteroid.png");
}

function setup() {
createCanvas(720,405);
background=createSprite(360,202,720,405);
background.addImage("bg",spaceImg);
background.scale=1.2;

background.velocityX=-3;
astronaut=createSprite(100,200);
astronaut.addImage("spaceImg",astronautImg);
astronaut.scale=.4;

asteroidsGroup=createGroup();
}

function draw() {
    textSize(40);
    console.log("score: "+score);
    if(gamestate === PLAY){
    background.velocityX=-4;
    score = score + Math.round(getFrameRate()/60);
    
    if(background.x<0){
        background.x=background.width/2
    }
    if(keyDown("UP_ARROW")){
        astronaut.y=astronaut.y-3;
    }
    if(keyDown("DOWN_ARROW")){
        astronaut.y=astronaut.y+3;
    }
    asteroidSpawn();
    if(astronaut.isTouching(asteroidsGroup)){
        gamestate=END;
    }
    
    }
    if(gamestate === END){
        asteroidsGroup.destroyEach();
        background.visible=false;
        text("GAME OVER",200,200);
    }


    
    
    drawSprites();
}

function asteroidSpawn(){
    if(frameCount%90==0){
    asteroid = createSprite(720,Math.round(random(100,350)))
    asteroid.lifetime=150;
    asteroid.addImage("ast",asteroidImg);
    asteroid.velocityX=-4;
    asteroid.scale=.2;
    asteroidsGroup.add(asteroid);
    }
}

