var cards = ["black", "blue", "green", "red", "yellow"];

function sortCards() {
	cards.sort(function(a, b){return 0.5 - Math.random()});
	console.log(cards);

	$(function() {
		$(".colorbox").each(function(i, obj) {
			$(this).text(cards[i]);
			$(this).attr("class","colorbox").addClass(cards[i]);
		})
	});
}

$( document ).ready(function() {
	console.log("Valmis");

	$( "#sortbutton").click(function() {
		sortCards();
	});
});