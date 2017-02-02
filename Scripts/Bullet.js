function Bullet (mouseX, mouseY, charx, chary){
	this.radius = 5;
	this.Speed = 3;
	this.xSlope = mouseX - charx;
	this.ySlope = mouseY - chary;
	this.mag = Math.sqrt((this.xSlope*this.xSlope)+(this.ySlope*this.ySlope));
	this.xSpeed = (this.xSlope / this.mag) * this.Speed;
	this.ySpeed = (this.ySlope / this.mag) * this.Speed;
	this.posX =(charx + ((this.xSlope / this.mag) * 15));
	this.posY =(chary + ((this.ySlope / this.mag) * 15));
	this.Life = 0;
	this.hit = 0;


	this.Move = function () {
		this.posY = this.posY + this.ySpeed;
		this.posX = this.posX + this.xSpeed;
	};

	this.hits = function (Enemy){
		var d = Math.sqrt(((Enemy.posX-this.posX)*(Enemy.posX - this.posX))+((Enemy.posY - this.posY)*(Enemy.posY - this.posY)));
		if (d < this.radius + Enemy.radius){
			return true;
		} else {
			return false;
		}
	};

	this.DrawBullet = function (){
		context.beginPath();
		context.arc(this.posX, this.posY, this.radius, 0, 2*Math.PI);
		context.fillStyle = "#e74c3c";
		context.fill();
	};
};