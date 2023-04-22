'use strict';

let howMany = [];
for (let i=0; i<allWords.length; i++) {
    howMany = howMany.concat(allWords[i]);
}
howMany = shuffle(howMany);

let previousOrNext = 0;

let show = true;

let readonly = document.getElementById('readonly');

let words = document.getElementById('words');

let checkboxes = setCheckboxes(words);

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

function addElement(element, key, value) {

	const div = document.createElement('div');
	div.classList.add('wordsGrid');

	const checkbox = document.createElement('input');
	checkbox.type = 'checkbox';
	checkbox.checked = 'checked';
	checkbox.classList.add('wordsCheckbox');

	const label = document.createElement('label');
	label.for = key;
	label.innerHTML = value;
	label.classList.add('wordsLabel')

	div.appendChild(checkbox);
	div.appendChild(label);

	element.appendChild(div);

	return {
		div: div,
		checkbox: checkbox,
		label: label,
	};
}

function setCheckboxes(words) {

	let checkboxes = [{
		key: 'one',
		value: 'One',
	}, {
		key: 'two',
		value: 'Two',
	}, {
		key: 'three',
		value: 'Three',
	}, {
		key: 'four',
		value: 'Four',
	}, {
		key: 'five',
		value: 'Five',
	}, {
		key: 'six',
		value: 'Six',
	}, {
		key: 'seven',
		value: 'Seven',
	}, {
		key: 'eight',
		value: 'Eight',
	}, {
		key: 'nine',
		value: 'Nine',
	}, {
		key: 'ten',
		value: 'Ten',
	}, {
		key: 'eleven',
		value: 'Eleven',
	}, {
		key: 'twelve',
		value: 'Twelve',
	}, {
		key: 'thirteen',
		value: 'Thirteen',
	}, {
		key: 'fourteen',
		value: 'Fourteen',
	}];

	let elements = [];
	for (let i=0; i<checkboxes.length; i++) {
		elements.push(Object.assign(checkboxes[i],
			addElement(words, checkboxes[i].key, checkboxes[i].value)));
	}

	return elements;
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

function clickButtonShow() {
	show = !show;
	readonly.value = show
		? howMany[previousOrNext]
		: '-----';
}

function clickButtonCheck() {
	previousOrNext = 0;
	howMany = [];
	for (let i=0; i<allWords.length; i++) {
		if (checkboxes[i].checkbox.checked) {
			howMany = howMany.concat(allWords[i]);
		}
	}
	howMany = shuffle(howMany);
	return setValues();
}

function clickButtonNext() {
	if (previousOrNext >= howMany.length - 1) {
		previousOrNext = -1;
	}
	previousOrNext++;
	return setValues();
}

function setValues() {
    readonly.value = show
        ? howMany[previousOrNext]
        : '-----';
	text.value = '';
}

function clickButtonMode() {
	let element = document.body;
	element.classList.toggle('darkModeButton');
}
