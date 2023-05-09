'use strict';

let howMany = allVocabulary[0].vocabulary;
//howMany = shuffle(howMany);

let previousOrNext = 0;

setSelectVocabulary();
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

function setSelectVocabulary() {
	vocabulary.innerHTML = '';
	for (let i = 0; i < allVocabulary.length; i++) {
		const option = document.createElement('option');
		option.textContent = `${allVocabulary[i].key}`;
		vocabulary.appendChild(option);
	}
}

function clickSelectVocabulary() {
	previousOrNext = 0;
	howMany = allVocabulary[vocabulary.options.selectedIndex].vocabulary;
	//howMany = shuffle(howMany);
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
	speak(text.value);
}

function clickButtonAllPlay() {
	textarea.value !== ''
		? speak(textarea.value)
		: speak(text.value);
}

function clickButtonNext() {
	if (previousOrNext >= howMany.length - 1) {
		previousOrNext = -1;
	}
	previousOrNext++;
	return setValues();
}

function setValues() {
	text.value = howMany[previousOrNext];
}

function clickButtonMode() {
	let element = document.body;
	element.classList.toggle('darkModeButton');
}
