let listOfCards = [
	'1 car',
	'2 fa fa-paper-plane-o fa-3x',
	'3 fa fa-anchor fa-3x',
	'4 fa fa-bolt fa-3x',
	'5 fa fa-cube fa-3x',
	'6 fa fa-leaf fa-3x',
	'7 fa fa-bicycle fa-3x',
	'8 fa fa-bomb fa-3x',
	'9 fa car',
	'10 fa fa-paper-plane-o fa-3x',
	'11 fa fa-anchor fa-3x',
	'12 fa fa-bolt fa-3x',
	'13 fa fa-cube fa-3x',
	'14 fa fa-leaf fa-3x',
	'15 fa fa-bicycle fa-3x',
	'16 fa fa-bomb fa-3x',
];

let i = '';
let j = '';
let k = '';
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

deckOfCards.addEventListener('click', function(){
let startAt = 0;
let time = '';
let clockTimer = '';

function pad(num, size) {
	var s = "0000" + num;
	return s.substr(s.length - size);
}

function formatTime(time) {
	var h = m = s = ms = 0;
	var newTime = '';

	h = Math.floor( time / (60 * 60 * 1000) );
	time = time % (60 * 60 * 1000);
	m = Math.floor( time / (60 * 1000) );
	time = time % (60 * 1000);
	s = Math.floor( time / 1000 );
	ms = time % 1000;

	newTime = pad(h, 2) + ':' + pad(m, 2) + ':' + pad(s, 2) + ':' + pad(ms, 3);
	return newTime;

timerValue =  '<div> '+ time + ' s </div>';

	timer.innerHTML = timerValue;
}
})

listOfCards=shuffle(listOfCards);

 for (i=0; i < listLength; i++){			
	 
	 cardsHtml += '<div class= "card col-3"><div id ="' + i +'" class = "card_down f '+ listOfCards[i] + '"></div></div>';

	 deckOfCards.innerHTML = cardsHtml;
		
}

let resetButton = document.getElementById('resetButton');

resetButton.onclick= reloadPage;

function reloadPage(){
	window.location.reload();
}
let starHTML='';
let numberOfStars= document.getElementById('numberOfStars');

if (k < 60){starsHTML = '<img class= "stars" src="images/star.jpg" alt = "Star 1"><img class= "stars" src="images/star.jpg" alt = "Star 2"><img class= "stars" src="images/star.jpg" alt = "Star3">'
			numberOfStars.innerHTML = starsHTML;}
	else if (k >= 60 && k < 120){'<img src="/images.star.jpg" alt = "Star 1"><img src="/images.star.jpg" alt = "Star 2">'
			numberOfStars.innerHTML = starsHTML;}
	else {starsHTML = '<img src="/images.star.jpg" alt = "Star">'
			numberOfStars.innerHTML = starsHTML;}

const card_1 = document.getElementsByClassName('1');
const card_2 = document.getElementsByClassName('2');
const card_3 = document.getElementsByClassName('3');
const card_4 = document.getElementsByClassName('4');
const card_5 = document.getElementsByClassName('5');
const card_6 = document.getElementsByClassName('6');
const card_7 = document.getElementsByClassName('7');
const card_8 = document.getElementsByClassName('8');
const card_9 = document.getElementsByClassName('9');
const card_10 = document.getElementsByClassName('10');
const card_11 = document.getElementsByClassName('11');
const card_12 = document.getElementsByClassName('12');
const card_13 = document.getElementsByClassName('13');
const card_14 = document.getElementsByClassName('14');
const card_15 = document.getElementsByClassName('15');
const card_16 = document.getElementsByClassName('16');

let match_1 = 'closed';
let match_2 = 'closed';
let match_3 = 'closed';
let match_4 = 'closed';
let match_5 = 'closed';
let match_6 = 'closed';
let match_7 = 'closed';
let match_8 = 'closed';
let match_9 = 'closed';
let match_10 = 'closed';
let match_11 = 'closed';
let match_12 = 'closed';
let match_13 = 'closed';
let match_14 = 'closed';
let match_15 = 'closed';
let match_16 = 'closed';

let open = function (a){
	
	a = document.createElement('span');
	a.innerHTML = 'Card Up';
	card_1.appendChild(a.innerHTML);
}

let flip = function (x, y, z){


	x[0].classList.remove('card_down'); 
	setTimeout(function(){
		if (z !== 'open'){
			y = 'closed';}}, 5000);
	setTimeout(function(){
		if (z !== 'open'){
			x[0].classList.add('card_down');}}, 5000);
};

card_1[0].addEventListener('click', function(){
	
	match_1 = 'open';
	card_1[0].classList.remove('card_down');
		setTimeout(function(){
		if (match_9 !== 'open'){
			match_1 = 'closed';}}, 5000);
	setTimeout(function(){
		if (match_9 !== 'open'){
			card_1[0].classList.add('card_down');}}, 5000);
});

card_2[0].addEventListener('click', function(){
	
	flip(card_2, match_2, match_10)
});

card_3[0].addEventListener('click', function(){
	
	flip(card_3, match_3, match_11)
});

card_4[0].addEventListener('click', function(){
	
	flip(card_4, match_4, match_12)
});

card_5[0].addEventListener('click', function(){
	
	flip(card_5, match_5, match_13)
});

card_6[0].addEventListener('click', function(){
	
	flip(card_6, match_6, match_14)
});

card_7[0].addEventListener('click', function(){
	
	flip(card_7, match_7, match_15)
});

card_8[0].addEventListener('click', function(){
	
	flip(card_8, match_8, match_16)
});

card_9[0].addEventListener('click', function(){
	
	match_9 = 'open';
	card_9[0].classList.remove('card_down');
		setTimeout(function(){
		if (match_1 !== 'open'){
			match_9 = 'closed';}}, 5000);
	setTimeout(function(){
		if (match_1 !== 'open'){
			card_9[0].classList.add('card_down');}}, 5000);
});

card_10[0].addEventListener('click', function(){
	
	flip(card_10, match_10, match_2)
});

card_11[0].addEventListener('click', function(){
	
	flip(card_11, match_11, match_3)
});

card_12[0].addEventListener('click', function(){
	
	flip(card_12, match_12, match_4)
});

card_13[0].addEventListener('click', function(){
	
	flip(card_13, match_13, match_5)
});

card_14[0].addEventListener('click', function(){
	
	flip(card_14, match_14, match_6)
});

card_15[0].addEventListener('click', function(){
	
	flip(card_15, match_15, match_7)
});

card_16[0].addEventListener('click', function(){
	
	flip(card_16, match_16, match_8)
});

