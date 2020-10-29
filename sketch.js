
var box;
var box1;
var box2;

var wall;
var bullet;


var speed, weight,thickness; 


function setup() {
  createCanvas(1600, 400);


	speed=random(55,90)
	weight=random(400,1500)
	thickness=random(22,83)

	box=createSprite(10,235,2800,80);
	box.shapeColor=color("purple");

	box1=createSprite(10,100,2800,30);
	box1.shapeColor=color("purple");

	box2=createSprite(10,380,2800,30);
	box2.shapeColor=color("purple");

	bullet=createSprite(50, 200, 50,20);   

	bullet.velocityX = speed;

	bullet.shapeColor=color(255);


  
  	wall=createSprite(1200,200,thickness, height/2)
	 wall.shapeColor=color(80,80,80)

}


function draw() {
  background(0);

  if(wall.x-bullet.x < (bullet.width+wall.width)/2)
  {
  	bullet.velocityX=0;
  	var deformation=0.5 * weight * speed* speed/22509;
	if(deformation>180)
	{
		bullet.shapeColor=color(255,0,0);
	}

	if(deformation<180 && deformation>100)
	{
		bullet.shapeColor=color(230,230,0);
	}

	if(deformation<100)
	{
		bullet.shapeColor=color(0,255,0);
	}
  }  

  
  
  drawSprites();
 
}


