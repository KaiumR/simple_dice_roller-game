document;
var dicePlayerOne=Math.floor(Math.random()*6)+1;
var dicePlayerTwo=Math.floor(Math.random()*6)+1;

var diceForPlayerOne="dice-six-faces-"+dicePlayerOne+".png";
document.querySelectorAll("img")[0].src =diceForPlayerOne;

var diceForPlayerTwo="dice-six-faces-"+dicePlayerTwo+".png";
document.querySelectorAll("img")[1].src =diceForPlayerTwo;



if(dicePlayerOne>dicePlayerTwo){
	document.querySelector("h1").innerText="Player 1 wins!";
}
else if(dicePlayerOne<dicePlayerTwo){
	document.querySelector("h1").innerText="Player 2 wins!";
}else{
	document.querySelector("h1").innerText="Drew!";
}
