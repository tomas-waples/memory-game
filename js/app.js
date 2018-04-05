// Array containing ID's and images for cards

let listOfCards  =  [
  [1, 'images/detail.jpg'],
  [2, 'images/detail.jpg'],
  [3, 'images/bentley.jpg'],
  [4, 'images/bentley.jpg'],
  [5, 'images/black.jpg'],
  [6, 'images/black.jpg'],
  [7, 'images/ferrari.jpg'],
  [8, 'images/ferrari.jpg'],
  [9, 'images/plymouth.jpg'],
  [10, 'images/plymouth.jpg'],
  [11, 'images/red.jpg'],
  [12, 'images/red.jpg'],
  [13, 'images/silver.jpg'],
  [14, 'images/silver.jpg'],
  [15, 'images/white.jpg'],
  [16, 'images/white.jpg'],	
];


// building Timer
let timerValue = '';
let timer = document.getElementById('timer');
let sec = 0;
let min = 0;
let timerStarted = false;
let stopWatch = function (){
	
  if (sec === 0 && min === 0 && gameEnd !== true)
    {{timer.innerHTML = min + ':0' + sec;
    sec = sec + 1;}
    document.body.style.backgroundImage = "url('css/blue-1.jpg')";}
  else if (sec < 10 && gameEnd !== true) 
	{timer.innerHTML = min + ':0' + sec;
	sec = sec + 1;
	document.body.style.backgroundImage = "url('css/blue-1.jpg')";}
  else if (sec < 60 && gameEnd !== true)
	{timer.innerHTML = min + ':' + sec;
	sec = sec + 1;}		
  else if ( min < 100 && gameEnd !== true) 
	{sec = 0;
	min = min + 1;
	timer.innerHTML = min + 'min';
	sec = sec + 1;		
	document.body.style.backgroundImage = "url('css/red.jpg')";}
  else{ if (sec < 10) {timer.innerHTML = min + ':0' + sec;}
	else {timer.innerHTML = min + ':' + sec;};}};

// setting an interval on Timer function so it runs continuously   			

let repeat = function  (){
  if (timerStarted !== true && gameEnd !== true) {setInterval('stopWatch()', 1000);}
};

//setting Timer on page

let deckOfCards = document.getElementById('deck_of_cards');
deckOfCards.addEventListener('click', repeat);
if (timerStarted === true) {
  deckOfCards.removeEventListener('click', repeat)};
  deckOfCards.addEventListener('click', function(){
  timerStarted = true;
})

//creating click counter and setting it on page and tying it to the card flipping array to prevent clicks that do not result
//in card flips from counting against you
// creating stars as well as argument to determine how many there are

let starHTML='';
let numberOfStars= document.getElementById('numberOfStars');
let totalClicks = 0;
let clickCount = function(){

  if(cardlimmitSum<2){
  totalClicks = totalClicks + 1;
  z = '<button type="button"  class="info clickCountButton">' + totalClicks + ' Moves </button>';
  document.getElementById('click_count').innerHTML = z;
}
  else{totalClicks = totalClicks}};
deckOfCards.addEventListener('click', clickCount);

let starsIfElse = function (){
	
	if (totalClicks < 25){starsHTML = '<i class="fas fa-star fa-3x"></i><i class="fas fa-star fa-3x"></i><i class="fas fa-star fa-3x"></i>'
			numberOfStars.innerHTML = starsHTML;}
	else if (totalClicks >= 25 && totalClicks < 50){starsHTML ='<i class="fas fa-star fa-3x"></i><i class="fas fa-star fa-3x">'
			numberOfStars.innerHTML = starsHTML;}
	else {starsHTML = '<i class="fas fa-star fa-3x"></i>'
			numberOfStars.innerHTML = starsHTML;};
}

deckOfCards.addEventListener('click', starsIfElse);


//randomizing the array of cards
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

listOfCards=shuffle(listOfCards);

let cardsHtml = '<div class = "row container_cards">';
let listLength = listOfCards.length;

//looping through randomized array and creating HTML to set on page

  for (i=0; i < listOfCards.length; i++){			
	 
cardsHtml += '<div class= "card col-3"><div id ="'+ listOfCards[i][0] +'" class = "card_down">'+
' <img class= "car" src="'+ listOfCards[i][1] + '"></div></div>';
};

deckOfCards.innerHTML = cardsHtml;


//create reset button for both in game, and modal

let resetButton = document.getElementById('resetButton');
let resetButtonModal = document.getElementById('resetButtonModal');

