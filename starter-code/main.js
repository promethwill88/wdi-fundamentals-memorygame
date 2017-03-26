// array containing all cards in game / can edit and change order of array
var cards = ['queen', 'queen', 'king', 'king'];
// cards that are in play, 2 at a time
var cardsInPlay = [];

//get element with ID 'game-board'. Assign to gameBoard
var gameBoard = document.getElementById('game-board');

function createBoard(){
//loop cards.length array, creates div with class name 'card', then append to gameBoard
	for(var i = 0; i < cards.length; i++){
		var cardElement = document.createElement('div');
		cardElement.className = 'card';
		cardElement.setAttribute('data-card', cards[i]);
		cardElement.addEventListener('click', isTwoCards);
		gameBoard.appendChild(cardElement);
	}
}

// checks to see if 2 cards are in play
function isTwoCards(){
	//add card to array of cards being viewed
	cardsInPlay.push(this.getAttribute('data-card'));
	//show card face image
	if(this.getAttribute('data-card') === 'king'){
		this.innerHTML = '<img src="king-159620_640.png" alt="King of Diamonds"/>';
	}
	else{
		this.innerHTML = '<img src="diamonds-884199_640.png" alt="Queen of Diamonds"/>';
	}
	//check if 2 cards in play for match
	if(cardsInPlay.length === 2){
		//pass CardsInPlay to isMatch function
		isMatch(cardsInPlay);
		//clear cards in cardsInPlay Array for next try
		cardsInPlay = [];
	}
}


//alert pop up based on match or not
function isMatch(){
	// winning message alert
	if(cardsInPlay[0] === cardsInPlay[1]){
		alert("You found a match!");
	}
	else {
		alert("Sorry, try again.");
	}
}

//executes createBoard / start play
createBoard();


//Not working, resetting the board to first play tied to <button>
function resetBoard(){
	for(var i = 0; i < cards.length; i++){
	cardElement.removeAttribute('data-card', cards[i]);
	}
}

var resetButton = document.getElementById('reset');
resetButton.addEventListener('click', resetBoard);






