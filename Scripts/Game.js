var screen1 = document.getElementById('screen1');
var context = screen1.getContext('2d');
var screen2 = document.getElementById('screen2');
var context2 = screen2.getContext('2d');
context.fillStyle = "#bdc3c7";
context.fillRect(0, 0, screen1.width, screen1.height);
var imgData;
var music = new Audio('Sounds/Song.wav');
var shot = new Audio('Sounds/Shot.wav');
var EOG = new Audio('Sounds/EOG.mp3');
shot.volume = .05;
music.volume = .0;
EOG.volume = .2;




var rect = screen1.getBoundingClientRect();
var mouse;

var leftDown, rightDown, upDown, downDown = 0;
var leftUp, rightUp, upUp, downUp = 0;

var Bullets = [];

var kills = 0;

var Char = new CharCreate(0, screen1.width, screen1.height);
var Enemys = [];
var powers = [];
var Level = 1;
var speed = 1;
var color = "#3498db";
var jk = -50;

var RandomSayings = [];
RandomSayings[0] = "Nobody likes you!";
RandomSayings[1] = "The bigger, badder, better circle got you!";
RandomSayings[2] = "It was never ment to be...";
RandomSayings[3] = "YES, FINALLY ITS OVER!";
RandomSayings[4] = "Was this worth time in your life?";
RandomSayings[5] = "One day somthing nice will be said";
RandomSayings[6] = "YOURE THE BEST";
RandomSayings[7] = "BAAAAAAAAAAAAD";
RandomSayings[8] = "Luke I am your dog...";
RandomSayings[9] = "I lied about what I said...";



function InitGame () {
	leftDown, rightDown, upDown, downDown = 0;
	leftUp, rightUp, upUp, downUp = 0;
	music.loop = true;
	music.play();
	Bullets = [];

	kills = 0;
	Level = 1;
	jk = -50;

	Char = new CharCreate(0, screen1.width, screen1.height);
	Enemys = [];
	document.addEventListener("keydown", CheckKeyDown);
	document.addEventListener("keyup", CheckKeyUp);
	document.addEventListener("mousedown", Shoot);

}


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

function DrawKills () {
	context.font = "30px Arial";
	context.fillStyle = "#2c3e50";
	context.fillText("Kills: " + kills, 10, 50);
}

function DrawLevels () {
	context.font = "30px Arial";
	context.fillStyle = "#2c3e50";
	context.fillText("Level: " + Level, screen1.width - 125, 50);
}

function MoveChar(){
	if (leftDown){
		Char.MoveLeft();
	}
	if (rightDown){
		Char.MoveRight();
	}
	if (upDown){
		Char.MoveDown();
	}
	if (downDown){
		Char.MoveUp();
	}
}

function DrawChar(){
	Char.DrawChar();
}


function Shoot(){
	Bullets.push(new Bullet(mouse.x, mouse.y, Char.posX, Char.posY));
	if (Char.Life){
		shot.play();
		shot.currentTime = 0;
	}
}

function DrawBullets(){
	for (i = Bullets.length - 1; i >= 0; i--){
		Bullets[i].Move();
		Bullets[i].DrawBullet();
		Bullets[i].Life = Bullets[i].Life + 1;
		for (k = Enemys.length - 1; k >= 0; k--){
			if (Bullets[i].hits(Enemys[k])){
				Enemys[k].Life = 0;
				Bullets[i].hit = 1;
				break;
			}
		}

		if (Bullets[i].Life > 70 || Bullets[i].hit == 1){
			Bullets.splice(0, 1);
		}

	}
}

function DrawEnemys(){
	for (j = Enemys.length - 1; j >= 0; j--){
		Enemys[j].Move();
		Enemys[j].DrawSelf();
		Enemys[j].UpdateDir(Char.posX, Char.posY);
		if (Char.checkHit(Enemys[j])){
			Char.Life = 0;
		}
		if (Enemys[j].Life != 1){
			kills = kills + 1;
			
			Enemys.splice(j, 1);

		}
	}
}

