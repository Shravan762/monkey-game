
var monkey , monkey_running
var banana ,bananaImage, obstacle, obstacleImage
var FoodGroup, obstacleGroup
var survivaltime=0

function preload(){
  
  
  monkey_running =            loadAnimation("sprite_0.png","sprite_1.png","sprite_2.png","sprite_3.png","sprite_4.png","sprite_5.png","sprite_6.png","sprite_7.png","sprite_8.png")
  
  bananaImage = loadImage("banana.png");
  obstaceImage = loadImage("obstacle.png");
 
}



function setup() {
  createCanvas(500,500)
  
  monkey=createSprite(150,430,20,20)
  monkey.addAnimation("running",monkey_running)
  monkey.scale=0.1 
  
  ground=createSprite(250,450,500,5)
  ground.velocityX=-7
   
  foodGroup=new Group()
  
}


function draw() {
background("white")
   ground.x=ground.width/2  
  console.log(monkey.y)
  
 if(keyDown("space")&& monkey.y >= 200) {
   monkey.velocityY = -12;
   
    }
    
  monkey.velocityY=monkey.velocityY +0.9
  monkey.collide(ground)
  
  food();
  obstacles();
  
  
  
  drawSprites();
    stroke=("black")
 textsize=(20)
 fill("black")
  survivaltime=Math.ceil(frameCount/frameRate())
text("survival time"+ survivaltime, 100,50);
  
} 

function food(){
  if(World.frameCount%80===0){
  eat=createSprite(400,280,20,20)
    eat.velocityX=-5
    eat.addImage("eating",bananaImage)
   eat.scale=0.1
   eat.y =Math.round(random(230,300))
    eat.setlifeTime=100
    foodGroup.add(eat)
}
}
function obstacles(){
 if (World.frameCount%300===0){
    obstacle=createSprite(480,410,20,20)
    obstacle.addImage("moving",obstaceImage);
   obstacle.scale=0.2
    obstacle.velocityX=-6
 
}
}


