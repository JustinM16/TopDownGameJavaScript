var screen1 = document.getElementById('screen1');
var context = screen1.getContext('2d');
var screen2 = document.getElementById('screen2');
var context2 = screen2.getContext('2d');


context.fillStyle = "#FFFFFF";
context.fillRect(0, 0, screen1.width, screen1.height);
var imgData;

var rect = screen1.getBoundingClientRect();
var mouse;

var ClipSize = 15;
var NumBulls = 0;




var leftDown, rightDown, upDown, downDown = 0;
var leftUp, rightUp, upUp, downUp = 0;

function Bullet() {
	this.Livetime = 0,
	this.draw = 0,
	this.lifeSpan = 30,
	this.ySlope = (mouse.y - Char.posY),
	this.xSlope = (mouse.x - Char.posX),
	this.Slope = this.ySlope/this.xSlope,
	this.yEnd = mouse.y,
	this.xEnd = mouse.x,
	this.radius = 2,
	this.Speed = 5,
	this.mag = Math.sqrt((this.xSlope*this.xSlope)+(this.ySlope*this.ySlope)),
	this.xSpeed = (this.xSlope/this.mag)*this.Speed,
	this.ySpeed = (this.ySlope/this.mag)*this.Speed,
	this.xOffSet = (Char.radius-10)*this.xSpeed,
	this.yOffSet = (Char.radius-10)*this.ySpeed,
	this.xStart = Char.posX + this.xOffSet,
	this.yStart = Char.posY + this.yOffSet;
}

function CharCreate (Id) {
	this.posX =(screen1.width/2),
	this.posY =(screen1.height/2),
	this.radius =15,
	this.Speed =10,
	this.shotFired =0;
	this.Id = Id;
};

function Enemy (Id, posX, posY) {
	this.posX = posX,
	this.posY = posY,
	this.xSlope = (Char.posX - this.posX),
	this.ySlope = (Char.posY - this.posY),
	this.mag = Math.sqrt((this.xSlope*this.xSlope)+(this.ySlope*this.ySlope)),
	this.Speed = 1,
	this.xSpeed = (this.xSlope/this.mag)*this.Speed,
	this.ySpeed = (this.ySlope/this.mag)*this.Speed,
	this.distFromBullet = 0,
	this.radius = 30,
	this.Id = Id;
};



var Char = new CharCreate(0);
var En = [2];
En[0] = new Enemy(0, 0, 0);
En[1] = new Enemy(1, 1000, 1000);
var shot = [ClipSize];


function CheckKeyDown(e) {
	switch(e.keyCode) {
		case 37:
		case 65:
        //left
       		leftDown = 1;
       		leftUp = 0;
    		break;
        case 38:
        case 87:
        //up
        	upDown = 1;
        	upUp = 0;
            break;
        case 39:
        case 68:
        //right
        	rightDown = 1;
        	rightUp = 0;
            break;
        case 40:
        case 83:
        //down
         	downDown = 1;
         	downUp = 0;
    	    break;
    	}
}

function CheckKeyUp(e) {
		switch(e.keyCode) {
		case 37:
		case 65:
        //left
       		leftUp = 1;
       		leftDown = 0;
    		break;
        case 38:
        case 87:
        //up
        	upUp = 1;
        	upDown = 0;
            break;
        case 39:
        case 68:
        //right
        	rightUp = 1;
        	rightDown = 0;
            break;
        case 40:
        case 83:
        //down
         	downUp = 1;
         	downDown = 0;
    	    break;
    	}
}

function GetFrame(){
	imgData = context.getImageData(0,0, screen1.width, screen1.height);
}

function ClearFrame(){
	context.putImageData(imgData, 0, 0);
}

function MoveChar(){
	if (leftDown){
		Char.posX = Char.posX - 1;
	}
	if (rightDown){
		Char.posX = Char.posX + 1;
	}
	if (upDown){
		Char.posY = Char.posY - 1;
	}
	if (downDown){
		Char.posY = Char.posY + 1;
	}
}

function DrawChar(){
	context.beginPath();
	if (Char.posX < Char.radius){
		Char.posX = Char.radius;
	}
	if (Char.posY < Char.radius){
		Char.posY = Char.radius;
	}
	if (Char.posX > screen1.width - Char.radius){
		Char.posX = screen1.width - Char.radius;
	}
	if (Char.posY > screen1.height - Char.radius){
		Char.posY = screen1.height - Char.radius;
	}
	context.arc(Char.posX, Char.posY, Char.radius, 0, 2*Math.PI);
	context.stroke();
}

function DrawEnemy(){
	for (i = 0; i < En.length; i++){
		context.beginPath();
		context.arc(En[i].posX, En[i].posY, En[i].radius, 0, 2*Math.PI);
		context.stroke();
	}
}

function EnemyMove(){
	for (i = 0; i < En.length; i++){
		En[i].posX = En[i].posX + En[i].xSpeed;
		En[i].posY = En[i].posY + En[i].ySpeed;
		En[i].xSlope = (Char.posX - En[i].posX);
		En[i].ySlope = (Char.posY - En[i].posY);
		En[i].mag = Math.sqrt((En[i].xSlope*En[i].xSlope)+(En[i].ySlope*En[i].ySlope));
		En[i].xSpeed = (En[i].xSlope/En[i].mag)*En[i].Speed;
		En[i].ySpeed =(En[i].ySlope/En[i].mag)*En[i].Speed;
	}

}

function GetMousePosition(e){
	mouse = {
		x: (e.clientX - rect.left),
		y: (e.clientY - rect.top)
		};
}

function Shoot(){
	Char.shotFired = 1;
	shot[NumBulls] = new Bullet();
	shot[NumBulls].draw = 1;
	NumBulls = NumBulls + 1;
	if (NumBulls == ClipSize){
		NumBulls = 0;
	}
}

function unShoot(){
	Char.shotFired = 0;
}

function drawBullets() {
	for (i = 0; i < shot.length; i++){
		if (shot[i].Livetime < shot[i].lifeSpan){
			context.beginPath();
			context.arc(shot[i].xStart, shot[i].yStart, shot[i].radius, 0, 2*Math.PI);
			context.stroke();
			shot[i].xStart = shot[i].xStart + shot[i].xSpeed;
			shot[i].yStart = shot[i].yStart + shot[i].ySpeed;
			shot[i].Livetime++;
		}
	}
} 



function GameLoop(){
	ClearFrame();
	MoveChar();
	DrawChar();
	DrawEnemy();
	EnemyMove();
	if(Char.shotFired) {
		drawBullets();
	}
	context2.drawImage(screen1, 0, 0);
}

document.addEventListener("keydown", CheckKeyDown);
document.addEventListener("keyup", CheckKeyUp);
document.addEventListener("mousemove", GetMousePosition);
document.addEventListener("mousedown", Shoot);


GetFrame();
setInterval(GameLoop, 14);