function GetMousePosition(e){
	mouse = {
		x: (e.clientX - rect.left),
		y: (e.clientY - rect.top)
		};
}


function SpawnEnemy() {
	if (kills == 30){
		speed = 2;
		Level = 2;
		color = "#e67e22";
	}else if (kills == 60){
		speed = 2.5;
		Level = 3;
		color = "#2ecc71";
	}else if (kills == 100){
		speed = 3;
		Level = 4;
		color = "#9b59b6";
	}
	Enemys.push(new EnemyCreate(Char.posX, Char.posY, (Math.random()*(820*4)-(820*2)), (Math.random()*(640*4)-(640*2)), speed, color));
	
}

function GameOver() {
	context.font = "50px Arial";
	context.fillStyle = "#2c3e50";
	context.fillText("GAME OVER", screen1.width/2 - 150, screen1.height/2);
	context.fillStyle = "#2c3e50";
	context.font = "20px Arial";
	context.fillText("Refresh To Play Again", screen1.width/2 - 85, screen1.height/2 + 20);
	SayMeanThings();

	context2.drawImage(screen1, 0, 0)

	clearInterval(IntervalID);
	music.pause();
	EOG.currentTime = 1;
	EOG.play();
	

}

function SayMeanThings() {
	var SayNum = (Math.ceil(Math.random() * RandomSayings.length)) - 1;

	if (SayNum == 0) {
		context.font = "20px Arial";
		context.fillText(RandomSayings[SayNum], screen1.width/2 - 75, screen1.height - 40);
	}else if (SayNum == 1) {
		context.font = "20px Arial";
		context.fillText(RandomSayings[SayNum], screen1.width/2 - 160, screen1.height - 40);
	}else if (SayNum == 2) {
		context.font = "20px Arial";
		context.fillText(RandomSayings[SayNum], screen1.width/2 - 90, screen1.height - 40);
	}else if (SayNum == 3) {
		context.font = "20px Arial";
		context.fillText(RandomSayings[SayNum], screen1.width/2 - 100, screen1.height - 40);
	}else if (SayNum == 4) {
		context.font = "20px Arial";
		context.fillText(RandomSayings[SayNum], screen1.width/2 - 130, screen1.height - 40);
	}else if (SayNum == 5) {
		context.font = "20px Arial";
		context.fillText(RandomSayings[SayNum], screen1.width/2 - 140, screen1.height - 40);
	}else if (SayNum == 6) {
		context.font = "20px Arial";
		context.fillText(RandomSayings[SayNum], screen1.width/2 - 75, screen1.height - 40);
	}else if (SayNum == 7) {
		context.font = "20px Arial";
		context.fillText(RandomSayings[SayNum], screen1.width/2 - 75, screen1.height - 40);
	}else if (SayNum == 8) {
		context.font = "20px Arial";
		context.fillText(RandomSayings[SayNum], screen1.width/2 - 75, screen1.height - 40);
	}else if (SayNum == 9) {
		context.font = "20px Arial";
		context.fillText(RandomSayings[SayNum], screen1.width/2 - 75, screen1.height - 35);
	}
} 


function Resize(){
	rect = screen1.getBoundingClientRect();
	console.log("resized");
}






//THE MAIN AREA OF THE GAME________________________________________
function GameLoop(){
	ClearFrame();
	DrawKills();
	DrawLevels();
	MoveChar();
	DrawChar();
	DrawBullets();
	DrawEnemys();
	

	if (!Char.Life){
		GameOver();
	}
	if (Enemys.length < 10){
		SpawnEnemy();
	}
	context2.drawImage(screen1, 0, 0);
}


document.addEventListener("mousemove", GetMousePosition);
window.addEventListener("resize", Resize);




InitGame();
GetFrame();
var IntervalID = setInterval(GameLoop, 14);


