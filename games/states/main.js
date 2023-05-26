'use strict';

let howMany = states;
howMany = shuffle(howMany);

let previousOrNext = 0;

let text = document.getElementById('text');
let textShowHide = true;

setValues();

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

function clickButtonPrevious() {
	if (previousOrNext <= 0) {
		previousOrNext = howMany.length;
	}
	previousOrNext--;
	return setValues();
}

function clickButtonPlay() {
	speak(howMany[previousOrNext].state);
}

function clickButtonNext() {
	if (previousOrNext >= howMany.length - 1) {
		previousOrNext = -1;
	}
	previousOrNext++;
	return setValues();
}

function clickButtonText() {
	textShowHide = !textShowHide;
	text.value = textShowHide
		? howMany[previousOrNext].state
		: '-----';
}

function setValues() {
    text.value = textShowHide
        ? howMany[previousOrNext].state
        : '-----';
    return howMany[previousOrNext];
}

function clickButtonMode() {
	let element = document.body;
	element.classList.toggle('darkModeButton');
}
