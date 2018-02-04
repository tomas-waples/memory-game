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
var k = "";
var deck_of_cards = document.getElementById("deck_of_cards");
var listLength = list_of_cards.length;
var cardsHtml =  "<li class=\"card\">";

function shuffle(list_of_cards) {
    var currentIndex = list_of_cards.length, temporaryValue, randomIndex;

    while (currentIndex !== 0) {
        randomIndex = Math.floor(Math.random() * currentIndex);
        currentIndex -= 1;
        temporaryValue = list_of_cards[currentIndex];
        list_of_cards[currentIndex] = list_of_cards[randomIndex];
        list_of_cards[randomIndex] = temporaryValue;
    }

    return list_of_cards;
}
loop1:
 for (j=1; j < 5; j++){
		 loop2:
		 for (k=1; k < 5; k++)
		 	loop3:
		 	for (i=0; i < listLength; i++)
		 		{			
	 cardsHtml += "<i id ="+ j + "_" + k +" class = \"card\" ><span class = \"card_down " + list_of_cards[i] + "\">" + "</span></i>";

	 deck_of_cards.innerHTML = cardsHtml;
		
		continue loop2;
}};
