let listOfCards = [
	[1, 'images/detail.jpg', false , 1],
	[2, 'images/detail.jpg', false , 1],
	[3, 'images/bentley.jpg', false , 2],
	[4, 'images/bentley.jpg', false , 2],
	[5, 'images/black.jpg', false , 3],
	[6, 'images/black.jpg', false , 3],
	[7, 'images/ferrari.jpg', false , 4],
	[8, 'images/ferrari.jpg', false , 4],
	[9, 'images/plymouth.jpg', false , 5],
	[10, 'images/plymouth.jpg', false , 5],
	[11, 'images/red.jpg', false , 6],
	[12, 'images/red.jpg', false , 6],
	[13, 'images/silver.jpg', false , 7],
	[14, 'images/silver.jpg', false , 7],
	[15, 'images/white.jpg', false , 8],
	[16, 'images/white.jpg', false, 8],	
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


let sec = 55;
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
// I'm not sure why this is having trouble loading.  My guess is that it has to add to HTML, load the image and than repain?
// Thining of using the .insertRule to make the chagne directly, but thought I would check to see if there as a beter way to do this
// I'm also mayby 50% on this and may just take it out.
		document.body.style.backgroundImage = "url('css/blue-1(r).jpg')";}
	else{ if (sec < 10) {timer.innerHTML = min + ':0' + sec;}
		else {timer.innerHTML = min + ':' + sec;};}}
			
			


let repeat = function  (){
	if (timerStarted !== true && gameEnd !== true) {setInterval('stopWatch()', 1000);}
}

deckOfCards.addEventListener('click', repeat)
if (timerStarted === true) {deckOfCards.removeEventListener('click', repeat)};
deckOfCards.addEventListener('click', function(){
	timerStarted = true;
})

totalClicks = 0;

let clickCount = function(){

	totalClicks = totalClicks + 1;
 	y = '<button type="button"  class="info clickCountButton">' + totalClicks + ' Moves </button>'

	document.getElementById('click_count').innerHTML = y;
}

deckOfCards.addEventListener('click', clickCount)

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
	if (k < 5){starsHTML = '<i class="fas fa-star fa-3x"></i><i class="fas fa-star fa-3x"></i><i class="fas fa-star fa-3x"></i>'
			numberOfStars.innerHTML = starsHTML;}
	else if (k >= 5 && k < 10){starsHTML ='<i class="fas fa-star fa-3x"></i><i class="fas fa-star fa-3x">'
			numberOfStars.innerHTML = starsHTML;}
	else {starsHTML = '<i class="fas fa-star fa-3x"></i>'
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

let a = 1;
let cardStatusArray = [];
let cardStatusArrayPH = '';
let gameEnd = false;

let buildCardStatusArrayPH = function (){

	cardStatusArray = [];

	for(a=1; a<16; a++){

	cardStatusArrayPH = document.getElementById(a).className;
	cardStatusArray.push(cardStatusArrayPH);
	
}
}

let buildCardStatusArrayPHrep = function (){

	setInterval ('buildCardStatusArrayPH()', 500);
}

let winCondition = function(element){
	return element === 'card_up';
}

let win = function(){
	
	if (cardStatusArray.every(winCondition) === true){
	gameEnd = true;
	}
}




buildCardStatusArrayPHrep();





setInterval('win()', 500);

modal_text = '';
let modal = new Modal({ el: document.getElementById('modal')});
let modal_content = function(){

	modal_text = '<div id = myModal class = "modal fade"> <div class = "modal-content"><div class="modal-header"> congradulations </div><div class="modal-body">You Have Won!  It took you '
				+ totalClicks + ' moves and ' + min + ' minets and ' + sec +' secounds.  You have been awarded'
				+ starsHTML + '</div></div></div>';

	modal.innerHTML = modal_text;
	
}

let modal_show = function(){

	if (gameEnd === true){

	modal_content();
	deckOfCards.classList.add('win');
}
};

deckOfCards.addEventListener('click', modal_show);

$('#deck_of_cards').on('click', function(e) {
  if('#deck_of_cards').hasClass('win') {
    $('#myModal').modal('show');
  }
});