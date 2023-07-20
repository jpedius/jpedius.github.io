'use strict';

let s = [];
let a = [];
let c = [];
let d = [];
for (let i=0; i<states.length; i++) {
	s.push(states[i].state);
	a.push(states[i].abbreviation);
	c.push(states[i].capital);
	d.push(states[i].month + '/' + states[i].day + '/' + states[i].year);
}

let alphabet = [lower, upper, calendar, s, a, c, d];

let howMany = alphabet[0];
let previousOrNext = 0;

let text = document.getElementById('text');
let textShowHide = true;

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
	previousOrNext = 0;
	howMany = alphabet[sentences.options.selectedIndex];
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

function clickButtonPlay() {
	speak(howMany[previousOrNext]);
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
		? howMany[previousOrNext]
		: '--';
}

function clickCheckRandom() {
	randomCheck = !randomCheck;
	clickSelectSentences();
}

function setValues() {
    text.value = textShowHide
        ? howMany[previousOrNext]
        : '--';
    return howMany[previousOrNext];
}

function clickButtonMode() {
	let element = document.body;
	element.classList.toggle('darkModeButton');
}
