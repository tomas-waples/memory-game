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
const TIMER = document.getElementById('timer');
let sec = 0;
let min = 0;
let timerStarted = false;
let stopWatch = () => {
	
  if (sec === 0 && min === 0 && gameEnd !== true)
    {{TIMER.innerHTML = min + ':0' + sec;
    sec = sec + 1;}
    document.body.style.backgroundImage = "url('css/blue-1.jpg')";}
  else if (sec < 10 && gameEnd !== true) 
	{TIMER.innerHTML = min + ':0' + sec;
	sec = sec + 1;
	document.body.style.backgroundImage = "url('css/blue-1.jpg')";}
  else if (sec < 60 && gameEnd !== true)
	{TIMER.innerHTML = min + ':' + sec;
	sec = sec + 1;}		
  else if ( min < 100 && gameEnd !== true) 
	{sec = 0;
	min = min + 1;
	TIMER.innerHTML = min + 'min';
	sec = sec + 1;		
	document.body.style.backgroundImage = "url('css/red.jpg')";}
  else{ if (sec < 10) {TIMER.innerHTML = min + ':0' + sec;}
  else {TIMER.innerHTML = min + ':' + sec;};}};

// setting an interval on Timer function so it runs continuously   			

let repeat = () => {
  if (timerStarted !== true && gameEnd !== true) {setInterval('stopWatch()', 1000);}
};

//setting Timer on page

const DECK_OF_CARDS = document.getElementById('deck_of_cards');

DECK_OF_CARDS.addEventListener('click', repeat);

if (timerStarted === true) {
  DECK_OF_CARDS.removeEventListener('click', repeat)};
  DECK_OF_CARDS.addEventListener('click', function(){
  timerStarted = true;
})

//creating click counter and setting it on page and tying it to the card flipping array to prevent clicks that do not result
//in card flips from counting against you
// creating stars as well as argument to determine how many there are

let starHTML='';
let NUMBER_OF_STARS= document.getElementById('numberOfStars');
let totalClicks = 0;
let clickCount = () => {

  if(cardlimmitSum<2){
  totalClicks = totalClicks + 1;
  z = '<button type="button"  class="info clickCountButton">' + totalClicks + ' Moves </button>';
  document.getElementById('click_count').innerHTML = z;
}
  else{totalClicks = totalClicks}};

DECK_OF_CARDS.addEventListener('click', clickCount);

let starsIfElse = () => {
	
	if (totalClicks < 25){starsHTML = '<i class="fas fa-star fa-3x"></i><i class="fas fa-star fa-3x"></i><i class="fas fa-star fa-3x"></i>'
			NUMBER_OF_STARS.innerHTML = starsHTML;}
	else if (totalClicks >= 25 && totalClicks < 50){starsHTML ='<i class="fas fa-star fa-3x"></i><i class="fas fa-star fa-3x">'
			NUMBER_OF_STARS.innerHTML = starsHTML;}
	else {starsHTML = '<i class="fas fa-star fa-3x"></i>'
			NUMBER_OF_STARS.innerHTML = starsHTML;};
}

DECK_OF_CARDS.addEventListener('click', starsIfElse);


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


//looping through randomized array and creating HTML to set on page

  for (i=0; i < listOfCards.length; i++){			
	 
cardsHtml += '<div class= "card col-3"><div id ="'+ listOfCards[i][0] +'" class = "card_down">'+
' <img class= "car" src="'+ listOfCards[i][1] + '"></div></div>';
};

DECK_OF_CARDS.innerHTML = cardsHtml;


//create reset button for both in game, and modal

const RESET_BUTTON = document.getElementById('resetButton');
const RESET_BUTTON_MODAL = document.getElementById('resetButtonModal');

RESET_BUTTON.onclick= reloadPage;
RESET_BUTTON_MODAL.onclick= reloadPage;

function reloadPage(){
	window.location.reload();
};




// creating argument for 'flipping' and matching cards.
//array and loop to insure no more than two cards are 'up' at one time

let cardLimmit = [0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0];


cardlimmitSum = 0;

let cardlimmitFunction = () => {

	cardlimmitSum =0;
	for(c=0; c<cardLimmit.length; c++){
		cardlimmitSum += cardLimmit[c];
	}

};

// setting an interval on function so it runs continuously

setInterval(() => {cardlimmitFunction(),1});

let getElementX1 =	'';
let x = '';
let interval = 2000;

