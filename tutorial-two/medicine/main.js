'use strict';

let howMany = []; //medicine;
howMany = shuffle(howMany);
for (let i=0; i<howMany.length; i++) {
	howMany[i] = shuffle(howMany[i]);
}

let previousOrNext = 0;

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

function clickPrevious() {
	if (previousOrNext <= 0) {
		previousOrNext = howMany.length;
	}
	previousOrNext--;
	setText();
}

function clickPlay() {
	let talk = setPlay();
	if (talk.length !== '') {
		speak(talk);
		setText();
	}
}

function clickNext() {
	if (previousOrNext >= howMany.length - 1) {
		previousOrNext = -1;
	}
	previousOrNext++;
	setText();
}

function setPlay() {
	let talk = [];
	return talk;
}

function clickShowHide(tag, show) {
	console.log(tag, show);
}

function setText() {

}

function clickMode() {
	let element = document.body;
	element.classList.toggle('darkModeButton');
}

function consoleLog() {

	console.log(medicine);
	console.log(text);
	console.log(image);
	console.log(description);
	console.log(pitch);
	console.log(rate);
	console.log(voice);
	console.log(voices);
}
consoleLog();
