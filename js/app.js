var listOfCards = [
	'1 fa fa-diamond',
	'2 fa fa-paper-plane-o',
	'3 fa fa-anchor',
	'4 fa fa-bolt',
	'5 fa fa-cube',
	'6 fa fa-leaf',
	'7 fa fa-bicycle',
	'8 fa fa-bomb',
	'9 fa fa-diamond',
	'10 fa fa-paper-plane-o',
	'11 fa fa-anchor',
	'12 fa fa-bolt',
	'13 fa fa-cube',
	'14 fa fa-leaf',
	'15 fa fa-bicycle',
	'16 fa fa-bomb',
];

var i = '';
var j = '';
var k = '';
var deckOfCards = document.getElementById('deck_of_cards');
var listLength = listOfCards.length;
var cardsHtml =  '';

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

 for (i=0; i < listLength; i++){			
	 
	 cardsHtml += '<li class= "card" ><i id ="' + i +'" class = "card_down '+ listOfCards[i] + '"></i></li>';

	 deckOfCards.innerHTML = cardsHtml;
		
}

var card_1 = document.getElementsByClassName('1');
var card_9 = document.getElementsByClassName('9');

var match_1 = 'closed';
var match_9 = 'closed';


 function firstFlip(){
 	var a = 'card_1';
 	var b = '';

 	a[0].classList.remove('card_down');
 	b = 'open';
 }


 card_1[0].addEventListener('click', firstFlip (card_1, card_9));



card_1[0].addEventListener('click', function(){
	card_1[0].classList.remove('card_down');
	match_1 = 'open';});

card_9[0].addEventListener('click', function(){
			card_9[0].classList.remove('card_down');
			match_1 = 'open';});
		
		deckOfCards.addEventListener('click', function(){
			if(match_1 === match_9 && match_9 === 'open'){
				card_1[0].removeEventListner('click');}
			else{
				card_9[0].classList.add('card_down');
				match_1 = 'closed';}
			});