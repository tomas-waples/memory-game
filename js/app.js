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
let cardsHtml =  '<div class = "row container_cards">';
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

}


deckOfCards.innerHTML = cardsHtml;


let resetButton = document.getElementById('resetButton');

resetButton.onclick= reloadPage;

function reloadPage(){
	window.location.reload();
}
let starHTML='';
let numberOfStars= document.getElementById('numberOfStars');

let count = function () { 
	k = k + 1
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





let getElementX1 =	'';

for ( x= 1; x < 17 ; x+=2 )	{ 

	y = x+1;
	getElementX1 += 'document.getElementById('+x+').addEventListener("click", function(){document.getElementById('+x+').classList.replace("card_down", "card_up"); setTimeout(function(){if(document.getElementById('+y+').classList.contains("card_up") !== true){document.getElementById('+x+').classList.replace( "card_up" , "card_down")};}, 5000)});'}


let getElementX2 = '';

for ( x= 16; x > 0 ; x-=2 ) {

	y = x-1
	getElementX2 += 'document.getElementById('+x+').addEventListener("click", function(){document.getElementById('+x+').classList.replace("card_down", "card_up"); setTimeout(function(){if(document.getElementById('+y+').classList.contains("card_up") !== true){document.getElementById('+x+').classList.replace( "card_up" , "card_down")};}, 5000)});'}

let odd = eval(getElementX1);
let even = eval(getElementX2);

let log = function (){

	odd;
	even;
}



deckOfCards.addEventListener('click', function(){
	log;
})

