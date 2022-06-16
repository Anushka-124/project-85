canvas = document.getElementById('myCanvas');
ctx = canvas.getContext("2d");

car_height = 150;
car_width = 100;
car_x = 40;
car_y= 400;

background_image = "parkingLot.jpg";
greencar_image = "car2.png";

//Set initial position for a car image.

function add() {
	background_imgTag = new Image(); //defining a variable with a new image
	background_imgTag.onload = uploadBackground; // setting a function, onloading this variable
	background_imgTag.src = background_image;   // load image

	car_imgTag = new Image(); //defining a variable with a new image
	car_imgTag.onload = uploadgreencar; // setting a function, onloading this variable
	car_imgTag.src = greencar_image;   // load image
}

function uploadBackground() {
	ctx.drawImage(background_imgTag, 0, 0, canvas.width, canvas.height);

}

function uploadgreencar() {
	ctx.drawImage(car_imgTag, car_x, car_y, car_width, car_height);

	
}


window.addEventListener("keydown", my_keydown);

function my_keydown(e)
{
	keyPressed = e.keyCode;
	console.log(keyPressed);
		if(keyPressed == '38')
		{
			up();
			console.log("up");
		}
	
		if(keyPressed == '40')
		{
			down();
			console.log("down");
		}
		
		if(keyPressed == '37')
		{
			left();
			console.log("left");
		}
	
		if(keyPressed == '39')
		{
			right();
			console.log("right");
		}
		
		
}

function up()
{
	if(car_y >=0)
	{
		car_y = car_y - 10;;
		 uploadBackground();
		 uploadgreencar();
	}
}

function down()
{
	if(car_y >=0)
	{
		car_y = car_y + 10;;
		 uploadBackground();
		 uploadgreencar();
	}
}

function left()
{
	if(car_y >=0)
	{
		car_x = car_x - 10;;
		 uploadBackground();
		 uploadgreencar();
	}
}

function right()
{
	if(car_y >=0)
	{
		car_x = car_x + 10;;
		 uploadBackground();
		 uploadgreencar();
	}
}
