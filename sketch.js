var garden;
var gardenImg;
function preload() {
   //load the images here
gardenImg =loadImage("Garden.png");
}

function setup(){
    createCanvas(1000,800);
    //create tom and jerry sprites here
garden = createSprite(500,400,10,10);
garden.addImage(gardenImg);
}

function draw() {

    background(255);
    //Write condition here to evalute if tom and jerry collide

    drawSprites();
}


function keyPressed(){

  //For moving and changing animation write code here


}
