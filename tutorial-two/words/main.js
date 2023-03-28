'use strict';

let howMany = []; //words;
howMany = shuffle(howMany);
for (let i=0; i<howMany.length; i++) {
	howMany[i] = shuffle(howMany[i]);
}

let previousOrNext = 0;

let previous = document.getElementById('previous');
previous.addEventListener('click', clickPrevious, false);

let play = document.getElementById('play');
play.addEventListener('click', clickPlay, false);

let next = document.getElementById('next');
next.addEventListener('click', clickNext, false);

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

}

function setText() {

}

function consoleLog() {

	console.log(words);
	console.log(previous);
	console.log(play);
	console.log(next);
	console.log(pitch);
	console.log(rate);
	console.log(voice);
	console.log(voices);
}
consoleLog();