resetButton.onclick= reloadPage;
resetButtonModal.onclick= reloadPage;

function reloadPage(){
	window.location.reload();
};




// creating argument for 'flipping' and matching cards.
//array and loop to insure no more than two cards are 'up' at one time

let cardLimmit = [0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0];


cardlimmitSum = 0;

let cardlimmitFunction = function(){

	cardlimmitSum =0;
	for(c=0; c<cardLimmit.length; c++){
		cardlimmitSum += cardLimmit[c];
	}

};

// setting an interval on function so it runs continuously

setInterval('cardlimmitFunction()',1);
let getElementX1 =	'';
let x = '';

//creating functions to add eventListners and govern behavior of cards when clicked



for ( x= 1; x < 16 ; x+=2 )	{ 

  y = x+1;
  getElementX1 += 'document.getElementById('+x+').addEventListener("click", function(){'+
  'if(cardlimmitSum<2){document.getElementById('+x+').classList.replace("card_down", "card_up");cardLimmit['+x+']=1;getElementX1Flip = true;'+
  'if(document.getElementById('+y+').classList.contains("card_up") === true){cardLimmit['+x+']=0;}else{setTimeout(function(){if(document.getElementById('+y
  +').classList.contains("card_up") !== true){'+
  'document.getElementById('+x+').classList.replace( "card_up" , "card_down");cardLimmit['+x+']=0;}else{cardLimmit['+x+']=0;}}, 1500)}}});'};


let getElementX2 = '';

for ( x= 16; x > 0 ; x-=2 ) {

  y = x-1;
  getElementX2 += 'document.getElementById('+x+').addEventListener("click", function(){'+
  'if(cardlimmitSum<2){document.getElementById('+x+').classList.replace("card_down", "card_up");cardLimmit['+x+']=1;getElementX2Flip = true;'+
  'if(document.getElementById('+y+').classList.contains("card_up") === true){cardLimmit['+x+']=0;}else{setTimeout(function(){if(document.getElementById('+y
  +').classList.contains("card_up") !== true){'+
  'document.getElementById('+x+').classList.replace( "card_up" , "card_down");cardLimmit['+x+']=0;}else{cardLimmit['+x+']=0;}}, 1500)}}});'};

// using eval only to convert string into JSON

let odd = eval(getElementX1);
let even = eval(getElementX2);

let log = function (){

	odd;
	even;
}

deckOfCards.addEventListener('click', function(){
	log;
})

//setting victory conditions
let a = 1;
let cardStatusArray = [];
let cardStatusArrayPH = '';
let gameEnd = false;

//creating an array to test if class of each card is equal to 'card-up'

let buildCardStatusArrayPH = function (){

	cardStatusArray = [];

	for(a=1; a<16; a++){

	cardStatusArrayPH = document.getElementById(a).className;
	cardStatusArray.push(cardStatusArrayPH);
	
}
}

// setting function to run continuously 

let buildCardStatusArrayPHrep = function (){

	setInterval ('buildCardStatusArrayPH()', 500);
};

let winCondition = function(element){
	return element === 'card_up';
};

// creating a function to test victory conditions
let win = function(){
	
	if (cardStatusArray.every(winCondition) === true){
	gameEnd = true;
	};
};

buildCardStatusArrayPHrep();

setInterval('win()', 500);
//launching modal when win is met
modal_text = '';
let modal = document.getElementById('modal');
let modal_header = document.getElementById('modal-header');
let modal_body = document.getElementById('modal-body');
let secHTML = document.getElementById('sec');
let minHTML = document.getElementById('min');
//adding stars to modal
let numberOfStarsModal = document.getElementById('numberOfStarsModal');
//adding number of clicks to modal
let totalClicksHTML = document.getElementById('totalClicks');
//adding time to the modal
let modal_content = function(){

  if(sec < 10){secHTML.innerHTML = '0'+sec;}
  else{secHTML=sec;};

  minHTML.innerHTML = min;
  totalClicksHTML.innerHTML = totalClicks;
  numberOfStarsModal.innerHTML = starsHTML;
	
}
//setting styling for main page after modal launch

let modal_show = function(){

	if (gameEnd === true){

	modal_content();
	deckOfCards.classList.add('win');
	modal.style.display='block';
	modal_header.style.display='block';
	modal_body.style.display='block';
	document.getElementById('top-stats').style.display='none';
	document.getElementById('bottom-stats').style.display='none';
	document.getElementById('numberOfStars').style.display='none';
}
};

setInterval('modal_show()',500);