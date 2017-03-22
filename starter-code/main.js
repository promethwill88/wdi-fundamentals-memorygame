//cardOne & cardTwo are queens
var cardOne = "queen";
var cardTwo = "queen";
//cardThree & cardFour are kings
var cardThree = "king";
var cardFour = "king";

/*
if(cardTwo === cardFour){
	alert("You found a match!");
}
else {
	alert("Sorry, try again.");
}
*/

//Create function
var createCards = function(){
//Get element with ID 'game-board'. Assign to var gameBoard
	var gameBoard = document.getElementById('game-board');
//Loop 4 times: create div with class name 'card', then append to gameBoard
	for(var i = 0; i <= 3; i++){
		var card = document.createElement('div');
		card.className = 'card';
		gameBoard.appendChild(card);
	}
};
//Execute function
createCards();