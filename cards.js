var cards=[1,2,3,4,5];
function sortCards() {
	cards.sort(function(a, b){return 0.5 - Math.random()});
	console.log(cards);

	$(function() {
		$(".colorbox").each(function(i, obj) {
			$(this).text(cards[i]);
		})
	});
}

$( document ).ready(function() {
	console.log("Valmis");

	$( "#sortbutton").click(function() {
		sortCards();
	});
});