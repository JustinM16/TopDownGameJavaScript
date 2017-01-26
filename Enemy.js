function EnemyCreate(charx, chary, startx, starty, speed, color){
	this.posX =(startx);
	this.posY =(starty);
	this.radius = 20;
	this.Speed = speed;
	this.Life = 1;
	//this.Color = Math.floor(Math.random()*0xFFFFFF).toString(16);
	this.Color = color;

	this.xSlope = charx - this.posX;
	this.ySlope = chary - this.posY;
	this.mag = Math.sqrt((this.xSlope*this.xSlope)+(this.ySlope*this.ySlope));
	this.xSpeed = (this.xSlope / this.mag) * this.Speed;
	this.ySpeed = (this.ySlope / this.mag) * this.Speed;



	this.Move = function () {
		this.posY = this.posY + this.ySpeed;
		this.posX = this.posX + this.xSpeed;
	};

	this.UpdateDir = function (charX, charY) {
		this.xSlope = charX - this.posX;
		this.ySlope = charY - this.posY;
		this.mag = Math.sqrt((this.xSlope*this.xSlope)+(this.ySlope*this.ySlope));
		this.xSpeed = (this.xSlope / this.mag) * this.Speed;
		this.ySpeed = (this.ySlope / this.mag) * this.Speed;
	}



	this.DrawSelf = function (){
		context.beginPath();
		context.arc(this.posX, this.posY, this.radius, 0, 2*Math.PI);
		//context.fillStyle = "#" + this.Color;
		context.fillStyle = this.Color;
		context.fill();
	};
};
