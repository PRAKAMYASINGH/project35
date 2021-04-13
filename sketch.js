//The variables of my App...

var dog,happyDog,database,foodS,foodStock;
var fedTime,lastFed;

//loading the  images of my app here...

function preload(){
  dog=loadImage("Dog.png")
  happydogIMG2=loadImage("happydog.png")
  
}

// Creating the sprites and canvas in the setup...

function setup() {
  createCanvas(500, 500);
  
  Dog=createSprite(120,200,20,20);
  Dog.addImage(dog)
  foodStock=database.ref('Food');
  foodStock.on("value",readStock);
  
  foodObj=new Food (50,50,100,50);

  feed=createButton("Feed the Doggo");
  feed.position(700,95);
  feed.mousePressed(feedDog);

  addFood=createButton("Add food");
  addFood.positon(800,95);
  addFood.mousePressed(addFoods);


}

// The draw function for the controls...

function draw() {
  background(46,139,87)  

fill(255,255,254);
textSize(15);

if(lastFed>=12) {
  text(laatFed)
}



// the controls of the app...

fedTime=database.ref('FeedTime');
fedTime.on("value",function(data) {
lastFed=data.val();
});
fill(255,255,254);
textSize(15);

if(lastFed>12) {
  text("LastFed :" + lastFed%12 + "PM",350,30);
}

else if (lastFed==0) {
  text("Last Feed : 12 AM",350,30);
}

else {
  text("Last Feed :"+lastFed+"AM",350,30);
}
foodObj.display();


  drawSprites();
  
}

//Function to read the values from database...

function  readStock() {
  foodS=data.val();
}

//Function to write the values in  database...

function  writeStock(x) {
if(x<=0) {
  x=0
} 
else {
  x=x-1;
}
  database.ref('/').update({
  Food:x
})
}

function feedDog() {
  dog.addImage(happydogIMG2);

  foodObj.updateFoodStock(foodObj.getFoodStock()-1);
  database.ref('/').update({
    Food:foodObj.getFoodStock(),
    FeedTime:hour()
  })
}

function addFoods() {
  foodS++;
  database.ref('/').update({
    Food:foodS
  })
}



