var list_of_cards = [
	"fa fa-diamond",
	"fa fa-paper-plane-o",
	"fa fa-anchor",
	"fa fa-bolt",
	"fa fa-cube",
	"fa fa-leaf",
	"fa fa-bicycle",
	"fa fa-bomb"
];

var i = "";
var j = "";
var deck_of_cards = document.getElementById("deck_of_cards");
var listLength = list_of_cards.length;
var HTML =  "<li class=\"card\">";

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

for (i=0; i < listLength;  i++) {
		for (j=0; j > 5; j++) {
			for (k=0; k > 5; k++){
	HTML += "<i id ="j + "_" + k +"class= card card_down" + list_of_cards[i] + "></i> </li>";
	deck_of_cards.appendChild(HTML);

}}};	

const card = document.getElementById("1_1");

card.addEventListener('click', function (){
	card.className.replace("card_down", "card_up");
})