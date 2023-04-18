'use strict';

let howMany = allSentences[0].key;
howMany = shuffle(howMany);
for (let i=0; i<howMany.length; i++) {
	howMany[i] = shuffle(howMany[i]);
}

let previousOrNext = 0;

setSelectSentences();
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

function setSelectSentences() {
	sentences.innerHTML = '';
	for (let i = 0; i < allSentences.length; i++) {
		const option = document.createElement('option');
		option.textContent = `${allSentences[i].name}`;
		sentences.appendChild(option);
	}
}

function clickSelectSentences() {
	previousOrNext = 0;
	howMany = allSentences[sentences.options.selectedIndex].key;
	howMany = shuffle(howMany);
	for (let i=0; i<howMany.length; i++) {
		howMany[i] = shuffle(howMany[i]);
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
	if (howMany[previousOrNext].length === 1) {
		speak(readonly.value + ' ' + text.value);
	} else if (text.value !== '') {
		speak(text.value);
	}
}

function clickButtonNext() {
	if (previousOrNext >= howMany.length - 1) {
		previousOrNext = -1;
	}
	previousOrNext++;
	return setValues();
}

function setValues() {
	let value = '';
	for (let i=0; i<howMany[previousOrNext].length; i++) {
		value += howMany[previousOrNext][i] + ' ';
	}
	readonly.value = value.trim();
	text.value = '';
}

function clickButtonMode() {
	let element = document.body;
	element.classList.toggle('darkModeButton');
}
