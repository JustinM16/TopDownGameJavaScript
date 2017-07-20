document.getElementById('FreeCoin');
document.getElementById('CoinFlips');
document.getElementById('Deposit');
document.getElementById('Withdraw');
document.getElementById('Login');

var Pages = 0;

function FreeClick(){ 
	if(Pages != 1){  
		document.getElementById('CoinFlips').style.color = "white";
		document.getElementById('CoinFlips').style.borderBottomWidth = "0px";    
		document.getElementById('Withdraw').style.color = "white";  
		document.getElementById('Withdraw').style.borderBottomWidth = "0px";    
		document.getElementById('Deposit').style.color = "white";  
		document.getElementById('Deposit').style.borderBottomWidth = "0px";  
		Pages = 1; 
	}
	document.getElementById('FreeCoinPage').style.display = 'block';           // Show
	document.getElementById('FreeCoinPage').style.left = "0px";
	document.getElementById('FreeCoin').style.color = "#e67e22"; 
	document.getElementById('FreeCoin').style.borderBottomWidth = "2px";
}


function FlipClick(){ 
	if(Pages != 2){  
		document.getElementById('FreeCoinPage').style.left = "5000px";
		document.getElementById('FreeCoinPage').style.display = 'none';           // Hide
		document.getElementById('FreeCoin').style.color = "white";  
		document.getElementById('FreeCoin').style.borderBottomWidth = "0px";    
		document.getElementById('Withdraw').style.color = "white";  
		document.getElementById('Withdraw').style.borderBottomWidth = "0px";    
		document.getElementById('Deposit').style.color = "white";  
		document.getElementById('Deposit').style.borderBottomWidth = "0px";  
		Pages = 2; 
	} 
	document.getElementById('CoinFlips').style.color = "#e67e22"; 
	document.getElementById('CoinFlips').style.borderBottomWidth = "2px";
}


function DepClick(){ 
	if(Pages != 3){  
		document.getElementById('FreeCoinPage').style.left = "3000px";
		document.getElementById('FreeCoinPage').style.display = 'none';           // Hide
		document.getElementById('CoinFlips').style.color = "white";  
		document.getElementById('CoinFlips').style.borderBottomWidth = "0px";  
		document.getElementById('FreeCoin').style.color = "white";  
		document.getElementById('FreeCoin').style.borderBottomWidth = "0px";    
		document.getElementById('Withdraw').style.color = "white";  
		document.getElementById('Withdraw').style.borderBottomWidth = "0px";    
		Pages = 3; 
	}
	document.getElementById('Deposit').style.color = "#e67e22"; 
	document.getElementById('Deposit').style.borderBottomWidth = "2px";
}


function WithClick(){ 
	if(Pages != 4){  
		document.getElementById('FreeCoinPage').style.left = "3000px";
		document.getElementById('FreeCoinPage').style.display = 'none';           // Hide
		document.getElementById('CoinFlips').style.color = "white";  
		document.getElementById('CoinFlips').style.borderBottomWidth = "0px";  
		document.getElementById('FreeCoin').style.color = "white";  
		document.getElementById('FreeCoin').style.borderBottomWidth = "0px";    
		document.getElementById('Deposit').style.color = "white";  
		document.getElementById('Deposit').style.borderBottomWidth = "0px";   
		Pages = 4; 
	} 
	document.getElementById('Withdraw').style.color = "#e67e22"; 
	document.getElementById('Withdraw').style.borderBottomWidth = "2px";
}


//__________________________________________________________________________________________Light
function LightUpF(){
	document.getElementById('FreeCoin').style.color = "#e67e22"; 
	document.getElementById('FreeCoin').style.borderBottomWidth = "2px"; 
}

function LightUpC(){
	document.getElementById('CoinFlips').style.color = "#e67e22";
	document.getElementById('CoinFlips').style.borderBottomWidth = "2px";
}

function LightUpD(){
	document.getElementById('Deposit').style.color = "#e67e22"; 
	document.getElementById('Deposit').style.borderBottomWidth = "2px"; 
}

function LightUpW(){
	document.getElementById('Withdraw').style.color = "#e67e22";
	document.getElementById('Withdraw').style.borderBottomWidth = "2px";
}

//__________________________________________________________________________________________UnLight


function UnLightF(){ 
	if (Pages != 1){  
		document.getElementById('FreeCoin').style.color = "white";  
		document.getElementById('FreeCoin').style.borderBottomWidth = "0px"; 
	}
}


function UnLightC(){ 
	if (Pages != 2){  
		document.getElementById('CoinFlips').style.color = "white";  
		document.getElementById('CoinFlips').style.borderBottomWidth = "0px";  
	}
}

function UnLightD(){ 
	if (Pages != 3){  
		document.getElementById('Deposit').style.color = "white";  
		document.getElementById('Deposit').style.borderBottomWidth = "0px";  
	}
}

function UnLightW(){ 
	if (Pages != 4){  
		document.getElementById('Withdraw').style.color = "white";  
		document.getElementById('Withdraw').style.borderBottomWidth = "0px";  
	}
}