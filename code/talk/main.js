'use strict';

let text = document.getElementById('text');

clickSelectSentences();

function shuffle(array) {

	let items = JSON.parse(JSON.stringify(array));
	let currentIndex = items.length, randomIndex;

	// While there remain elements to shuffle...
	while (currentIndex !== 0) {

		// Pick a remaining element...
		randomIndex = Math.floor(Math.random() * currentIndex);
		currentIndex--;

		// And swap it with the current element.
		[items[currentIndex], items[randomIndex]] = [
		items[randomIndex], items[currentIndex]];
	}

	return items;
}

function clickSelectSentences() {

}

function clickButtonMode() {
	let element = document.body;
	element.classList.toggle('darkModeButton');
    text.classList.toggle('darkModeButton');
}
