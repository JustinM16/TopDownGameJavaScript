# TopDownGameJavaScript
# LINK TO GAME: https://justinm16.github.io/TopDownGameJavaScript/

- All in game sound effects are not owned by me and are purely used as a demonstration of
  how a game like this would sound.

---------------------------------------------------------------------------------------------
- Gun Shot sound: https://www.freesoundeffects.com/free-sounds/gun-10081/
- Background Music: (8 Bit Detective) https://www.dl-sounds.com/royalty-free/8-bit-detective/
- Game Over Sound Effect: https://www.youtube.com/watch?v=vJaAy3jmEx8



PageManager.js________________________________________

document.getElementById('FreeCoin');document.getElementById('CoinFlips');document.getElementById('Deposit');document.getElementById('Withdraw');document.getElementById('Login');
var Pages = 0;
function FreeClick(){ if(Pages != 1){  document.getElementById('CoinFlips').style.color = "white";  document.getElementById('CoinFlips').style.borderBottomWidth = "0px";    document.getElementById('Withdraw').style.color = "white";  document.getElementById('Withdraw').style.borderBottomWidth = "0px";    document.getElementById('Deposit').style.color = "white";  document.getElementById('Deposit').style.borderBottomWidth = "0px";  Pages = 1; }
 document.getElementById('FreeCoin').style.color = "#e67e22"; document.getElementById('FreeCoin').style.borderBottomWidth = "2px";}
function FlipClick(){ if(Pages != 2){  document.getElementById('FreeCoin').style.color = "white";  document.getElementById('FreeCoin').style.borderBottomWidth = "0px";    document.getElementById('Withdraw').style.color = "white";  document.getElementById('Withdraw').style.borderBottomWidth = "0px";    document.getElementById('Deposit').style.color = "white";  document.getElementById('Deposit').style.borderBottomWidth = "0px";  Pages = 2; } document.getElementById('CoinFlips').style.color = "#e67e22"; document.getElementById('CoinFlips').style.borderBottomWidth = "2px";}
function DepClick(){ if(Pages != 3){  document.getElementById('CoinFlips').style.color = "white";  document.getElementById('CoinFlips').style.borderBottomWidth = "0px";  document.getElementById('FreeCoin').style.color = "white";  document.getElementById('FreeCoin').style.borderBottomWidth = "0px";    document.getElementById('Withdraw').style.color = "white";  document.getElementById('Withdraw').style.borderBottomWidth = "0px";    Pages = 3; }
 document.getElementById('Deposit').style.color = "#e67e22"; document.getElementById('Deposit').style.borderBottomWidth = "2px";}
function WithClick(){ if(Pages != 4){  document.getElementById('CoinFlips').style.color = "white";  document.getElementById('CoinFlips').style.borderBottomWidth = "0px";  document.getElementById('FreeCoin').style.color = "white";  document.getElementById('FreeCoin').style.borderBottomWidth = "0px";    document.getElementById('Deposit').style.color = "white";  document.getElementById('Deposit').style.borderBottomWidth = "0px";   Pages = 4; } document.getElementById('Withdraw').style.color = "#e67e22"; document.getElementById('Withdraw').style.borderBottomWidth = "2px";}

//__________________________________________________________________________________________Light
function LightUpF(){
 document.getElementById('FreeCoin').style.color = "#e67e22"; document.getElementById('FreeCoin').style.borderBottomWidth = "2px"; }
function LightUpC(){
 document.getElementById('CoinFlips').style.color = "#e67e22"; document.getElementById('CoinFlips').style.borderBottomWidth = "2px";}
function LightUpD(){
 document.getElementById('Deposit').style.color = "#e67e22"; document.getElementById('Deposit').style.borderBottomWidth = "2px"; }
function LightUpW(){
 document.getElementById('Withdraw').style.color = "#e67e22"; document.getElementById('Withdraw').style.borderBottomWidth = "2px";}

//__________________________________________________________________________________________UnLightfunction UnLightF(){ if (Pages != 1){  document.getElementById('FreeCoin').style.color = "white";  document.getElementById('FreeCoin').style.borderBottomWidth = "0px";  }}
function UnLightC(){ if (Pages != 2){  document.getElementById('CoinFlips').style.color = "white";  document.getElementById('CoinFlips').style.borderBottomWidth = "0px";  }}
function UnLightD(){ if (Pages != 3){  document.getElementById('Deposit').style.color = "white";  document.getElementById('Deposit').style.borderBottomWidth = "0px";  }}
function UnLightW(){ if (Pages != 4){  document.getElementById('Withdraw').style.color = "white";  document.getElementById('Withdraw').style.borderBottomWidth = "0px";  }}

CSS_______________

#SitePage{ position:absolute; width: 100%; height: 100%; top: 0px; left: 0px; background-color: #95a5a6;}
#NavBar{ position:absolute; width: 100%; height: 50px; top: 0px; left: 0px; background-color: #34495e;}
.NavButts{ color: white; display:block; float:left; padding-left: 5px; padding-right: 5px; list-style-type:none; border-top-width: 0px; border-bottom-width: 0px; border-left-width: 0px; border-right-width: 0px; border-style: solid; position:relative; padding-bottom: 14px; padding-top: 16px; transition: background 0.5s ease-in-out;}
body{ font-family: arial; margin:0;}

HTML____________________
<!DOCTYPE html><html>
 <head>  <title>Practice</title>  <script type="text/javascript" src="PageManager.js"></script>  <link rel="stylesheet" type="text/css" href="main.css">   </head>
 <body>  <div id="SitePage">   <div id="NavBar">     <div id="FreeCoin" class="NavButts" style="left: 0px" onclick="FreeClick()" onmouseover="LightUpF()" onmouseleave="UnLightF()">Free Coins</div>      <div id="CoinFlips" class="NavButts" style="left: 200px" onclick="FlipClick()" onmouseover="LightUpC()" onmouseleave="UnLightC()">Coin Flips</div>     <div id="Deposit" class="NavButts" style="left: 250px" onclick="DepClick()" onmouseover="LightUpD()" onmouseleave="UnLightD()">Deposit</div>     <div id="Withdraw" class="NavButts" style="left: 300px;" onclick="WithClick()" onmouseover="LightUpW()" onmouseleave="UnLightW()">Withdraw</div>     <div id="Login" class="NavButts" style="float: right;" onclick="LoginClick()" onmouseover="LightUpL()" onmouseleave="UnLightL()">Login</div>   </div>  </div>  </body></html>