const MODAL_START = document.getElementById('modal-start');
const EASY_BUTTON = document.getElementById('easy-button');
const REGULAR_BUTTON = document.getElementById('regular-button');
const HARD_BUTTON = document.getElementById('hard-button');





//creating functions to add eventListners and govern behavior of cards when clicked



let	getElementX = '';

	for ( x= 1; x < 16 ; x+=2 ){ 

  y = x+1;
  getElementX1 += 'document.getElementById('+x+').addEventListener("click", function(){'+
  'if(cardlimmitSum<2){document.getElementById('+x+').classList.replace("card_down", "card_up");cardLimmit['+x+']=1;getElementX1Flip = true;'+
  'if(document.getElementById('+y+').classList.contains("card_up") === true){cardLimmit['+x+']=0;}else{setTimeout(function(){if(document.getElementById('+y
  +').classList.contains("card_up") !== true){'+
  'document.getElementById('+x+').classList.replace( "card_up" , "card_down");cardLimmit['+x+']=0;}else{cardLimmit['+x+']=0;}}, '+interval+')}}});'};




let getElementX2 = '';

for ( x= 16; x > 0 ; x-=2 ) {

  y = x-1;
  getElementX2 += 'document.getElementById('+x+').addEventListener("click", function(){'+
  'if(cardlimmitSum<2){document.getElementById('+x+').classList.replace("card_down", "card_up");cardLimmit['+x+']=1;getElementX2Flip = true;'+
  'if(document.getElementById('+y+').classList.contains("card_up") === true){cardLimmit['+x+']=0;}else{setTimeout(function(){if(document.getElementById('+y
  +').classList.contains("card_up") !== true){'+
  'document.getElementById('+x+').classList.replace( "card_up" , "card_down");cardLimmit['+x+']=0;}else{cardLimmit['+x+']=0;}}, '+interval+')}}});'};

// using eval only to convert string into JSON

let odd = eval(getElementX1);
let even = eval(getElementX2);

let log = () => {


	odd;
	even;
}

DECK_OF_CARDS.addEventListener('click', function(){
	log;
})

//setting victory conditions
let a = 1;
let cardStatusArray = [];
let cardStatusArrayPH = '';
let gameEnd = false;

//creating an array to test if class of each card is equal to 'card-up'

let buildCardStatusArrayPH = () => {

	cardStatusArray = [];

	for(a=1; a<16; a++){

	cardStatusArrayPH = document.getElementById(a).className;
	cardStatusArray.push(cardStatusArrayPH);
	
}
}

// setting function to run continuously 

let buildCardStatusArrayPHrep = () => {

	setInterval(()=>{buildCardStatusArrayPH()}, 500);
	
};

let winCondition = (element) => {
	return element === 'card_up';
};

// creating a function to test victory conditions
let win = () =>{
	
	if (cardStatusArray.every(winCondition) === true){
	gameEnd = true;
	};
};

buildCardStatusArrayPHrep();

setInterval(()=>{win()}, 500);

//launching modal when win is met
modal_text = '';
const MODAL = document.getElementById('modal');
const MODAL_HEADER = document.getElementById('modal-header');
const MODAL_BODY = document.getElementById('modal-body');
const SEC_HTML = document.getElementById('sec');
const MIN_HTML = document.getElementById('min');
//adding stars to modal
const NUMBER_OF_STARS_MODAL = document.getElementById('numberOfStarsModal');
//adding number of clicks to modal
const TOTAL_CLICKS_HTML = document.getElementById('totalClicks');
//adding time to the modal
let modal_content = () => {

  if(sec < 10){SEC_HTML.innerHTML = '0'+sec;}
  else{SEC_HTML.innerHTML=sec;}

  MIN_HTML.innerHTML = min;
  TOTAL_CLICKS_HTML.innerHTML = totalClicks;
  NUMBER_OF_STARS_MODAL.innerHTML = starsHTML;
	
}
//setting styling for main page after modal launch

let modal_show = () => {

	if (gameEnd === true){

	modal_content();
	DECK_OF_CARDS.classList.add('win');
	MODAL.style.display='block';
	MODAL_HEADER.style.display='block';
	MODAL_BODY.style.display='block';
	document.getElementById('top-stats').style.display='none';
	document.getElementById('bottom-stats').style.display='none';
	NUMBER_OF_STARS.style.display='none';
}
};

setInterval(()=>{modal_show()}, 500);
