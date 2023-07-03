'use strict';

let all = [hiragana[0], katakana[0]];

let howMany = all[0];
let previousOrNext = 0;

let text = document.getElementById('text');
let gif = document.getElementById('gif');
let png = document.getElementById('png');

let random = document.getElementById('random');
let randomCheck = false;

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

function clickSelectSentences() {
	//previousOrNext = 0;
	howMany = all[sentences.options.selectedIndex];
	if (randomCheck == true) {
		howMany = shuffle(howMany);
	}
	return setValues();
} 

function clickButtonPrevious() {
	if (previousOrNext <= 0) {
		previousOrNext = howMany.length;
	}
	previousOrNext--;
	return setValues();
}

function clickButtonNext() {
	if (previousOrNext >= howMany.length - 1) {
		previousOrNext = -1;
	}
	previousOrNext++;
	return setValues();
}

function clickCheckRandom() {
	randomCheck = !randomCheck;
	clickSelectSentences();
}

function setValues() {
    text.value = howMany[previousOrNext].text;
    gif.src = howMany[previousOrNext].gif;
    png.src = howMany[previousOrNext].png;
    return howMany[previousOrNext];
}

function clickButtonMode() {
	let element = document.body;
	element.classList.toggle('darkModeButton');
}
