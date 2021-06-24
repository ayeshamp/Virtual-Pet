var dog, happyDog, database, foodS, foodStock;
var dogImg, happyDogImg;

function preload(){
	dogImg = loadImage("images/dogImg.png");
  happyDogImg = loadImage("images/dogImg1.png");
}

function setup() {
	createCanvas(500, 500);

  database = firebase.database();
  foodStock = database.ref('Food');
  foodStock.on("value", readStock);
  foodStock.set(20);

  dog = createSprite(250,350,50,10);
  dog.addImage(dogImg);
  dog.scale = 0.3;
  
}


function draw() {  
background(46,139,87);

if(keyWentDown(UP_ARROW)){
  writeStock(foodS);
  dog.addImage(happyDogImg);
}

if(keyWentUp(UP_ARROW)){
  dog.addImage(dogImg);
}

drawSprites();

textSize(15);
fill(255);
text("NOTE: Press UP_ARROW Key To Feed Drago Milk!", 80,50);
text("Food Remaining: "+ foodS, 158, 80);
}

//function to read values from DB

function readStock(data){
  foodS = data.val();
}

//function to write values in DB

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



