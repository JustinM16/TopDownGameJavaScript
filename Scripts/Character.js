function CharCreate (Id, screen1width, screen1height){
	this.posX =(screen1width/2);
	this.posY =(screen1height/2);
	this.radius =15;
	this.Speed = 3;
	this.shotFired =0;
	this.Id = Id;
	this.Level = 1;
	this.exp = 0;
	this.Life = 1;

	this.MoveLeft = function (){
		this.posX -= this.Speed;
	};
	this.MoveRight = function (){
		this.posX += this.Speed;
	};
	this.MoveUp = function (){
		this.posY += this.Speed;
	};
	this.MoveDown = function (){
		this.posY -= this.Speed;
	};

	this.DrawChar = function (){
		context.beginPath();
		if (this.posX < this.radius){
			this.posX = this.radius;
		}
		if (this.posY < this.radius){
			this.posY = this.radius;
		}
		if (this.posX > screen1width - this.radius){
			this.posX = screen1width - this.radius;
		}
		if (this.posY > screen1height - this.radius){
			this.posY = screen1height - this.radius;
		}

		context.arc(this.posX, this.posY, this.radius, 0, 2*Math.PI);
		context.fillStyle = "#e74c3c";
		context.fill();
	};

	this.checkHit = function (Enemy) {
		var d = Math.sqrt(((Enemy.posX-this.posX)*(Enemy.posX - this.posX))+((Enemy.posY - this.posY)*(Enemy.posY - this.posY)));
		if (d < this.radius + Enemy.radius){
			return true;
		} else {
			return false;
		}
	};
};
