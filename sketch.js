var dog, happyDog, database, foodS, foodStock;

function preload()
{
	dogImg = loadImage("images/dogImg.png");
  happydogImg = loadImage("images/dogImg1.png");
}

function setup() {
	createCanvas(500, 500);
  database = firebase.database();
  foodStock = database.ref('Food');
  foodStock.on("value", readStock);
  foodStock.set(20);

  dog = createSprite(250,350,10,60);
  dog.addImage(dogImg);
  dog.scale = 0.4;
  
}


function draw() {  
background(46,139,87);
  
  if (keyWentDown(UP_ARROW)){
    writeStock(foodS);
    dog.addImage(dogImg);
 }

 if (keyWentUp(UP_ARROW)){
  dog.addImage(happydogImg);
 }
  drawSprites();

    textSize(20);
    fill(255);
    text("Note: Press UP_ARROW Key To Feed Drago Milk!", 30,50);
    text("Food Remaining: "+foodS, 150,170);
   
}

function readStock(data){
  foodS = data.val(); 
}

function writeStock(x){

  if(x<=0){
    x = 0;
  }
  else{
    x = x-1;
  }
  database.ref('/').update({
    Food:x
  })
}



 
 





