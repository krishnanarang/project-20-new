var car,wall;
 var speed,weight;
  var car2,car3;
  
  function setup() {
  createCanvas(1500,400);
  speed = random (55,90)
  weight = random (400,1500)
  car = createSprite (50,200,50,50)
  wall = createSprite (1300,200,50,height/2)
  car.velocityX=speed;
  wall.shapeColor=color(80,80,80)
  car2 = createSprite (50,100,70,70)
  car2.velocityX=speed;
  car3 = createSprite (50,300,80,80)
  car3.velocityX=speed;
}
function draw() {
  background(0);
  if(wall.x-car.x<(car.width+wall.width)/2){
    
  var deformation
  deformation=0.5*weight*speed*speed/22509
 car.velocityX=0
 if(deformation>180){
   car.shapeColor=color(255,0,0)
} 
if(deformation>100){
  car.shapeColor=color(230,230,0)
}
if(deformation<100){
  car.shapeColor=color(0,255,0)
}
  }
  if(wall.x-car2.x<(car2.width+wall.width)/2){
    
    var deformation
    deformation=0.5*weight*speed*speed/22509
   car2.velocityX=0
   if(deformation>180){
     car2.shapeColor=color(255,0,0)
  } 
  if(deformation>100){
    car2.shapeColor=color(230,230,0)
  }
  if(deformation<100){
    car2.shapeColor=color(0,255,0)
  }
    }
    if(wall.x-car3.x<(car3.width+wall.width)/2){
    var deformation
      deformation=0.5*weight*speed*speed/22509
     car3.velocityX=0
     if(deformation>180){
       car3.shapeColor=color(255,0,0)
    } 
    if(deformation>100){
      car3.shapeColor=color(230,230,0)
    }
    if(deformation<100){
      car3.shapeColor=color(0,255,0)
    }
      }
     drawSprites();

}