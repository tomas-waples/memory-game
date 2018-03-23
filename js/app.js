let listOfCards = [
	[1, 'images/detail.jpg','closed', 1],
	[2, 'images/detail.jpg', 'closed', 1],
	[3, 'images/bentley.jpg', 'closed', 2],
	[4, 'images/bentley.jpg', 'closed', 2],
	[5, 'images/black.jpg', 'closed', 3],
	[6, 'images/black.jpg', 'closed', 3],
	[7, 'images/ferrari.jpg', 'closed', 4],
	[8, 'images/ferrari.jpg', 'closed', 4],
	[9, 'images/plymouth.jpg', 'closed', 5],
	[10, 'images/plymouth.jpg', 'closed', 5],
	[11, 'images/red.jpg', 'closed', 6],
	[12, 'images/red.jpg', 'closed', 6],
	[13, 'images/silver.jpg', 'closed', 7],
	[14, 'images/silver.jpg', 'closed', 7],
	[15, 'images/white.jpg', 'closed', 8],
	[16, 'images/white.jpg', 'closed', 8],	
];


let i = '';
let j = '';
let k =  0;
let l = '';
let c = '';

let deckOfCards = document.getElementById('deck_of_cards');
let listLength = listOfCards.length;
let cardsHtml =  '<div class = "row">';
let timerValue = '';
let timer = document.getElementById('timer');

function shuffle(array) {
    var currentIndex = array.length, temporaryValue, randomIndex;

    while (currentIndex !== 0) {
        randomIndex = Math.floor(Math.random() * currentIndex);
        currentIndex -= 1;
        temporaryValue = array[currentIndex];
        array[currentIndex] = array[randomIndex];
        array[randomIndex] = temporaryValue;
    }

    return array;
}


let sec = 0;
let min = 0;
let timerStarted = false;
let stopWatch = function (){
	if (sec < 9) { sec = sec + 1;
		timer.innerHTML = min + ':0' + sec;}
	else if ( sec < 59){ sec = sec + 1;
		timer.innerHTML = min + ':' + sec;}
	else {	sec = 0;
			min = min + 1
			timer.innerHTML = min + ':' + sec;};}
			
			


let repeat = function  (){
	if (timerStarted !== true) {setInterval('stopWatch()', 1000);}
}

deckOfCards.addEventListener('click', repeat)
if (timerStarted === true) {deckOfCards.removeEventListener('click', repeat)};
deckOfCards.addEventListener('click', function(){
	timerStarted = true;
})

listOfCards=shuffle(listOfCards);

 for (i=0; i < listOfCards.length; i++){			
	 
	 cardsHtml += '<div class= "card col-3"><div id ="'+ listOfCards[i][0] +'" class = "card_down"> <img class= "car" src="'+ listOfCards[i][1] + '"></div></div>';

	 deckOfCards.innerHTML = cardsHtml;
	
}

let resetButton = document.getElementById('resetButton');

resetButton.onclick= reloadPage;

function reloadPage(){
	window.location.reload();
}
let starHTML='';
let numberOfStars= document.getElementById('numberOfStars');

let count = function () { 
	k = k + 1
	
	 card = event.target;
	  console.log("card: ", card);
  console.log("classList: ", card.classList);
}

deckOfCards.addEventListener('click', count);

let starsIfElse = function (){
	if (k < 5){starsHTML = '<img class= "stars" src="images/star.jpg" alt = "Star 1"><img class= "stars" src="images/star.jpg" alt = "Star 2"><img class= "stars" src="images/star.jpg" alt = "Star ">'
			numberOfStars.innerHTML = starsHTML;}
	else if (k >= 5 && k < 10){starsHTML ='<img class= "stars" src="images/star.jpg" alt = "Star 1"><img class= "stars" src="images/star.jpg" alt = "Star 2">'
			numberOfStars.innerHTML = starsHTML;}
	else {starsHTML = '<img class= "stars" src="images/star.jpg" alt = "Star">'
			numberOfStars.innerHTML = starsHTML;};
}

deckOfCards.addEventListener('click', starsIfElse);




let logic = function (x, y){
	y = x+1;
	
	document.getElementById(x).classList.replace('card_down', 'card_up');
	setTimeout(function(x, y){
		if(document.getElementById(y).classList.contains('card_up') !== true){
		document.getElementById(x).classList.replace('card_up', 'card_down');
		}  
	}, 5000);
};

	


for ( l= 1; l < 17 ; l+=2 ){

temp = l+1;

document.getElementById(l).addEventListener('click', logic)};

for ( l= 2; l < 17 ; l+=2 ){

temp = l-1;

document.getElementById(l).addEventListener('click', function(){
	document.getElementById(l).classList.replace('card_down', 'card_up');
	setTimeout(function(){
		if(document.getElementById(temp).classList.contains('card_up') !== true){
		document.getElementById(l).classList.replace('card_up', 'card_down');
		}  
	}, 5000);
})};