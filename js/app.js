const card = document.getElementById("1_1");
const card_front = document.getElementById("card_front");

card.addEventListener('click', function () {
	(card.innerHTML = "3");
});
