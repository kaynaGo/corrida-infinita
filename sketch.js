var foquete,foqueteImg
var space,spaceImg
var meteoro,meteoroImg,meteoroGp
var estatos = "play"

function preload(){


spaceImg = loadImage("space.png") 


foqueteImg = loadImage("foquete.png")

meteoroImg = loadImage("meteoro.png");
}

function setup() {

 createCanvas(800,800)
 space = createSprite(400,700)
 space.addImage(spaceImg)
 foquete = createSprite(400,550,50,50)
 foquete.addImage(foqueteImg)
 foquete.scale = 0.1
 meteoroGp = new Group ()
 


}

function draw() {
 
  
  if(estatos = "play"){
    foquete.x = World.mouseX
   
   if(space.y > 800) {
    space.y = -100
    

   }
  }
  
  
  if(meteoroGp.isTouching(foquete)){
   estatos = "end"

  } 

  if(estatos == "end"){
   meteoroGp.setVelocityYEach(51)
  
   textSize(25)
   fill("red")
   text("GAME OVER",400,400)
   meteoroGp.setLifetimeEach(-1)
   foquete.destroy()

  }

  meteoro1()
  drawSprites();

}
   
   
function meteoro1(){
 
 if(frameCount % 50 == 0 ){
   meteoro = createSprite(400,-820)
   meteoro.x = Math.round(random(20,780));
   meteoro.addImage(meteoroImg)
   meteoro.velocityY = 10;
   meteoro.lifetime = 150;
   meteoro.scale = 0.1;
   meteoroGp.add(meteoro)
 }
}
