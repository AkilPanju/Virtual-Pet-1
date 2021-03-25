var dog, dogImg, happyDog, database, foodS, foodStock;
function preload()
{
  dogImg = loadImage("Dog.png");
  happyDog = loadImage("happydog.png");
}

function setup() {
  database = firebase.database();
  createCanvas(500, 500);
  dog = createSprite(200,200,50,50); 
  dog.addImage(dogImg);
  dog.scale = 0.6;
  foodStock = database.ref("Food");
  foodStock.on("value",readStock);

  
}


function draw() 
{  
  background(46, 139, 87)
  if(keyWentDown(UP_ARROW)) 
  {
    writeStock(foodS);
    dog.addImage(happyDog);
    dog.scale = 0.6;
  }
  
  
  
  
  
  drawSprites();
  //add styles here

}

function readStock(data) {
  foodS = data.val();

}

function writeStock(x)
{
  if(x<=0){
    x=0;
  }else{
    x=x-1;
  }
  
  
  database.ref('/').update({
    'Food':x
  })
}