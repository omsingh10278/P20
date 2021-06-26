var car,wall;
var speed,weight;




function setup() {
  createCanvas(1600,400);

 car = createSprite(50, 200, 50, 50);
 wall = createSprite(1200,200,60,100);

 speed = random (55,80);
 weight = random(500,1500);

 car.velocityX = speed;
}

function draw() {
  background("aqua");  


  if(wall.x-car.x < (car.width+wall.width)/2){
    car.velocityX = 0;
    var deformation =0.5 * weight * speed *speed/22500;
    if(deformation>180) {
      car.shapeColor = "red";
    }
    if(deformation<180 && deformation>100){
    car.shapeColor = "orange";
    }
    if(deformation<100){
      car.shapeColor = "pink"
    }

  }



  drawSprites();
}