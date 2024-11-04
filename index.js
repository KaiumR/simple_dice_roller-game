document;
var dicePlayerOne=Math.floor(Math.random()*6)+1;
var dicePlayerTwo=Math.floor(Math.random()*6)+1;

if(dicePlayerOne===1){
	document.querySelector(".dice_p1 img").src = "dice-six-faces-one.png";
}else if(dicePlayerOne===2){
	document.querySelector(".dice_p1 img").src = "dice-six-faces-two.png";
}
else if(dicePlayerOne===3){
	document.querySelector(".dice_p1 img").src = "dice-six-faces-three.png";
}else if(dicePlayerOne===4){
	document.querySelector(".dice_p1 img").src = "dice-six-faces-four.png";
}else if(dicePlayerOne===5){
	document.querySelector(".dice_p1 img").src = "dice-six-faces-five.png";
}else{
	document.querySelector(".dice_p1 img").src = "dice-six-faces-six.png";
}

if(dicePlayerTwo===1){
	document.querySelector(".dice_p2 img").src = "dice-six-faces-one.png";
}else if(dicePlayerTwo===2){
	document.querySelector(".dice_p2 img").src = "dice-six-faces-two.png";
}
else if(dicePlayerTwo===3){
	document.querySelector(".dice_p2 img").src = "dice-six-faces-three.png";
}else if(dicePlayerTwo===4){
	document.querySelector(".dice_p2 img").src = "dice-six-faces-four.png";
}else if(dicePlayerTwo===5){
	document.querySelector(".dice_p2 img").src = "dice-six-faces-five.png";
}else{
	document.querySelector(".dice_p2 img").src = "dice-six-faces-six.png";
}



if(dicePlayerOne>dicePlayerTwo){
	document.querySelector("h1").innerText="Player 1 wins!";
}
else if(dicePlayerOne<dicePlayerTwo){
	document.querySelector("h1").innerText="Player 2 wins!";
}else{
	document.querySelector("h1").innerText="Drew!";
}
