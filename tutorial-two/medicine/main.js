'use strict';

let howMany = medicine;
howMany = shuffle(howMany);

let previousOrNext = 0;

let text = document.getElementById('text');
let image = document.getElementById('image');
let description = document.getElementById('description');

let textButton = document.getElementById('textButton');
let imageButton = document.getElementById('imageButton');
let descriptionButton = document.getElementById('descriptionButton');

let textShowHide = true;
let imageShowHide = false;
let descriptionShowHide = false;

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
	speak(howMany[previousOrNext].name);
}

function clickButtonNext() {
	if (previousOrNext >= howMany.length - 1) {
		previousOrNext = -1;
	}
	previousOrNext++;
	return setValues();
}

function setValues() {
    text.value = textShowHide
        ? howMany[previousOrNext].name
        : '-----';
    image.src = imageShowHide
        ? howMany[previousOrNext].image
        : 'files/blank-black.jpg';
    description.value = descriptionShowHide
        ? howMany[previousOrNext].description
        : '-----';
    return howMany[previousOrNext];
}

function clickButtonText() {
	textShowHide = !textShowHide;
	text.value = textShowHide
		? howMany[previousOrNext].name
		: '-----';
	textButton.innerHTML = textShowHide
		? 'Text Hide'
		: 'Text Show';
}

function clickButtonImage() {
	imageShowHide = !imageShowHide;
	image.src = imageShowHide
		? howMany[previousOrNext].image
		: 'files/blank-black.jpg';
	imageButton.innerHTML = imageShowHide
		? 'Image Hide'
		: 'Image Show';
}

function clickButtonDescription() {
	descriptionShowHide = !descriptionShowHide;
	description.value = descriptionShowHide
		? howMany[previousOrNext].description
		: '-----';
	descriptionButton.innerHTML = descriptionShowHide
		? 'Description Hide'
		: 'Description Show';
}

function clickButtonMode() {
	let element = document.body;
	element.classList.toggle('darkModeButton');
}
