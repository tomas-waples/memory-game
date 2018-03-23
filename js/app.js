let listOfCards = [
	[1, 'images/detail.jpg','closed', 1],
	[2, 'images/bentley.jpg', 'closed', 2],
	[3, 'images/black.jpg', 'closed', 3],
	[4, 'images/ferrari.jpg', 'closed', 4],
	[5, 'images/plymouth.jpg', 'closed', 5],
	[6, 'images/red.jpg', 'closed', 6],
	[7, 'images/silver.jpg', 'closed', 7],
	[8, 'images/white.jpg', 'closed', 8],
	[9, 'images/detail.jpg', 'closed', 1],
	[10, 'images/bentley.jpg', 'closed', 2],
	[11, 'images/black.jpg', 'closed', 3],
	[12, 'images/ferrari.jpg', 'closed', 4],
	[13, 'images/plymouth.jpg', 'closed', 5],
	[14, 'images/red.jpg', 'closed', 6],
	[15, 'images/silver.jpg', 'closed', 7],
	[16, 'images/white.jpg', 'closed', 8]
];


let i = '';
let j = '';
let k =  0;
let l = '';
let c = '';
let logic = '';
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
let stopWatch = function (){
	if (sec < 9) { sec = sec + 1;
		timer.innerHTML = min + ':0' + sec;}
	else if ( sec < 59){ sec = sec + 1;
		timer.innerHTML = min + ':' + sec;}
	else {	sec = 0;
			min = min + 1
			timer.innerHTML = min + ':' + sec;};}
			
			


let repeat = function  (){
	setInterval('stopWatch()', 1000);
}

deckOfCards.addEventListener('click', repeat);

listOfCards=shuffle(listOfCards);

 for (i=0; i < listOfCards.length; i++){			
	 
	 cardsHtml += '<div class= "card col-3"><div id ="'+ listOfCards[i][0] +'" class = "card_down f"> <img class= "car" src="'+ listOfCards[i][1] + '"></div></div>';

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
	console.log(k);
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




let flip = function (x, y, z){
	
	z = document.getElementById('1');

	z.addEventListener('click', function(){
	listOfCards[x][2]='open';
	z.classList.remove('card_down');
	setTimeout(function(){
		if(listOfCards[x][2] != listOfCards[y][2]){
			z.classList.add('card_down');
			listOfCards[x][2] = 'closed' }}, 5000);
		});}
	


for ( l= 1; l < 9; l++){

	
	card_name = document.getElementById(l);
	temp =(l + 8);
logic += flip (l, temp, card_name)};


