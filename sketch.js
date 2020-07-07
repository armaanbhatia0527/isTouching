var fixedrect,movrect;

function setup() {
  createCanvas(800,400);
  fixedrect = createSprite( 300,200,50,50);
  fixedrect.shapeColor =  "green";
  movrect = createSprite(800,200,50,50);
  movrect.shapeColor = "green";
  movrect.velocityX = -10;
}

function draw() {
  background(0,0,0);  

//movrect.x = mouseX;
//movrect.y = mouseY;

if(movrect.x - fixedrect.x < movrect.width/2 + fixedrect.width/2
  && fixedrect.x - movrect.x < movrect.width/2 + fixedrect.width/2 
  &&movrect.y - fixedrect.y < movrect.height/2 + fixedrect.height/2
  &&fixedrect.y - movrect.y < movrect.height/2 + fixedrect.height/2){
  movrect.shapeColor = "red";
}

else{
  movrect.shapeColor = "green";
}

if(movrect.x - fixedrect.x < movrect.width/2 + fixedrect.width/2
  && fixedrect.x - movrect.x < movrect.width/2 + fixedrect.width/2){
    movrect.velocityX = -1 * movrect.velocityX;
  } 

  drawSprites();
}